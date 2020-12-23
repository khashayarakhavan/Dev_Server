import React from 'react';
import { Link } from 'react-router-dom';
import { Article, Image } from "./article-item.styles";

const Template = ({post}) => {
  console.log('Post property in article-item.js is:', post);
  return (
    <Article>
      <div className="no-gutter">
        <h2>
          <Link to={`articles/${post.fields.slug}`}>{post.fields.title}</Link>
        </h2>
        <Link to={`articles/${post.fields.slug}`}>
          <Image
            src={post.fields.featuredImage.fields.file.url + "?w=400&h=300"}
            alt={post.fields.featuredImage.fields.file.fileName}
          />
        </Link>

        <p>{post.fields.content}</p>

        <p className="contentful">
          <img
            src={
              post.fields.author.fields.avatar.fields.file.url + "?w=50&h=50"
            }
            alt={post.fields.author.fields.fullName}
          />
          <a>{post.fields.author.fields.fullName}</a>
          <i className="link-spacer"></i>
          <time className="post-date" dateTime="2015-05-05">
            {post.fields.publishDate}
          </time>
        </p>
      </div>
    </Article>
  );
};

export default Template;
