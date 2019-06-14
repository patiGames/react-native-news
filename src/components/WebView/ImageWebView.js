import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { WebView } from 'react-native-webview';

const ImageWebView = props => {
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Button title="Close" onPress={() => props.onDeselectPost()} />
            </View>
            <WebView
              source={{ uri: props.selectedPost.url }}
              startInLoadingState
              style={styles.listImage} 
            /> 
        </View>
      );
};


const styles = StyleSheet.create({
    webView: {
        marginTop: 20, 
        flex: 1, 
        justifyContent:"center"
    },
    container: {
        marginTop: 50,
        flexDirection: 'column',
        flex: 1,
        width: "80%",
        justifyContent: 'space-around',
    },
    header: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: "#fa1",
    },
    headerText: {
        fontSize: 20
    },
    
});

export default ImageWebView;