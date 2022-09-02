import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

export default function Header(){
    return (
        <View style = {styles.header}>
        <Image source={require('../assets/imagens/instagramname.png')} style ={styles.tam} />
        <View style = {styles.headericons}>
          <FontAwesome5 style = {styles.headericon} name="plus" size={24} color="black" />
          <FontAwesome5 style = {styles.headericon} name="heart" size={24} color="black"/>
          <FontAwesome5 style = {styles.headericon} name="comment" size={24} color="black"/>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      height: 50,
      backgroundColor: '#fff',
    },
    headericons: {
      flexDirection: 'row',
    },
    headericon: {
      marginLeft: 15,
    },
    tam: {
        height: 35,
        width: 110, 
      },
  });