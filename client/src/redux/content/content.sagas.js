import { all, call, put, takeLatest } from 'redux-saga/effects';
import client from '../../contentful/contentful.utils';
import {
  fetchContentFailure,
  fetchContentSuccess, fetchSingleArticleFailure,

  fetchSingleArticleSuccess
} from "./content.actions";
import ContentActionTypes from './content.types';
const { log } = console;

export function* fetchContentAsync() {
  try {
    const data = yield client.getEntries({content_type: 'post'});
    log('Received data from Contentful API:', data); 
    const posts = data.items; // location of posts inside JSON data received from Contentful API.
    yield put(fetchContentSuccess(data));
  } catch (error) {
    yield put(fetchContentFailure(error.message));
  }
}

export function* fetchSingleArticleAsync({payload: slug}) {
         try {
           log("Helllooooooooo");
           log("This is slug", slug);
           const data = yield client.getEntries({
             content_type: "post",
             "fields.slug": slug,
           });
           const post = data.items[0];
           
           log("Received Single Article from Contentful API:", post);
           // const post = data.items; // location of posts inside JSON data received from Contentful API.
           yield put(fetchSingleArticleSuccess(post));
         } catch (error) {
           log("oops");
           yield put(fetchSingleArticleFailure(error.message));
         }
       }

export function* onfetchContentStart() {
  yield takeLatest(
    ContentActionTypes.FETCH_CONTENT_START,
    fetchContentAsync
  );
}

export function* onfetchSingleArticleStart() {
  yield takeLatest(
    ContentActionTypes.FETCH_ARTICLE_START,
    fetchSingleArticleAsync
  );
}

export function* contentSagas() {
  yield all([
    call(onfetchContentStart),
    call(onfetchSingleArticleStart)
  ]);
}
