import React, { Component } from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, Alert,Image} from 'react-native';
import db from '../config' 
import firebase from 'firebase'
import LottieView from 'lottie-react-native';

export default class WelcomeScreen extends Component {
    constructor (){
        super();
        this.state={
            emailId:'',
            password:''
        }
    }

    userSignUp=(emailId,password)=> {
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert('User added sucessfully')
        })
        .catch(function(error){
       
            var errorCode=error.code;
            var erorMessage=error.message;
            return Alert.alert(errorMessage)
    })
    }

    userLogin=(emailId,password)=> {
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then((response)=>{
            return Alert.alert('Sucessfully Login')
        })
        .catch(function(error){
            var errorCode=error.code;
            var erorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }
    render (){
        return(
            <View style={styles.container}>
                <View>
                {/* <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: '#eee',
            height:200
          }}
          source={require('../assets/walkwalk.json')}
        /> */}


        {/* <Image 
        source={{uri:'https://www.kindpng.com/picc/m/191-1918687_mobile-app-flat-icon-hd-png-download.png'}}
        /> */}

           <Image
            source={{
              uri:'https://www.kindpng.com/picc/m/191-1918687_mobile-app-flat-icon-hd-png-download.png'
            }}
            />

                    <Text style={styles.title}>Barter System</Text>
                </View>

                <View>
                    <TextInput 
                    style={styles.loginBox}
                    placeholder="abc@example.com" 
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}
                    />
                         <TextInput 
                    style={styles.loginBox}
                    secureTextEntry={true}
                    placeholder='Enter Password'
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}
                    />

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{this.userLogin(this.state.emailIdId ,this.state.password)}}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{this.userSignUp(this.state.emailIdId ,this.state.password)}}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F8BE85',
      alignItems:'center',
      justifyContent:'center'
    },

    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      marginBottom:20,
      marginTop:20,
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    }
  })
