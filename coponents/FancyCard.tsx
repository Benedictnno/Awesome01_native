import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <ScrollView horizontal>
      <View style={[styles.card,styles.elevated]}>
<Image 
source={{uri:'https://cdn.pixabay.com/photo/2023/05/18/20/48/swamp-8003229_640.png'}}
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.cardTitle}>Birds flying</Text>
   
    <Text style={styles.cardLabel}>Birds flying</Text>
    <Text style={styles.cardDescription}>Festac Town is a federal housing estate located along the Lagos-Badagry Expressway in Lagos State, Nigeria.</Text>
    <Text style={styles.cardFooter}>20 min away</Text>
</View>

      </View>
      <View style={[styles.card,styles.elevated]}>
<Image 
source={{uri:'https://cdn.pixabay.com/photo/2023/05/18/20/48/swamp-8003229_640.png'}}
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.cardTitle}>Birds flying</Text>
   
    <Text style={styles.cardLabel}>Birds flying</Text>
    <Text style={styles.cardDescription}>Festac Town is a federal housing estate located along the Lagos-Badagry Expressway in Lagos State, Nigeria.</Text>
    <Text style={styles.cardFooter}>20 min away</Text>
</View>

      </View>
      <View style={[styles.card,styles.elevated]}>
<Image 
source={{uri:'https://cdn.pixabay.com/photo/2023/05/18/20/48/swamp-8003229_640.png'}}
style={styles.cardImage}
/>
<View style={styles.cardBody}>
    <Text style={styles.cardTitle}>Birds flying</Text>
   
    <Text style={styles.cardLabel}>Birds flying</Text>
    <Text style={styles.cardDescription}>Festac Town is a federal housing estate located along the Lagos-Badagry Expressway in Lagos State, Nigeria.</Text>
    <Text style={styles.cardFooter}>20 min away</Text>
</View>

      </View>

      </ScrollView>  
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
     headingText :{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:6,
    },
     cardTitle :{
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6,
    },
     cardDescription :{
        color: '#242B2E',
        marginBottom: 12,
        marginTop: 6,
        flexShrink:1,
      fontSize: 12,
    },
     
     cardFooter :{
        color: '#000'
        
    },
     cardLabel :{
        fontSize:14,
        color: '#000',
        marginBottom: 4,
    },
 container :{
      
    },
    cardBody:{
flex: 1,
flexGrow: 1,
paddingHorizontal: 12,
    },
    card :{
      width:350,
      height:360,
      borderRadius: 10,
      marginVertical: 12,
      marginHorizontal: 10, 
    //   paddingHorizontal:8,
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
    elevated :{
      backgroundColor: '#fff',
      elevation:3,
      shadowOffset: {
        width: 1,
        height:1,
      }

    },
    cardImage : {   
       height:180,
       marginBottom:8,
       borderTopLeftRadius: 10,
    //    width: 180,
    },


})