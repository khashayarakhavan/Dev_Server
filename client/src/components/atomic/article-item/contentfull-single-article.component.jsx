import React , {forwardRef} from 'react';
// import { useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom";

// import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Article,
  Image,
  TextBody,
  PostTitle,
  PostSubTitle,
  AuthorFullName,
  Time,
  AuthorData,
  ScrollUp,
} from "./contentful-single-article.styles";

import {Skeleton, Row} from './contentful-single-article.styles';
import LazyLoadCard from 'interactions/LazyCard/lazyCard.component.js';

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  // let { id } = useParams();

  return (
    <div>
      <h3>nanai kalti</h3>
    </div>
  );
}





const Template = ({ post, isLoading, history, ...props}) => {

      // const history = useHistory();
  // let {match} = props;

//   const ThisWillWork = forwardRef((children, ref) => {
//   return <div ref={ref}>{children}</div>;
// });

  const clickHandler = (props) => {

     setTimeout(() => {
      //  history.push(`/articles/${post.fields.slug}`);
     }, 1000);
    
  }
  console.log('Post property in contentful-single-article.component.js is:', post);
  return (
    <Article {...props}>
      <div style={{ height: "min-content" }}>
        <ScrollUp
          to="pageSingleArticle"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
        >
          <Link
            to={`/articles/${post.fields.slug}`}
            // to={`pageSingleArticle`}
            // onClick={() => history.push("/contact", { from: "HomePage" })}
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
        </ScrollUp>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ScrollUp
          to="pageSingleArticle"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
        >
          <PostTitle>
            <Link
              to={`/articles/${post.fields.slug}`}
              style={{
                marginBottom: "0",
                height: "min-content",
                width: "min-content",
                color: 'inherit',
              }}
            >
              {post.fields.title}
            </Link>
          </PostTitle>
        </ScrollUp>

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
