import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectData,
  selectPost,
  selectFetching,
} from "redux/content/content.selectors";


import { ArticlesContainer, Row, Skeleton, Wrapper } from "./singleArticle.styles";

import {Article, Image, PostTitle, PostSubTitle, TextBody, AuthorData, AuthorFullName, Time} from './singleArticle.styles';

const PostContent = ({post}) => (
 
    <Article>
      <div style={{ height: "min-content" }}>
        <Link
          to={`/articles/${post.fields.slug}`}
          style={{
            marginBottom: "0",
            height: "min-content",
            width: "min-content",
          }}
        >
          {" "}
          <Image
            src={post.fields.featuredImage.fields.file.url + "?w=400&h=300"}
            alt={post.fields.featuredImage.fields.file.fileName}
            style={{ marginBottom: "0", marginTop: "0" }}
          />
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link
          to={`/articles/${post.fields.slug}`}
          style={{ marginBottom: "0" }}
        >
          <PostTitle>{post.fields.title}</PostTitle>
        </Link>
        <PostSubTitle>Read more on Medium.com</PostSubTitle>
      </div>

      <TextBody>{post.fields.content}</TextBody>

      <AuthorData className="contentful">
        <img
          src={post.fields.author.fields.avatar.fields.file.url + "?w=50&h=50"}
          alt={post.fields.author.fields.fullName}
          style={{ marginBottom: "0" }}
        />
        <AuthorFullName>{post.fields.author.fields.fullName}</AuthorFullName>
        <i className="link-spacer"></i>
        <Time className="post-date" dateTime="2015-05-05">
          {post.fields.publishDate}
        </Time>
      </AuthorData>
    </Article>
 
);




export const Articles = ({ post, data, isLoading }) => {
  // console.log('data is ...', data);
  console.log('from WOWOWOWOWOWOWOW, the post is ', post);
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
        </Wrapper>
      ) : (
        
        <PostContent post={post} />
      )}
    </ArticlesContainer>
  );
};



// const mapStateToProps = createStructuredSelector({
//   data: selectData,
//   post: selectPost,
//   isLoading: selectFetching,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchContentStart: () => dispatch(fetchContentStart()),
// });

// export default connect(mapStateToProps, null)(Articles);
export default (Articles);




      