import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

const feed = [
  {
    id: 1,
    nome: 'Hulk',
    imgPerfil: require('../assets/imagens/hulk.jpg'),
    img: require('../assets/imagens/hulkbar.jpg'),
    aspectRatio: 1.478,
  },
  {
    id: 2,
    nome: 'Stark',
    imgPerfil: require('../assets/imagens/ironman.png'),
    img: require('../assets/imagens/irommanpose.jpg'),
    aspectRatio: 1.6,
  },
  {
    id: 3,
    nome: 'Hulk',
    imgPerfil: require('../assets/imagens/hulk.jpg'),
    img: require('../assets/imagens/hulkbar.jpg'),
    aspectRatio: 1.478, 
  },
];

function renderItem({item}){
  return <View style = {styles.post}>
    <View style = {styles.posthead}>
        <View style = {styles.postheadesqu}>
        <Image style = {styles.postheadimg} source = {item.imgPerfil}/>
        <Text>{item.nome}</Text>
        </View>
        <FontAwesome5 name="ellipsis-h" size= {24} color = "black"/>
      </View>
    <Image style = {styles.postimg} aspectRatio={item.aspectRatio} source = {item.img}/>
    <View style = {styles.postfooter}>
      <FontAwesome5 style = {styles.footericon}  name="heart" size= {24} color = "black"/>
      <FontAwesome5 style = {styles.footericon} name="comment" size= {24} color = "black"/>
      <FontAwesome5 style = {styles.footericon} name="share" size= {24} color = "black"/>
      <FontAwesome5 style = {styles.footericonesq} name="bookmark" size= {24} color = "black"/>
    </View>
    </View>
};


export default function Feed(){
    return (
        <View style = {styles.feed}>
          <FlatList
            data={feed}
            renderItem = {renderItem}
            keyExtractor = {item => item.id}
            showsVerticalScrollIndicator = {false}
          />
        </View>
    );
}
const styles = StyleSheet.create({
    feed: {
      flex: 1,
      backgroundColor: '#fff',
    },
    post: {
      backgroundColor: '#fff',    
    },
    posthead: {
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 5,
    },
    postheadesqu: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    postheadimg:{
      height: 50,
      width: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    postimg: {
      width:'100%',
      height: undefined,
    },
    postfooter: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
    },
    footericon: {
      margin: 10,
    },
    footericonesq: {
      marginLeft: 235,
    },
  });