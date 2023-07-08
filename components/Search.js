import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import ChildButton from './ChildButton'
import PrimaryButton from './PrimaryButton'
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../common/Colors'

export default function Search({searchText,setsearchText,clearSearch,handelSearch}) {
  return (
    <View style={styles.container}>
        <TextInput placeholder='Search...' style={styles.input} value={searchText} onChangeText={e=>setsearchText(e)}/>
        <PrimaryButton raduis={false} onPress={handelSearch}>
            <AntDesign name="search1" size={24} color="white" />
        </PrimaryButton>
        <ChildButton raduis={6} onPress={clearSearch}>
            Clear
        </ChildButton>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:16,
        flexDirection:"row",
        gap:8
    },
    input:{
        flex:1,
        borderColor:Colors.primary,
        borderWidth:2,
        borderRadius:6,
        paddingHorizontal:8,
    }
})