import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFetching, selectPost } from "../../../redux/content/content.selectors";

const singleArticle = ({post, isFetching}) => {

  console.log('this is post from React Component ' ,post);
  return (
    <div>
      <div className="no-gutter">
        <h1>{post.fields.title}</h1>

        <img
          src={post.fields.featuredImage.fields.file.url + "?w=400&h=300"}
          alt={post.fields.featuredImage.fields.file.fileName}
        />

        <p>{post.fields.content}</p>

        <p className="Author">
          <img
            src={
              post.fields.author.fields.avatar.fields.file.url + "?w=200&h=200"
            }
            alt={post.fields.author.fields.fullName}
          />
          <p>{post.fields.author.fields.fullName}</p>
          <h3>My website is:</h3>
          <p>{post.fields.author.fields.website}</p>

          <h2>Bio of the author:</h2>
          <p>{post.fields.author.fields.bio}</p>
          <i className="link-spacer"></i>
          <time className="post-date" dateTime="2015-05-05">
            {post.fields.publishDate}
          </time>
        </p>
      </div>
    </div>

    // <div>
    //   {/* <p>hi</p>
    //   <p>{isFetching ? "loading ..." : post.fields.content} </p>
    //   <iframe
    //     src="https://pasteapp.com/p/KlvWDQenHd2/embed?view=2Rn8cAnnmcW"
    //     width="480"
    //     height="480"
    //     scrolling="no"
    //     frameborder="0"
    //     allowfullscreen
    //   /> */}

    //   {isFetching ? (
    //     <Spinner />
    //   ) : (
    //     <div>
    //       <div className="no-gutter">
    //         <h1>{post.fields.title}</h1>

    //         <img
    //           src={post.fields.featuredImage.fields.file.url + "?w=400&h=300"}
    //           alt={post.fields.featuredImage.fields.file.fileName}
    //         />

    //         <p>{post.fields.content}</p>

    //         <p className="Author">
    //           <img
    //             src={
    //               post.fields.author.fields.avatar.fields.file.url +
    //               "?w=200&h=200"
    //             }
    //             alt={post.fields.author.fields.fullName}
    //           />
    //           <p>{post.fields.author.fields.fullName}</p>
    //           <h3>My website is:</h3>
    //           <p>{post.fields.author.fields.website}</p>

    //           <h2>Bio of the author:</h2>
    //           <p>{post.fields.author.fields.bio}</p>
    //           <i className="link-spacer"></i>
    //           <time className="post-date" dateTime="2015-05-05">
    //             {post.fields.publishDate}
    //           </time>
    //         </p>
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

const mapStateToProps = createStructuredSelector({
  post: selectPost,
  isFetching: selectFetching,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchSingleArticleStart: (slug) => dispatch(fetchSingleArticleStart(slug)),
// });

export default connect(mapStateToProps)(singleArticle);
