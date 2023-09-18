import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import React from 'react'

export default function ContactList() {
     const Contacts = [
    {
      id: 0,
      image: 'https://benedict-porfolio.netlify.app/assets/big_ben-29a91699.png',
      title: "Big Ben's Blog",
      subtitle:
        " Big Ben's Blog is a dynamic .",
     
    },

    {
      id: 1,
      image: 'https://benedict-porfolio.netlify.app/assets/sparrow_Screenshot-b1cbcb09.png',
      title: "Sparrow Networkx",
      subtitle:
        " Welcome to our Sparrow Networkx .",
      
    },
    {
      id: 2,
      image: "https://benedict-porfolio.netlify.app/assets/gitHub-1b4e4b9a.png",
      title: "Git Hub search Info ",
      subtitle:
        "GitHub Insight is a powerful web application",

     
    },

    {
      id: 3,
      image: "https://benedict-porfolio.netlify.app/assets/jobStore-036d8430.png",
      title: "JobSter",
      subtitle: `JobTracker is revolutionary `,
    
    },
    {
      id: 4,
      image: "https://benedict-porfolio.netlify.app/assets/coctail-233ea8ce.png",
      title: "Cocktail db",
      subtitle:
        "The Cocktail DB is a web application",
      
    },
    {
      id: 5,
      image: "https://benedict-porfolio.netlify.app/assets/hydrapage_Screenshot%20-162a6a54.png",
      title: "Hydra Landing Page",
      subtitle: `Welcome to Hydra`,
     
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}  scrollEnabled={true}>
        {
            Contacts.map(({id,title,image,subtitle})=>(
                <View key={id} style={styles.userCard}>
                    <Image source={{uri:image}} style={styles.image} />

                    <View>
                    <Text style={styles.name}> {title} </Text>
                    <Text style={styles.status} numberOfLines={1}> {subtitle} </Text>
                    </View>
                </View>
            ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
     headingText :{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:6,
       
    },
    container:{
        paddingHorizontal:16,
        marginBottom: 4,
    },
    userCard:{
        flexDirection:'row',
        alignItems: 'center',
        marginVertical:5,
        backgroundColor: '#8d3daf',
        padding:8,
        borderRadius:12,
    },
    image:{
        width:60,
        height: 60,
        borderRadius: 60/2,
        marginRight: 14,
    },
    name:{
        fontSize:16,
        color: '#fff',
        fontWeight: '600'
    },
    status:{
        fontSize:12,
        // color: '#758590',
    },
})