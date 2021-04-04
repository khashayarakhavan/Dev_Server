import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectData,
  selectPost,
  selectFetching,
} from "redux/content/content.selectors";


import { ArticlesContainer, Article, Row, Skeleton, Wrapper } from "./singleArticle.styles";

import {Image, PostTitle, PostSubTitle, TextBody, AuthorData, AuthorFullName, Time} from './singleArticle.styles';

const PostContent = ({post}) => (
 
    <Article>
      <div style={{ height: "min-content" }}>
        
          {" "}
          <Image
            src={post.fields.featuredImage.fields.file.url + "?h=600"}
            alt={post.fields.featuredImage.fields.file.fileName}
            style={{ marginBottom: "0", marginTop: "0" }}
          />
        
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        
          <PostTitle>{post.fields.title}</PostTitle>
       
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
      <PostContent post={post} />
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




      