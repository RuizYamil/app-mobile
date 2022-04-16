import React, {useState, useEffect} from 'react'
import { StyleSheet, View,Text, FlatList } from 'react-native';
import PropTypes from 'prop-types'
import Item from './Item';
import ModalMobile from '../Modal';

const ListItem = props => {
    const {items,emptyListMsg, headerList, handlerModal} = props;
    const {containerList, emptyList, title}  = styles;
    const [item, setItem] = useState({})
    const [listItems, setItems] = useState(items);
    const [modalVisible, setModalVisible ] = useState(false);
    const [modalMsg, setModalMsg] = useState('');
    
    useEffect(() => {
        setItems(items)
    }, [items]);

    const onPress = (item) =>{
      setItem(item)
      setModalMsg("DESEA ELIMINAR EL ITEM");
      setModalVisible(true)
    }
    const onHandlerModal = id => {
      const updateList = listItems.filter( (item) => item.id !== id)
      setItems(updateList);
      setModalVisible(false)
      handlerModal(updateList)
    }

    const closeModal = () => {
      setModalVisible(!modalVisible);
    }
    const renderItem = ({item})  => <Item onPress ={onPress} item={item}/>
  return (
    <View style={containerList}>  
        {
          !listItems.length?
          <Text style={emptyList}>{emptyListMsg}</Text>
          :(
            <>
              <Text style={title}>{headerList}</Text>
              <FlatList
                data={listItems}
                renderItem={renderItem}
                keyExtractor = {item => item.id}
              />
              <ModalMobile
                item={item}
                title ={'ELIMINAR'}
                body= {modalMsg}
                modalVisible={modalVisible}
                actionTitle={'ELIMINAR'}
                closeModal={closeModal}
                onHandlerModal={onHandlerModal}
              />
            </>
          )
        } 
    </View>
    )
}

ListItem.defaultProps = {
  items: []
}

ListItem.propTypes = {
    items: PropTypes.array,
    emptyListMsg: PropTypes.string.isRequired,
    headerList: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  containerList:{
      backgroundColor: '#48cae4',
      flex: 2,
      borderRadius:10,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    },
    emptyList:{
      backgroundColor: '#48cae4',
      borderRadius: 3,
      height: 100,
      alignSelf:'center',
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      padding: 6,
      color: 'white',
      fontWeight: 600
    },
    title: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 600
    }
});
export default ListItem