import React from 'react'
import {View,Text} from 'react-native'
import TextAnimation from './TextAnimation'

export default function App (){
  return(
    <View style={{flex:1,backgroundColor:'pink',justifyContent:'center'}}>
      <TextAnimation 
        content={'Hello world, I am sabiq and i am a react native developer. I hope you enjoy this animation'}
        textStyle={{fontSize:30,fontWeight:'bold',color:'white'}}
        style={{margin:10}}
        duration={1000}
      />
    </View>
  )
}