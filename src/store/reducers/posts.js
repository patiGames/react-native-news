import {
    SELECT_POST, DESELECT_POST, SET_POSTS
} from '../actions/actionTypes';



const initialState = {
    posts: [],
    selectedPost: null
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        
        case SET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case SELECT_POST:
            return {
                ...state,
                selectedPost: state.posts.find(post => {
                    return post.key === action.postKey;
                })
            }
        case DESELECT_POST:
                return {
                    ...state,
                    selectedPost: null
                }
        default:
            return state;
    }

};

export default reducer;