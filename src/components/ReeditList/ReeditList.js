import React from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';
import ListItem from '../ListItem/ListItem';

const ReeditList = props => {
    return (
        <FlatList
        style={styles.listContainer}
        onRefresh={() => props.onItemsRefresh()}
        refreshing={false}
        data={props.posts}
        renderItem={(info) => (
            <ListItem
            data={info.item}
            onItemPressed={() => props.onItemSelected(info.item.key)}
            />
        )}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        marginTop: 14,
        flex: 1,
        alignSelf: "stretch",
    }
});

export default ReeditList;
