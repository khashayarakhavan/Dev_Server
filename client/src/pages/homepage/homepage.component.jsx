// --> START OF IMPORT SECTION <-- //

//Libraries
import React, { Profiler, useEffect } from "react";
import { connect } from "react-redux";
//Components
import Articles from '../../components/complex/articles/articles.component';
import Directory from '../../components/complex/directory/directory.component';
//Actions
import { fetchContentStart } from "../../redux/content/content.actions";
//Styles
import { HomePageContainer } from './homepage.styles';

// --> END OF IMPORT SECTION <-- //

/*
-->
  Next section will be:
  A beautiful content made in Contentful.com
<--
*/

const HomePage = ({ fetchContentStart }) => {
  useEffect(() => {
    fetchContentStart();
  }, [fetchContentStart]);
  
  return (
    <HomePageContainer>
      <Directory />
      <Profiler id='Articles' onRender={(id, phase, actualDuration) => {
        console.log({id, phase, actualDuration});
      } }>
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
    </HomePageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchContentStart: () => dispatch(fetchContentStart()),
});

export default connect(null, mapDispatchToProps)(HomePage);
