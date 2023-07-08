import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChildButton from './ChildButton'
import { Colors } from '../common/Colors'
import { useDispatch } from 'react-redux'
import { emptyAll, undoAll } from '../redux/notesSlice'

export default function DeletedScreenTop({total}) {

    const dispatch = useDispatch();

    function undo(){
        dispatch(undoAll());
    }

    function empty(){
        dispatch(emptyAll());
    }

  return (
    <View style={styles.conatiner}>
        <ChildButton raduis={24} padding={true} onPress={undo}>
            Undo All
        </ChildButton>
        <Text style={styles.title}>Total: {total}</Text>
        <ChildButton raduis={24} padding={true} onPress={empty}>
            Empty
        </ChildButton>
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottomColor:Colors.primary,
        borderBottomWidth:1,
        paddingBottom:16,
    },
    title:{
        color:Colors.primary,
        fontSize:18,
        fontWeight:"bold"
    }
})