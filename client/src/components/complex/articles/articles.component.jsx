import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectData, selectPosts } from "../../../redux/content/content.selectors";
import ArticleItemContainer from '../../atomic/article-item/article-item.container';
// import { fetchContentStart } from "../../redux/content/content.actions";
import { ArticlesContainer } from "./articles.styles";

// const articles = articles.map((article, i) => (
//    <ArticleListItem id={i} key={i} article={article} />
//  ));

// {
//   posts.map(({ post, i }) => <ArticleItem key={i} post={post} />);
// }

// {
//   data.map((post, i) => <ArticleBox key={i} post={post} />);
// }

export const Articles = ({ posts, data }) => {
  console.log('data is ...', data);
  console.log('posts are ...', posts);
  return (
    <ArticlesContainer>
      {/* <h1>Dalam Kalti</h1> */}
      {posts.map((post, i) => console.log("hello #", i))}
      {posts.map((post, i, ...otherSectionProps) => (
        <ArticleItemContainer id={i} post={post} {...otherSectionProps} />
      ))}
    </ArticlesContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectData,
  posts: selectPosts,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchContentStart: () => dispatch(fetchContentStart()),
// });

export default connect(mapStateToProps, null)(Articles);
