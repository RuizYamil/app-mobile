import { StyleSheet, View } from 'react-native';
import { useState } from "react";
import ListItem from './components/List/ListItem';
import AddItem from './components/AddItem';

const App = () =>{
  const [items, setItems] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleOnPress = value => {

    const newItem = {id: counter, value}
    setItems([...items, newItem]);
    setCounter(counter+1);
  }
  const handlerModal = (items) =>{
    setItems(items)
  }
  
  const {container}  = styles;
  return (
    <View style={container}>
      <AddItem
        placeholder={"Ingrese un item"}
        buttonValue= {"Agregar"}
        handleOnPress={handleOnPress}
        />
      <ListItem
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

export default App;