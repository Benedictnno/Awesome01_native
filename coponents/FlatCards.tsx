import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText} >Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Reds</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Reds</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Reds</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText :{
        fontSize:24,
        color: "#fff",
        paddingHorizontal: 10,
    },
    container :{
       flex:1,
       flexDirection: 'row',
       padding: 8,
    },
    card :{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       width:100,
       height:100,
       borderRadius:4,
       margin:8,
    },
    cardOne :{
       backgroundColor: '#EF5354'
    },
    cardTwo :{
       backgroundColor: '#50dbb4'
    },
    cardThree :{
       backgroundColor: '#5da3ea'
    },
})