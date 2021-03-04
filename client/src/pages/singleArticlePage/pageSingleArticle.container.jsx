import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectFetching  } from '../../../redux/content/content.selectors';
import WithSpinner from '../../with-spinner/with-spinner.component';
import SingleArticle from './contentfull-single-article.component';

const mapStateToProps = createStructuredSelector({
  // isLoading: (state) => selectFetching(state),
  isLoading: selectFetching,
});

const ArticleItemContainer = compose(
  connect(mapStateToProps),
  // WithSpinner
)(SingleArticle);

export default ArticleItemContainer;
