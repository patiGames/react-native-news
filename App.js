/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ReeditList from './src/components/ReeditList/ReeditList';
import { connect } from "react-redux";
import {
  selectPost, 
  deselectPost, 
  getPosts
} from "./src/store/actions/index";

import ImageWebView from './src/components/WebView/ImageWebView';

class App extends Component {

  componentDidMount() {
    this.props.onGetPosts();
  }

  itemSelectedHandler = (key) => {
    this.props.onSelectPost(key);
  };

  itemDeselectedHandler = () => {
    this.props.onDeselectPost();
  }

  itemsRefreshHandler = () => {
    this.props.onGetPosts();
  }

  render() {
    return (
      <View style={styles.container}>

        {this.props.selectedPost ? 
        <ImageWebView style={styles.webView} 
                      selectedPost={this.props.selectedPost}
                      onDeselectPost={this.itemDeselectedHandler}/>
        : null } 
        
        <ReeditList 
          posts={this.props.posts}
          onItemSelected={this.itemSelectedHandler}
          onItemsRefresh={this.itemsRefreshHandler}
          />

      </View>
    );
  }
}

const mapStateToProps = state => {
  return { 
    posts: state.posts.posts,
    selectedPost: state.posts.selectedPost
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPosts: () => dispatch(getPosts()),
    onSelectPost: key => dispatch(selectPost(key)),
    onDeselectPost: () => dispatch(deselectPost())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    marginTop: 20, 
    flexDirection: 'column', // main axis
    justifyContent: 'center', // main axis
    alignItems: 'center', // cross axis
    backgroundColor: "#fff",
  },
    webView: {
    marginTop: 20 , 
    flex: 1, 
    width:300, 
    height: "100%", 
    justifyContent:"center"
  },
});
