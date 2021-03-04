// --> START OF IMPORT SECTION <-- //

//Libraries
import React, { lazy, Profiler, useEffect } from "react";
import { connect } from "react-redux";
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

const SingleArticle = lazy(() =>
  import("components/complex/singleArticle/singleArticle.container")
);

// --> END OF IMPORT SECTION <-- //

/*
-->
  Next section will be:
  A beautiful content made in Contentful.com
<--
*/

const PageSingleArticleContent = ({ fetchSingleArticleStart, match }) => {
  useEffect(() => {
    fetchSingleArticleStart(match.params.slug);
  }, [fetchSingleArticleStart]);

  return (
    <PageSingleArticleContainer>
      <TopMenu />
      <Heading text="Ich writtenen stories." cta="read" subCta="just " />
      <SingleArticle />
    </PageSingleArticleContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchSingleArticleStart: (slug) => dispatch(fetchSingleArticleStart(slug)),
});

export default connect(null, mapDispatchToProps)(PageSingleArticleContent);
