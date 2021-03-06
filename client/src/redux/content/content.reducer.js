import ContentActionTypes from './content.types';

const INITIAL_STATE = {
  data: null, // Main entry for SHOP_DATA import in our app.
  isFetching: false,
  isFetchingSingle: false,
  errorMessage: undefined,
  post: {fields: {title: 'hi', slug: "new", content: "test", author: "aftoflBig5", publishDate: "1111"}},
};

const contentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContentActionTypes.FETCH_CONTENT_START:
      return {
        ...state,
        isFetching: true,
      };
    case ContentActionTypes.FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case ContentActionTypes.FETCH_CONTENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ContentActionTypes.FETCH_ARTICLE_START:
      return {
        ...state,
        isFetchingSingle: true,
        // post: action.payload
      };
    case ContentActionTypes.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        isFetchingSingle: false,
        post: action.payload,
      };
    case ContentActionTypes.FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        isFetchingSingle: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default contentReducer;
