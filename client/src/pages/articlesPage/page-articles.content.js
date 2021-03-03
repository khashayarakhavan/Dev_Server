// --> START OF IMPORT SECTION <-- //

//Libraries
import React, { Profiler, useEffect } from "react";
import { connect } from "react-redux";
//Components
import Articles from 'components/complex/articles/articles.component';
import Heading from "components/Sections/Heading/heading.component";

import Directory from 'components/complex/directory/directory.component';
import TopMenu from "components/Sections/header/header.component";

//Actions
import { fetchContentStart } from "redux/content/content.actions";
//Styles
import {
  HomePageContainer,
  PageArticleContainer,
} from "./page-articles.styles";

// --> END OF IMPORT SECTION <-- //

/*
-->
  Next section will be:
  A beautiful content made in Contentful.com
<--
*/

const PageArticlesContent = ({ fetchContentStart }) => {
  useEffect(() => {
    fetchContentStart();
  }, [fetchContentStart]);
  
  return (
    <PageArticleContainer>
      {/* <Directory /> */}
      <TopMenu />
      <Heading
        text="Ich writtenen stories."
        cta="read"
        subCta="just "
        
      />
      <Profiler
        id="Articles"
        onRender={(id, phase, actualDuration) => {
          console.log({ id, phase, actualDuration });
        }}
      >
        <Articles />
      </Profiler>
      {/* <iframe
        src="https://pasteapp.com/p/KlvWDQenHd2/embed?view=2Rn8cAnnmcW"
        width="480"
        height="480"
        scrolling="no"
        frameborder="0"
        allowfullscreen
      ></iframe> */}
    </PageArticleContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchContentStart: () => dispatch(fetchContentStart()),
});

export default connect(null, mapDispatchToProps)(PageArticlesContent);
