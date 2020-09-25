 
import React from 'react';
 
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
export default function LoginForm() {
  return (
    <View style={styles.container}>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Log in</Text>
      </View>



      <View>
        <TextInput placeholder="Username"
         style={styles.inputs}
         placeholderTextColor="#aaaaaa"
          />

        <TextInput placeholder="password" 
         style={styles.inputs}
         placeholderTextColor="#aaaaaa"
         secureTextEntry={true}
          />
        <Text style={styles.forgotpassword} >Forgot password?</Text>
      </View>



      <View>
         <TouchableOpacity style={styles.loginButtonContainer}>
           <Text style={styles.loginButtonText}>Log in</Text>
         </TouchableOpacity>
      </View>


      <View style={styles.donthaveAccountContainer}>
        <Text style={styles.donthaveAccountText}>Dont have an account?</Text>
        <Text style={styles.signupText}>Sign up</Text>
      </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     marginHorizontal:50,
     marginTop:100
  },

  loginContainer:{
        marginBottom:60
  },

  loginText:{
    fontSize:50,
    color:"#6a5acd"
  },

  inputs:{
     height:60,
     borderBottomWidth:2,
     borderBottomColor:"#6a5acd",
     marginTop:30
  },

  forgotpassword:{
    alignSelf:"flex-end",
    marginTop:3,
    color:"deepskyblue",
    fontSize:16
  },

  loginButtonContainer:{
    height:50,
    backgroundColor:"#6a5acd",
    alignItems:"center",
    justifyContent:"center",
    borderRadius:15,
    marginVertical:55
  },

  loginButtonText:{
      color:"white",
      fontSize:22,
      fontWeight:"bold",
  },

  donthaveAccountContainer:{
    flexDirection:"row",
    justifyContent:"center"
  },

  donthaveAccountText:{
    marginHorizontal:6,
    fontSize:16
  },

  signupText:{
        fontSize:16,
        color:"#6a5acd"
  }
  
 });
