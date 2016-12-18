import {
    FETCH_POST,
    FETCH_POST_SUCCESS,
    SHOW_POST,
    SHOW_POST_SUCCESS,
    EDIT_POST,
    EDIT_POST_SUCCESS,
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
    postsList: { posts: [], error: null, loading: false },
    newPost: { post: null, error: null, loading: false },
    deletedPost: { post: null, error: null, loading: false },
    editPost: { post: null, error: null, loading: false },
    activePost: { post: null, error: null, loading: false },
    updatePost: { post: null, error: null, loading: false },
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POST:
            return { ...state, postsList: { posts: [], error: null, loading: true } };
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                postsList: { posts: [action.payload], error: null, loading: false },
            };
        case SHOW_POST:
            return {
                ...state,
                activePost: { post: null, error: null, loading: true },
            };
        case SHOW_POST_SUCCESS:
            return {
                ...state,
                activePost: { post: action.payload, error: null, loading: false },
            };
        case EDIT_POST:
            return {
                ...state,
                editPost: { post: null, error: null, loading: true },
            };
        case EDIT_POST_SUCCESS:
            return {
                ...state,
                editPost: { post: action.payload, error: null, loading: false },
            };
        case UPDATE_POST:
            return {
                ...state,
                updatePost: { post: null, error: null, loading: true },
            };
        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                updatePost: { post: action.payload, error: null, loading: false },
            };
        default:
            return state;
    }
}
