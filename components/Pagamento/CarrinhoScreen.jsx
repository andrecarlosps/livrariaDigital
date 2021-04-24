import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, buttonContainer } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {FloatingLabelInput} from 'react-native-floating-label-input';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import {storeData, getData} from './Carrinho';





const CarrinhoScreen = (props) => {
    const initialCarrinho = {
        
    }

    const [carrinho, setCarrinho]=useState(initialCarrinho);

    const handleChange = (value, name) => {
        setCarrinho({...carrinho, [name] : value});
    }

    const Pagamento = () => {
        const resultado= storeData();
        if(resultado){
            Alert.alert();
            getData().then(result => {
                Alert.alert();
            });
        }else{
            Alert.alert();
        }
    }
    


    return (
        <View style={styles.container}>
           
            <TextInput 
                
                placeholder='Harry Potter - A ordem da Fenix'
                style={styles.textBox}
                
            />
              <TextInput 
                
                placeholder='R$59,99'
                style={styles.textBox}
                
            />
           
            
            <Text style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={Pagamento}
                    style={styles.link} onPress={()=>props.navigation.navigate ('Pagamento.JSx')}
                >
                    
                </TouchableOpacity>
                <TouchableOpacity
                    style={ {...styles.button, marginVertical: 0, marginLeft: 10, backgroundColor: "tomato"} }
                >
                    <Text style={styles.buttonText}>Pagamento</Text>
                </TouchableOpacity>
            </Text>

        </View>
        
        
    );
}

<view></view>
export default CarrinhoScreen;

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

