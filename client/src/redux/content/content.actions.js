import ContentActionTypes from './content.types';

export const fetchContentStart = () => ({
  type: ContentActionTypes.FETCH_CONTENT_START
});

export const fetchContentSuccess = posts => ({
  type: ContentActionTypes.FETCH_CONTENT_SUCCESS,
  payload: posts
});

export const fetchContentFailure = errorMessage => ({
  type: ContentActionTypes.FETCH_CONTENT_FAILURE,
  payload: errorMessage
});

export const fetchSingleArticleStart = slug => ({
  type: ContentActionTypes.FETCH_ARTICLE_START,
  payload: slug,
});

export const fetchSingleArticleSuccess = post => ({
  type: ContentActionTypes.FETCH_ARTICLE_SUCCESS,
  payload: post,
});

export const fetchSingleArticleFailure = (errorMessage) => ({
  type: ContentActionTypes.FETCH_ARTICLE_FAILURE,
  payload: errorMessage,
});
