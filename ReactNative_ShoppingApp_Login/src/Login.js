import React from 'react';
import { SafeAreaView, View,Text,Image ,StyleSheet, Dimensions,tintColor} from 'react-native';
import {Input,Button} from './component';  


const Login = () => {
    return(
      <SafeAreaView style={styles.container}>
          <View style={{flex:1}}>
              <Image
              source={require('./assets/cart.png')}
              style={styles.image}
              />
             <Input holder = 'Enter your E-mail'/>
             <Input holder = 'Enter your Password'/>
             <Button/>
          </View>
      </SafeAreaView>  
        
    )
} 

export default Login;

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'#c5cae9',
        justifyContent:'center',
        borderWidth:10,
        borderColor:'rgba(000,000,000,0.6)',
        borderRadius:40,
        
    },
    image:{
        
        resizeMode:'contain', // alttaki deger verilmeden calismadi
        width: Dimensions.get('window').width, // ekranin genisligine gore genislik verms olduk.
        height:Dimensions.get('window').height * 0.40, // ekranin boyunun %40 iin kapla
        tintColor:'#607d8b', // resmin rengi icin
        
        

    }
})

