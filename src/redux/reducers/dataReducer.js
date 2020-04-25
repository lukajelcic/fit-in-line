import {
    SET_POSTS,
    SET_POST,
    POST_BLOG,
    LOADING_DATA,
    DELETE_POST
} from '../types';

const initalState = {
    news: [],
    blog: {},
    loading: false
}

export default function (state = initalState, action) {
    switch (action.type) {
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            };
        case SET_POSTS:
            return {
                ...state,
                loading: false,
                news: action.payload
            };
        // case DELETE_POST:
        //     index = state.blogs.findIndex(blog => blog.newsId === action.payload.newsId);
        //     state.blogs.splice(index, 1);
        //     return { ...state }
        case POST_BLOG:
            return {
                ...state,
                news: [
                    action.payload,
                    ...state.news
                ]
            };
        default: return state;
    }
}