import { StyleSheet, View } from 'react-native';
import { useState } from "react";
import ItemList from './components/List/ItemList';
import AddItem from './components/AddItem/AddItem';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  })

  const [items, setItems] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleOnPress = value => {
    const newItem = {id: counter, value}
    setItems([...items, newItem]);
    setCounter(counter + 1);
  }
  const handlerModal = (items) =>{
    setItems(items)
  }
  
  const {container}  = styles;
  if(!loaded) return <AppLoading/>
  return (
    <View style={container}>
      <AddItem
        placeholder={"Ingrese un item"}
        buttonValue= {"Agregar"}
        handleOnPress={handleOnPress}
        />
      <ItemList
          items={items}
          emptyListMsg= {'NO SE ENCONTRARON ELEMENTOS EN LA LISTA'}
          headerList = {'LISTA DE ITEMS'}
          handlerModal={handlerModal}
      /> 
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 20,
    flexDirection: 'column',
    alignContent: 'center'
  },
  button: {
    width: 30,
    backgroundColor:'#03045e',
    marginTop:30
  },
  containerAddItem:{
    padding: 20,
    marginTop:10,
    marginBottom: 10,
    backgroundColor: '#48cae4',
    borderRadius:10,
    flexDirection: 'column'
  },
});