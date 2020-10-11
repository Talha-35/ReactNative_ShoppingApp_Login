import React from 'react';
import { SafeAreaView, View,Text,Image ,StyleSheet, Dimensions,tintColor} from 'react-native';



const Login = () => {
    return(
      <SafeAreaView>
          <View style={{flex:1}}>
              <Image
              source={require('./assets/cart.png')}
              style={styles.image}
              />
             

          </View>
      </SafeAreaView>  
        
    )
} 

export default Login;

const styles = StyleSheet.create ({
    container:{

    },
    image:{
        backgroundColor:'azure',
        resizeMode:'contain', // alttaki deger verilmeden calismadi
        width: Dimensions.get('window').width, // ekranin genisligine gore genislik verms olduk.
        height:Dimensions.get('window').height * 0.40, // ekranin boyunun %40 iin kapla
        tintColor:'rgba(111,222,444,0.9)', // resmin rengi icin
        

    }
})

// 1.45 ten devam et input ve button olusturacak