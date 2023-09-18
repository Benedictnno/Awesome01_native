import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(link:string) {
        Linking.openURL(link)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View  style={[styles.card,styles.elevated]}>
        <View  style={styles.headerContainer}>
            <Text style={styles.headerText}>
                What's new in javascript 21 -ES12
            </Text>
        </View>
        <Image
         source={{uri:'https://cdn.pixabay.com/photo/2023/05/25/07/31/woman-8016553_640.jpg'}}
         style={styles.cardImage}
         />

         <View style={styles.cardContainer} >
            <Text numberOfLines={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo expedita hic odio voluptas dolorum ut molestiae? Veniam, tenetur iure?</Text>
         </View>
         <View style={styles.FooterContainer} >
            <TouchableOpacity onPress={()=> openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                <Text style={styles.socialLinks} >Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
                <Text style={styles.socialLinks} >Follow Me</Text>
            </TouchableOpacity>
         </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:6,
    },
    card:{
        width:350,
      height:360,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 26, 
justifyContent:'center',
alignSelf:'center'
    },
    elevated:{
        backgroundColor: '#e07c24',
        elevation:3,
        shadowOffset: {
        width: 1,
        height:1,
      },
      shadowColor:'#333',
      shadowOpacity:0.4,
    },
    headerContainer:{
        height:40,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    headerText:{
color:"#000",
fontSize:16,
fontWeight: '600'
    },
    FooterContainer:{
        padding:8,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    cardContainer:{
padding:10,

    },
    socialLinks:{
        fontSize:16,
        color:'#000',
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical: 6,
        borderRadius:5,
    },
    cardImage:{
        height: 190,
    },


})