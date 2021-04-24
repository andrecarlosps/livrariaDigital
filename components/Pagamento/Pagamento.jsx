import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {FloatingLabelInput} from 'react-native-floating-label-input';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import storeData, {getData} from './Carrinho';



const CreateEditora = (props) => {
    const initialPagamento = {
        "proprietario do cartão": "",
        "Numero do Cartão": "",
        "CVV": "",
        "telefone":"",
         
    }

    const [Pagamento, setPagamento]=useState(initialPagamento);

    const handleChange = (value, name) => {
        setEditora({...editora, [name] : value});
    }

    const Pagamento = () => {
        const resultado= storeData(editora, pagamento.cpf);
        if(resultado){
            Alert.alert("Sucesso","Compra Efetuada");
            getData(editora.cnpj).then(result => {
                Alert.alert("Erro Senha", JSON.stringify(result));
            });
        }else{
            Alert.alert("Erro", Senha Errada +resultado);
        }
    }
    
    
    return (
        <View style={styles.container}>
            <TextInput 
                textContentType='name' 
                onChangeText={ (text) => { handleChange(text,"nome")} }  
                placeholder='Proprietario do cartão'
                style={styles.textBox}
            />
            
            <TextInput 
                keyboardType="numeric"
                onChangeText={ (text) => { handleChange(text,"cnpj")} }  
                placeholder='Numero do cartão'
                style={styles.textBox}
            />

            

            <TextInput 
                keyboardType="numeric"
                onChangeText={ (text) => { handleChange(text,"telefone")} }  
                placeholder='CVV'
                style={styles.textBox}
            />

            
            <Text style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={cadastrar}
                    style={ {...styles.button, marginVertical: 0} }
                >
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ {...styles.button, marginVertical: 0, marginLeft: 10, backgroundColor: "tomato"} }
                >
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </Text>
        </View>
    );
}
export default CreatePagamento;

const styles=StyleSheet.create({
    container: {
        padding: 15
    },
    title:{
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 20
    },
    textBox: {
      borderWidth: 1,
      borderRadius: 6,
      borderColor: "rgba(0,0,0,0.3)",
      marginBottom: 15,
      fontSize: 18,
      padding: 10
    },
    buttonContainer: {
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center"
    },
    button: {
      borderRadius: 5,
      marginVertical: 20,
      alignSelf: 'flex-start',
      backgroundColor: "gray",
    },
    buttonText: {
        color: "white",
        paddingVertical: 6,
        paddingHorizontal: 10,
        fontSize: 16
    },
});