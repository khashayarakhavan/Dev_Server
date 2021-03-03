import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectData,
  selectPosts,
  selectFetching,
} from "redux/content/content.selectors";
import ContentfulSingleArticleContainer from "components/atomic/article-item/contentful-single-article.container";
// import { fetchContentStart } from "../../redux/content/content.actions";
import { ArticlesContainer, Row, Skeleton , Wrapper} from "./articles.styles";
import Heading from 'components/Sections/Heading/heading.component';
import TopMenu from "components/Sections/header/header.component";


// const articles = articles.map((article, i) => (
//    <ArticleListItem id={i} key={i} article={article} />
//  ));

// {
//   posts.map(({ post, i }) => <ArticleItem key={i} post={post} />);
// }

// {
//   data.map((post, i) => <ArticleBox key={i} post={post} />);
// }

export const Articles = ({ posts, data, isLoading }) => {
  console.log('data is ...', data);
  console.log('posts are ...', posts);
  return (
    <ArticlesContainer>
      {isLoading ? (
        
        <Wrapper>
        
          <Row>
            <Skeleton width="50px" height="50px" margin="0 2rem .5rem 0" />
            <div>
              <Skeleton width="130px" height="30px" margin="0 0 0.6rem" />
              <Skeleton width="80px" height="30px" />
            </div>
          </Row>
          <Row>
            <Skeleton width="50px" height="50px" margin="0 2rem .5rem 0" />
            <div>
              <Skeleton width="130px" height="30px" margin="0 0 0.6rem" />
              <Skeleton width="80px" height="30px" />
            </div>
          </Row>
          <Row>
            <Skeleton width="50px" height="50px" margin="0 2rem .5rem 0" />
            <div>
              <Skeleton width="130px" height="30px" margin="0 0 0.6rem" />
              <Skeleton width="80px" height="30px" />
            </div>
          </Row>
          <Row>
            <Skeleton width="50px" height="50px" margin="0 2rem .5rem 0" />
            <div>
              <Skeleton width="130px" height="30px" margin="0 0 0.6rem" />
              <Skeleton width="80px" height="30px" />
            </div>
          </Row>
        </Wrapper>
      ) : (
        <>
          {posts.map((post, i) => console.log("hello #", i))}
          <Wrapper>
            {posts.map((post, i, ...otherSectionProps) => (
              <ContentfulSingleArticleContainer
                id={i}
                post={post}
                {...otherSectionProps}
              />
            ))}
          </Wrapper>
        </>
      )}
    </ArticlesContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  data: selectData,
  posts: selectPosts,
  isLoading: selectFetching,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchContentStart: () => dispatch(fetchContentStart()),
// });

export default connect(mapStateToProps, null)(Articles);
