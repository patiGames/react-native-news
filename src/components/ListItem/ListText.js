import React from 'react';
import { View, Text, StyleSheet } from "react-native";


//move to utils
const getParsedDate = (epochDate) => {
    const parsedEpochDate = new Date(parseFloat(epochDate) * 1000);
    const res = Math.abs(new Date() - parsedEpochDate) / 1000;
    const days = Math.floor(res/86400);
    return (days+ " days ago");
}

const ListText = props => (

    <View style={styles.listItem}>
        <View style={{flex:1,alignItems:'flex-end', marginBottom:5}}>
            <Text  style={styles.listText}>{getParsedDate(props.data.date)}</Text>    
        </View>
        <View style={{flex:1,marginBottom:5 }}>
            <Text style={styles.listText}>{props.data.title}</Text>
        </View>
        <View style={styles.listGroupBottom}>
            <Text style={{flex:2,backgroundColor: '#fa1', textAlign: 'center'}}>{props.data.author}</Text>
            <Text style={{flex:1,backgroundColor: '#fa1', textAlign: 'center', marginLeft : 5}}>{props.data.votes}</Text>
            <Text style={{flex:1,backgroundColor: '#fa1', textAlign: 'center', marginLeft : 5}}>{props.data.comments}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        padding: 10
    },
    listText: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 1,
        backgroundColor: '#fa1'
    },
    listGroupBottom: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around'
    },
    listTextBottom: {
        backgroundColor: '#fa1'
    }
    
});

export default ListText;