import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectFetchingSingle  } from 'redux/content/content.selectors';
import WithSpinner from '../../with-spinner/with-spinner.component';
import SingleArticle from './contentfull-single-article.component';

const mapStateToProps = createStructuredSelector({
  // isLoading: (state) => selectFetching(state),
  isLoading: selectFetchingSingle,
});

const ArticleItemContainer = compose(
  connect(mapStateToProps),
  // WithSpinner
)(SingleArticle);

export default ArticleItemContainer;
