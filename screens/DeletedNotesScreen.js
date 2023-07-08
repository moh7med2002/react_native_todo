import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import DeletedScreenTop from '../components/DeletedScreenTop'
import DeletedNotesList from '../components/DeletedNoteList'
import { useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'



export default function DeletedNotesScreen() {
  const {notes} = useSelector(s =>s.notes);
  const [allNotes ,  setAllNotes] = useState([]);
  const isFoucesd = useIsFocused();

  useEffect(()=>{
    isFoucesd&& setAllNotes(notes.filter(no=>no.deleted===true));
  },[isFoucesd,notes]);


  return (
    <View style={styles.container}>
        <DeletedScreenTop total={allNotes.length}/>
        <DeletedNotesList notes={allNotes}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:24,
        flex:1,
    },
})