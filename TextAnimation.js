import React from 'react'
import {View,Text,StyleSheet,Animated} from 'react-native'

export default class TextAnimation extends React.Component{
    
    animatedValue = []

    constructor(props){
        super(props)


        const textArray = props.content.trim().split(' ');
        this.textArray = textArray
        textArray.forEach((x,index)=>{
            this.animatedValue[index] = new Animated.Value(0)
        })
    }

    componentDidMount(){
        this.animated()
    }
    animated=(toValue=1)=>{
        const animations = this.textArray.map((_,index)=>{
            return(
                Animated.timing(this.animatedValue[index],{
                    toValue,
                    duration:this.props.duration
                })
            )
        })
        
        Animated.stagger(this.props.duration/5,animations).start(()=>{
            setTimeout(() => {
               this.animated(toValue === 0 ? 1 : 0) 
            }, );
        });
   
    }
    
    render() {
        return(
            <View style={[this.props.style,Styles.textwrapper]}>
                {this.textArray.map((word,index)=>{
                    return(
                    <Animated.Text key={`${word}-${index}`} style={[this.props.textStyle,
                        {opacity:this.animatedValue[index],
                            transform:[{
                                translateY:Animated.multiply(this.animatedValue[index],new Animated.Value(-5))
                            }]}]}>{word} {" "}</Animated.Text>
                    )
                })}
            </View>
        )
    }
}

const Styles=StyleSheet.create({
    textwrapper:{
        flexDirection:'row',
        flexWrap:'wrap'
    }
})