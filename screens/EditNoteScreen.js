import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import ChildButton from '../components/ChildButton'
import { useDispatch, useSelector } from 'react-redux'
import { updateNote } from '../redux/notesSlice'
import { useNavigation } from '@react-navigation/native'

export default function EditNoteScreen({route}) {
    const {noteId} = route.params;
    const {notes} = useSelector(s => s.notes);
    const note = notes.find(no=>no.id === noteId);
    const [title,setTitle] = useState(note.title);
    const dispatch = useDispatch();
    const navigate = useNavigation();

    function handelEditNote(){
        dispatch(updateNote({id:noteId,title}));
        navigate.navigate('Home');
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
            <ChildButton padding={true} raduis={24} onPress={handelEditNote}>
                Edit
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