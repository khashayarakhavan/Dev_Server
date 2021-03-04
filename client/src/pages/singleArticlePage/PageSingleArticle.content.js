// --> START OF IMPORT SECTION <-- //

//Libraries
import React, { lazy, Profiler, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//Components
// import SingleArticle from 'components/complex/singleArticle/singleArticle.container';.

import Heading from "components/Sections/Heading/heading.component";

import Directory from 'components/complex/directory/directory.component';
import TopMenu from "components/Sections/header/header.component";

//Actions
import {
  fetchSingleArticleStart,
} from "redux/content/content.actions";
//Styles
import {
  PageSingleArticleContainer,
} from "./pageSingleArticle.styles";

import {
  ArticlesContainer,
  Row,
  Skeleton,
  Wrapper,
} from "./pageSingleArticle.styles";

import { selectFetching } from "redux/content/content.selectors";

const SingleArticleContainer = lazy(() =>
  import("components/complex/singleArticle/singleArticle.container")
);

// --> END OF IMPORT SECTION <-- //

/*
-->
  Next section will be:
  A beautiful content made in Contentful.com
<--
*/

const PageSingleArticleContent = ({ fetchSingleArticleStart, match, isLoading }) => {
  useEffect(() => {
    fetchSingleArticleStart(match.params.slug);
  }, [fetchSingleArticleStart]);

  return (
    <PageSingleArticleContainer>
      <TopMenu />
      <Heading text="Ich writtenen stories." cta="read" subCta="just " />
      
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
        <SingleArticleContainer />
      )}
    </PageSingleArticleContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchSingleArticleStart: (slug) => dispatch(fetchSingleArticleStart(slug)),
});


const mapStateToProps = createStructuredSelector({

  isLoading: selectFetching,

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageSingleArticleContent);
