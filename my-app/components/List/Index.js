import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Item = ({item, onPress}) => {
  const onHandlePress = () =>{
    onPress(item)
  }
  
  return (
    <Text 
      onPress={onHandlePress}
      styles={styles.item}>{item.value}
    </Text>
  )
}

const styles = StyleSheet.create({
    item:{
      fontSize:20,
      textAlign: 'center',
      margin:10,
      border: 3,
      borderColor: "#dff6f7"
    }
  })
  
export default Item