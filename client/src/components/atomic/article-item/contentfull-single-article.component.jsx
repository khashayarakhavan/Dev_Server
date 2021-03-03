import React from 'react';
import { Link } from 'react-router-dom';
import {
  Article,
  Image,
  TextBody,
  PostTitle,
  PostSubTitle,
  AuthorFullName,
  Time,
  AuthorData,
} from "./contentful-single-article.styles";

import {Skeleton, Row} from './contentful-single-article.styles';
import LazyLoadCard from 'interactions/LazyCard/lazyCard.component.js';


const Template = ({post, isLoading}) => {
  console.log('Post property in contentful-single-article.component.js is:', post);
  return (
    <Article>
      
        <div style={{height: "min-content"}}>
          <Link
            to={`articles/${post.fields.slug}`}
            style={{ marginBottom: "0" , height: "min-content", width: "min-content"}}
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
            to={`articles/${post.fields.slug}`}
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
};

export default Template;
