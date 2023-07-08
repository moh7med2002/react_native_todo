import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons , AntDesign } from '@expo/vector-icons'; 
import PrimaryButton from './PrimaryButton';
import { Colors } from '../common/Colors';
import { useNavigation } from '@react-navigation/native';


export default function TopHome({total}) {
 
    const navigation = useNavigation();

    function clickAddNote(){
        navigation.navigate('AddNote');
    }

    function clickDeletedNotes(){
        navigation.navigate('DeletedNotes');
    }

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.title}>Your Notes...</Text>
            <Text style={styles.total}>Total: {total}</Text>
        </View>
        <View style={styles.btnsContainer}>
            <PrimaryButton raduis={true} onPress={clickDeletedNotes}>
                <Ionicons name="trash" size={20} color="white" />
            </PrimaryButton>
            <PrimaryButton raduis={true} onPress={clickAddNote}>
                <AntDesign name="plus" size={20} color="white" />
            </PrimaryButton>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomColor:Colors.primary,
        borderBottomWidth:1,
        paddingBottom:16,
    },
    title:{
        color:Colors.primary,
        fontSize:28,
        fontWeight:"bold"
    },
    total:{
        color:Colors.primary,
        fontSize:18
    },
    btnsContainer:{
        flexDirection:"row",
        gap:10
    }
})