// --> START OF IMPORT SECTION <-- //

//Libraries
import React, { lazy, useEffect } from "react";
import { connect } from "react-redux";
// import { Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import { createStructuredSelector } from "reselect";
//Actions
import { fetchContentStart, fetchSingleArticleStart } from "redux/content/content.actions";
import { selectPost } from 'redux/content/content.selectors';
import { ArticlePageContainer } from './singleArticle.styles';
// import SingleArticle from '../../components/atomic/article-single/article-single.component';
// const SingleArticle = lazy(
//   () => import('../../components/atomic/article-single/article-single.component')
// );


// const SingleArticleContainer = lazy(
//   () => import('../../components/atomic/article-single/article-single.container')
// );



import SingleArticleContainer from "../../components/atomic/article-single/article-single.container";
// --> END OF IMPORT SECTION <-- //

/*
-->
  Next section will be:
  A beautiful content made in Contentful.com
<--
*/

const SingleArticlePage = ({ fetchContentStart, fetchSingleArticleStart, match , post}) => {
  useEffect(() => {
    fetchSingleArticleStart(match.params.slug);
  }, [fetchSingleArticleStart]);

  console.log('match :D ', match.params);

  return (
    <ArticlePageContainer>
    hi this is okay, no worries.
    </ArticlePageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchContentStart: () => dispatch(fetchContentStart()),
  fetchSingleArticleStart: (slug) => dispatch(fetchSingleArticleStart(slug)),
});

const mapStateToProps = createStructuredSelector({

  post: selectPost
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleArticlePage);






  {
    /* <Suspense fallback={<Spinner />}> */
  }
  // <Route exact path={`${match.path}`} component={SingleArticleContainer} />;
  {
    /* </Suspense> */
  }