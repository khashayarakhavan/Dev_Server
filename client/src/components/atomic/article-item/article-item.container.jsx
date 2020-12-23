import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectFetching } from '../../../redux/content/content.selectors';
import WithSpinner from '../../with-spinner/with-spinner.component';
import ArticleItem from './article-item.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => selectFetching(state)
});

const ArticleItemContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ArticleItem);

export default ArticleItemContainer;
