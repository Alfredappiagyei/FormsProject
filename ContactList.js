 
import React from 'react';
import {MaterialIcons, MaterialCommunityIcons,SimpleLineIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image } from 'react-native';
import image1 from './assets/48.jpg'
import image2 from './assets/52.jpg'
export default function Contacts() {
  return (
    <View style={styles.container}>
      
      <View style={styles.contactContainer}>
         <Image source={image1} style={styles.image} /> 
         <View style={styles.contactInfo}>
             <Text style={styles.name}>Alfred </Text>
             <Text>0550130742</Text>
         </View>
         <View style={styles.iconsContainer}>

         <MaterialIcons  name="local-phone"  size={28}  style={styles.icons} />        
         < MaterialCommunityIcons name="message-processing"  size={28} style={styles.icons}/>             
         <SimpleLineIcons  name="options-vertical"  size={28} style={[styles.icons, styles.Option]}/>      
         </View>
      </View>


      <View style={styles.contactContainer}>
         <Image source={image2} style={styles.image} /> 
         <View style={styles.contactInfo}>
             <Text style={styles.name}>Samuel</Text>
             <Text>055013742</Text>
         </View>
         <View style={styles.iconsContainer}>

         <MaterialIcons  name="local-phone"  size={28}  style={styles.icons} />        
         < MaterialCommunityIcons name="message-processing"  size={28} style={styles.icons}/>             
         <SimpleLineIcons  name="options-vertical"  size={28} style={[styles.icons, styles.Option]}/>      
         </View>
      </View>


      <View style={styles.contactContainer}>
         <Image source={image1} style={styles.image} /> 
         <View style={styles.contactInfo}>
             <Text style={styles.name}>Awal</Text>
             <Text>0550130742</Text>
         </View>
         <View style={styles.iconsContainer}>

         <MaterialIcons  name="local-phone"  size={28}  style={styles.icons} />        
         < MaterialCommunityIcons name="message-processing"  size={28} style={styles.icons}/>             
         <SimpleLineIcons  name="options-vertical"  size={28} style={[styles.icons, styles.Option]}/>      
         </View>
      </View>

      <View style={styles.contactContainer}>
         <Image source={image2} style={styles.image} /> 
         <View style={styles.contactInfo}>
             <Text style={styles.name}>Zack</Text>
             <Text>0550130742</Text>
         </View>
         <View style={styles.iconsContainer}>

         <MaterialIcons  name="local-phone"  size={28}  style={styles.icons} />        
         < MaterialCommunityIcons name="message-processing"  size={28} style={styles.icons}/>             
         <SimpleLineIcons  name="options-vertical"  size={28} style={[styles.icons, styles.Option]}/>      
         </View>
      </View>

      <View style={styles.contactContainer}>
         <Image source={image1} style={styles.image} /> 
         <View style={styles.contactInfo}>
             <Text style={styles.name}>Solomon</Text>
             <Text>0550130742</Text>
         </View>
         <View style={styles.iconsContainer}>

         <MaterialIcons  name="local-phone"  size={28}  style={styles.icons} />        
         < MaterialCommunityIcons name="message-processing"  size={28} style={styles.icons}/>             
         <SimpleLineIcons  name="options-vertical"  size={28} style={[styles.icons, styles.Option]}/>      
         </View>
      </View>


      <View style={styles.contactContainer}>
         <Image source={image2} style={styles.image} /> 
         <View style={styles.contactInfo}>
             <Text style={styles.name}>Janet</Text>
             <Text>0550130742</Text>
         </View>
         <View style={styles.iconsContainer}>

         <MaterialIcons  name="local-phone"  size={28}  style={styles.icons} />        
         < MaterialCommunityIcons name="message-processing"  size={28} style={styles.icons}/>             
         <SimpleLineIcons  name="options-vertical"  size={28} style={[styles.icons, styles.Option]}/>      
         </View>
      </View> 




    
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     marginHorizontal:10,
     marginTop:40
  },
  contactContainer:{
         flexDirection:"row",
         marginBottom:55,
  },
 
  image:{
      borderRadius:50,
      width:60,
      height:60,

  },

  contactInfo:{
    justifyContent:"center",
   marginRight:45,
   marginLeft:15
  },
  name:{
      fontWeight:"bold",
      marginBottom:6,
      fontSize:16
  },

  iconsContainer:{
    flexDirection:"row",
    marginLeft:60  ,
    marginTop:20
  },
  icons:{
       marginHorizontal:10,   
       color:"dodgerblue"
  },
  
  Option:{
      color:"grey"
  }
 });
