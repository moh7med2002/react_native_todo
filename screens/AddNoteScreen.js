import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import ChildButton from '../components/ChildButton'
import { Note } from '../models/Note'
import { useDispatch } from 'react-redux'
import { addNodte } from '../redux/notesSlice'
import { useNavigation } from '@react-navigation/native'

export default function AddNoteScreen() {
    const [title , setTitle] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();


    function onAddNote(){
        const note = new Note(title);
        dispatch(addNodte({title}))
        navigation.navigate('Home')
    }
    
  return (
    <View style={styles.container}>
        <TextInput
        placeholder="Add your note..."
        style={styles.input}
        multiline
        numberOfLines={12}
        textAlignVertical="top" 
        value={title}
        onChangeText={e=>setTitle(e)}
        />
        <View style={styles.btnWrapper}>
            <ChildButton padding={true} raduis={24} onPress={onAddNote}>
                Add
            </ChildButton>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:24,
        flex:1,
    },
    input:{
        borderColor:Colors.primary,
        borderWidth:2,
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:12,
        backgroundColor:"white",
        elevation:8,
    },
    btnWrapper:{
        marginTop:20,
        alignItems:"flex-end"
    }
})