import axios from 'axios';

import {
    TOGGLE_POST,
    FETCH_POST,
    FETCH_POST_SUCCESS,
    SHOW_POST,
    SHOW_POST_SUCCESS,
    EDIT_POST,
    EDIT_POST_SUCCESS,
    UPDATE_POST,
    UPDATE_POST_SUCCESS,
    DELETE_POST,
} from '../actions/types';

/**
 * Sets the state of post to all the received post
 * @param posts
 * @returns {{type, payload: *}}
 */
export const fetchAllPostsSuccess = posts => ({
    type: FETCH_POST_SUCCESS,
    payload: posts,
});

/**
 * Ajax call to fetch all post
 * @returns {Function}
 */
export const fetchAllPosts = () => (dispatch) => {
    dispatch({ type: FETCH_POST });

    axios.get('/blog')
        .then((response) => {
            const data       = response.data.map(post => ({ ...post, isActive: false }));
            data[0].isActive = true;
            dispatch(fetchAllPostsSuccess(data));
        });
};

/**
 * Fetches all post after delete;
 */
export const deletePostSuccess = () => fetchAllPosts();

/**
 * Ajax call to delete the current post
 * @param id
 */
export const deletePost = id =>
    (dispatch) => {
        axios.delete(`/api/destroy/${id}`,
            {
                headers: { authorization: localStorage.getItem('token') },
            })
            .then((response) => {
                dispatch(deletePostSuccess());
            });
    };

/**
 * Sets the state of editPost to the post we just got back
 * @param data
 */
export const editPostSuccess = data => ({
    type: EDIT_POST_SUCCESS,
    payload: data,
});

/**
 * Ajax call to get the current edited post
 * @param id
 */
export const editPost = id => (dispatch) => {
    dispatch({ type: EDIT_POST });
    axios.get(`/api/edit/${id}`,
        {
            headers: { authorization: localStorage.getItem('token') },
        })
        .then((response) => {
            dispatch(editPostSuccess(response));
        });
};

/**
 * Toggles the post state of isActive
 * @param id
 */
export const togglePost = id =>
    (dispatch, getState) => {
        const { blog } = getState();
        const data     = blog.postsList.posts.map((post, index) => {
            if (index === id) {
                return { ...post, isActive: !post.isActive };
            }
            return { ...post };
        });
        dispatch({
            type: TOGGLE_POST,
            payload: data,
        });
    };

