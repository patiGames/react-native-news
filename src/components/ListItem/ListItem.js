import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import ListText from './ListText';

const ListItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>

        <Image resizeMode="cover" 
                source={{uri: (props.data.image)?props.data.image:""}} 
                style={styles.listImage} />

        <ListText data={props.data}/>

    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center"
    },
    listImage: {
        marginRight: 8,
        height: 50,
        width: 50
    },
    
});

export default ListItem;