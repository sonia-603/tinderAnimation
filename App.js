import React, { useRef, useState } from 'react';
import {StyleSheet,SafeAreaView, View,Text} from 'react-native';
import Swiper from 'react-native-deck-swiper';

const Card=({card})=>(
    <View style={[styles.cards,{backgroundColor:card.backgroundColor}]}></View>
)
export default function App()
{
    let data=[
        {
            id:'1',
            backgroundColor:'skyblue'
        },
        {
            id:'2',
            backgroundColor:'lightgreen'
        },
        {
            id:'3',
            backgroundColor:'yellow'
        },
        {
            id:'4',
            backgroundColor:'orange'
        },
        {
            id:'5',
            backgroundColor:'red'
        },

    ]
    const[index,setIndex]=useState(0)
    const onSwiped=()=>{
        setIndex(index+1);
    }
    return(
        <SafeAreaView>
            <View style={styles.container}>

           <Swiper
           cards={data}
           cardIndex={index}
           renderCard={ (card)=> <Card card={card}/>}
           onSwiper={onSwiped}
           stackSize= {3}
           stackScale={2}
           stackSeparation={14}
           />
           </View>

        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
      margin:10,
        justifyContent:'center',
        alignItems:'center',

    },
    cards:{
        borderRadius:10,
        shadowRadius:25,
        shadowOpacity:0.08,
        shadowOffset:{width:0,height:0},
        width:326,
        height:500,
       },

})
