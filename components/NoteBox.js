import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import { Colors } from '../common/Colors'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { softDeleteNote } from '../redux/notesSlice';

export default function NoteBox({note}) {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    function editPress(){
        navigation.navigate('EditNote',{noteId:note.id})
    }

    function deleteNote(){
        dispatch(softDeleteNote({id:note.id}));
    }

  return (
    <View style={styles.container}>
        <View style={styles.informationContainer}>
            <Text style={styles.noteTitle}>{note.title}</Text>
            <Text style={styles.noteDate}>{note.createdAt}</Text>
        </View>
        <View style={styles.actionsConytainer}>
            <Pressable style={({pressed})=>{pressed&&styles.pressed}} android_ripple={{color:"#eee"}} onPress={deleteNote}>
                <View style={styles.btn}>
                    <Entypo name="cross" size={24} color={Colors.primary} />               
                </View>
            </Pressable>
            <Pressable style={({pressed})=>{pressed&&styles.pressed}} android_ripple={{color:"#eee"}} onPress={editPress}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>Edit</Text>
                </View>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderWidth:2,
        borderColor:Colors.primary,
        elevation:4,
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:16,
        flexDirection:"row",
        justifyContent:"space-between",
        gap:32,
        marginBottom:16
    },
    informationContainer:{
        flex:1,
        justifyContent:"space-between",
        gap:40
    },
    noteTitle:{
        fontWeight:"600",
        fontSize:16,
    },
    noteDate:{
        fontWeight:"300",
        fontSize:14
    },
    actionsConytainer:{
        justifyContent:"space-between",
    },
    btn:{
        padding:4
    },
    btnText:{
        color:Colors.primary
    },
    pressed:{
        opacity:0.7,
    }
})