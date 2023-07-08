import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopHome from '../components/TopHome'
import Search from '../components/Search'
import NotesList from '../components/NotesList'
import { useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'

const HomeScreen = () => {
  const {notes} = useSelector(s =>s.notes);
  const [allNotes ,  setAllNotes] = useState([]);
  const isFoucesd = useIsFocused();

  useEffect(()=>{
    isFoucesd&& setAllNotes(notes.filter(no=>no.deleted===false));
  },[isFoucesd,notes]);


  const [searchText , setsearchText] = useState('')

  function handelSearch(){
    setAllNotes(notes.filter(note=> String(note.title).includes(searchText) && note.deleted===false));
  }

  function clearSearch(){
    setsearchText('');
  }



  return (
    <View style={styles.container}>
      <TopHome total={allNotes.length}/>
      <Search searchText={searchText} setsearchText={setsearchText} clearSearch={clearSearch} handelSearch={handelSearch}/>
      <NotesList notes={allNotes}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    padding:24,
    flex:1,
  }
})