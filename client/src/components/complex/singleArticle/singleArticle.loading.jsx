import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  selectData,
  selectPost,
  selectFetchingSingle,
} from "redux/content/content.selectors";
import WithSpinner from 'components/complex/with-spinner/with-spinner.component';
import SingleArticleComponent from './singleArticle.component';

const mapStateToProps = createStructuredSelector({
  // isLoading: (state) => selectFetching(state),
  isLoading: selectFetchingSingle,
  data: selectData,
  post: selectPost,
});

const ArticleItemContainer = compose(
  connect(mapStateToProps),
  // WithSpinner,
)(SingleArticleComponent);

export default ArticleItemContainer;
