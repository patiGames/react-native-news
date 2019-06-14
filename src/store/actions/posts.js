import {
    SELECT_POST, SET_POSTS, DESELECT_POST
} from './actionTypes';

export const getPosts = () => {
  
  return dispatch => {

    fetch("https://api.reddit.com/r/pics/new.json")
    .then( res => {
      if(res.ok) {
        return res.json();
      }else{
        throw new Error();
      }
    }).then(parsedRes => {

      const posts = [];
      for (const post of parsedRes.data.children)
      {
        posts.push({
          title: post.data.title,
          key: post.data.id+post.data.created,
          image: post.data.thumbnail,
          imageHeight: post.data.thumbnail_height,
          imageWidth: post.data.thumbnail_width,
          author: post.data.author,
          votes: post.data.score,
          comments: post.data.num_comments,
          date: post.data.created_utc,
          url: post.data.url
        })
      }
      dispatch(setPosts(posts));
    })
    .catch(err => {
      alert("Something went wrong, sorry :/");
      console.log(err);
    })
  }
};

export const setPosts = posts => {
  return {
    type: SET_POSTS,
    posts: posts
  };
};

export const selectPost = (key) => {
  return {
    type: SELECT_POST,
    postKey: key
  }
}

export const deselectPost = () => {
  return {
    type: DESELECT_POST
  }
}