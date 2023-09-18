import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.elevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>Tap</Text>
        </View>
      </ScrollView>
    </View>

  )
}

export default ElevatedCard

const styles = StyleSheet.create({
    headingText :{
        fontSize:24,
        color: "#fff",
        paddingHorizontal: 10,
    },
    card :{
       width:100,
       height:100,
       borderRadius:4,
       margin:6,
       flex:1,
        justifyContent:'center',
        alignItems:'center',
        color: '#000000'
    },
    elevated :{
      backgroundColor:'#cad5e2',
      elevation:4,
      shadowOffset:{

        width:10,
        height:10,
      },
      shadowColor: '#EF5354',
      shadowOpacity:1,
      shadowRadius: 10
    },
     container :{
     
       padding: 8,
    },
})