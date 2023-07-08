import { StyleSheet, Text, View , Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../common/Colors'

const ChildButton = ({children,onPress , padding,raduis}) => {
  return (
    <Pressable style={({pressed})=>[pressed&&styles.pressed , styles.btn]} onPress={onPress}>
        <View style={[styles.innerContainer,{ borderRadius:raduis} , padding?styles.isPadding:{padding:11}]}>
            <Text style={styles.text}>{children}</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    btn:{
        // marginBottom:24
    },
    pressed:{
        opacity:0.7,
    },
    innerContainer:{
        padding:12,
        borderRadius:6,
        backgroundColor:Colors.primary
    },
    text:{
        color:"white"
    },
    isPadding:{
        paddingHorizontal:26
    }
})

export default ChildButton
