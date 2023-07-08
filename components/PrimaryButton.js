import { StyleSheet, Text, View , Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../common/Colors'

const PrimaryButton = ({children,onPress , raduis}) => {
  return (
    <Pressable style={({pressed})=>[pressed&&styles.pressed , styles.btn]} onPress={onPress}>
        <View style={[styles.innerContainer, raduis?{borderRadius:21}:{borderRadius:6}]}>
            {children}
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
        padding:8,
        width:42,
        height:42,
        backgroundColor:Colors.primary,
        alignItems:"center",
        justifyContent:"center"
    },
})

export default PrimaryButton
