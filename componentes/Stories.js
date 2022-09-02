import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Stories(){
    const stories = [
        {
            id: 1,
            nome: 'Hulk',
            src: require('../assets/imagens/hulk.jpg'),
        },
        {
            id: 2,
            nome: 'Stark',
            src: require('../assets/imagens/ironman.png'),
        },
        {
            id: 3,
            nome: 'Kirito',
            src: require('../assets/imagens/kirito.jpg'),
        },
        {
            id: 4,
            nome: 'Sung-Jin',
            src: require('../assets/imagens/sungjin.jpg'),
        },
        {
            id: 5,
            nome: 'Yang Kai',
            src: require('../assets/imagens/yangkai.jpg'),
        },
        {
            id: 6,
            nome: 'Sung-Jin-Won',
            src: require('../assets/imagens/sungjin.jpg'),
        },
    ];

    function renderItem({item}){
        return <View style = {styles.stories}>
        <View style = {styles.story}>
          <Image style = {styles.imgstories} source = {item.src}/>
          <Text>{item.nome}</Text>
        </View>
        </View>
    }
    return (
      <View style = {styles.stories}>
        <FlatList
            data={stories}
            renderItem = {renderItem}
            keyExtractor = {item => item.id}
            horizontal
            showsHorizontalScrollIndicator = {false}
        />
    </View>
    );
}
const styles = StyleSheet.create({
    stories: {
      height: 90,
      flexDirection: 'row',
      backgroundColor: '#fff'
    },
    story: {
      height: 90,
      width: 90,
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    imgstories: {
      width: 70,
      height: 70,
      borderRadius: 35,
    },
})