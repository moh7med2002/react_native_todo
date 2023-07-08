import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../common/Colors'
import NoteBox from './NoteBox'
import DeletedNoteBox from './DeletedNoteBox'
import { FlatList } from 'react-native'

export default function DeletedNotesList({notes}) {
    // if(!notes || notes.length===0){
    //     return <View style={styles.fullbackContainer}>
    //         <Text style={styles.fullbackText}>There is no notes yet! Click to the + button to add...</Text>
    //     </View>
    // }
  return (
    <View style={{marginTop:16}}>
        <FlatList
        data={notes}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=><DeletedNoteBox note={item}/>}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    fullbackContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    fullbackText:{
        color:Colors.primary,
        fontSize:16,
        fontWeight:"500"
    }
})