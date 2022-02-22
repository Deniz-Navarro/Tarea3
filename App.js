import React from 'react';
import { Button, View } from 'react-native';

const Enviardatos = () =>{
  var url = 'https://calculadora-server.herokuapp.com/states-control';
var data = {accountNumber: 20160951,
name: 'Luis Ignacio Deniz Navarro',
age: 20
};

fetch(url, {
  method: 'POST', 
  body: JSON.stringify(data), 
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Datos:', response));

}


const App = () =>{

  return (
    <View>
      <Button title='Enviar Datos' onPress={Enviardatos()}/>
    </View>
  );
};

export default App;
