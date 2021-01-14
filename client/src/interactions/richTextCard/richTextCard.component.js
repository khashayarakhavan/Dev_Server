//Framework
import React, { useState , useEffect} from "react";
//State Mangement
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//Libraries
import { EditorState , RichUtils, convertToRaw, convertFromRaw} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify, { setConfig } from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; 
import axios from "axios";
//Actions
import {
  emailRichText,
  sendDataToServer,
} from "../../redux/vegeloperPage/vegeloperPage.actions";

//Styles
import { Card, Header, Image, Text } from "./richTextCard.styles";
//Assets
// import vegeloperImage from "../../assets/SVG/Vegeloper.svg";
import vegeloperImage from "../../assets/icon/unkownUser.png";
import boldIcon from "../../assets/SVG/bold.svg";
import italicIcon from "../../assets/SVG/italic.svg";
import italicIcon_2 from "../../assets/SVG/italic_2.svg";
import underlineIcon from "../../assets/SVG/underline.svg";
import underlineIcon_2 from "../../assets/SVG/underline_2.svg";
import underlineIcon_3 from "../../assets/SVG/underline_3.svg";


export const RichTextCard = ({
  sendDataToServer,
  updateRichTextState,
  updateRichTextMessageAsHTML,
}) => {
  const [editorLocalState, setEditorLocalState] = useState(() =>
    EditorState.createEmpty()
  );
  const [converted2HtmlContent, setConverted2HtmlContent] = useState(null);
  const [converted2RawContent, setConverted2RawContent] = useState(null);
  const [effect, setEffect] = useState(true);
  const [checker, setChecker] = useState(false);
  const [moment, setMoment] = useState(new Date());
  const [converted2PlainTextContent, setConverted2PlainTextContent] = useState(
    null
  );

  useEffect(() => {
   
    const rawEditorData = getSavedEditorData();
   

    if (rawEditorData !== null && effect === true ) {
      console.log("@@@FROM rawedit loader///");
      const contentState = convertFromRaw(rawEditorData); //From JSON to State
      setEditorLocalState(EditorState.createWithContent(contentState));
      setConverted2RawContent(rawEditorData);
      setEffect(false);
    }

    if (effect === false) {
      console.log('@@@FROM useEffect if///');
      let convertedToHTML = convertContentToHTML();
      setConverted2HtmlContent(convertedToHTML);
      console.log('converted from html in useEffect is :', convertedToHTML);
      updateRichTextMessageAsHTML(convertedToHTML);
    }
  }, [effect]);

  
  // useEffect(() => {
  //    let nowTime = new Date();
  //    let diff = (nowTime.getTime() - moment.getTime()) / 1000;
  //    console.log("am being callllleeedd");

  //    if (checker === true && diff > 5) {
  //      console.log("@@@Automatic From setInterval");
  //      let convertedToHTML = convertContentToHTML();
  //      setConverted2HtmlContent(convertedToHTML);
  //      updateRichTextMessageAsHTML(convertedToHTML);
  //      setMoment(nowTime);
  //      setChecker(false);
  //      console.log("UPDATED THIS VERY CHALLENGING VARIABLE");
  //    }
  // },[checker]);

  
  useEffect(() => {
    const timer = setInterval(() => {
      let nowTime = new Date();
      let diff = (nowTime.getTime() - moment.getTime()) / 1000;
      console.log('am being callllleeedd');
      
      if (checker === true && diff > 5) {
          console.log("@@@Automatic From setInterval");
          let convertedToHTML = convertContentToHTML();
          setConverted2HtmlContent(convertedToHTML);
          updateRichTextMessageAsHTML(convertedToHTML);
          setMoment(nowTime);
          setChecker(false);
          console.log("UPDATED THIS VERY CHALLENGING VARIABLE");
      }
        }
    , 10000);
    // clearing interval
    return () => clearInterval(timer);
  });
  

 
  const handleEditorChange = (state) => {

    setChecker(true);
    // let checker = 1;
    var startDate = new Date();
    setEditorLocalState(state);
    const RawJSON = convertContentToRawJSON();
    setConverted2RawContent(RawJSON);
    saveEditorContent(RawJSON); //save JSON in local memory.
    
    
    // Do your operations
    // var endDate = new Date();
    var timeDiff = (startDate.getTime() - moment.getTime()) / 1000;
    if (timeDiff > 4 ) {
       console.log('timeDifference is : ',timeDiff);
       setMoment(startDate);
       let convertedToHTML = convertContentToHTML();
       updateRichTextMessageAsHTML(convertedToHTML);
       setChecker(false);
      //  checker= 0;
    };

    // if (checker === 0) {
    //   setTimeout(() => {
    //     console.log('I am much simpler than you thought!');
    //     updateRichTextMessageAsHTML(convertContentToHTML());
    //   }, 4000);
    // }

    // let currentTime = new Date();
    // var currentTimeDiff = (currentTime.getTime() - moment.getTime() ) / 1000;
    // if (currentTimeDiff > 10) {
    //   console.log("timeDifference is toooo looong: ", timeDiff);
    //   setMoment(startDate);
    //   setTimeout(() => {
    //     console.log("AUTOMATIC UPDATE!!!");
    //     let convertedToHTML = convertContentToHTML();
    //     updateRichTextMessageAsHTML(convertedToHTML);
    //   }, 4000);

    // }
    // if (timeDiff) {
    //   tester = 0;
    //   setTimeout(() => {
    //     console.log("HAHAHAHA!!!");
    //     let convertedToHTML = convertContentToHTML();
    //     updateRichTextMessageAsHTML(convertedToHTML);
    //   }, 4000);
    // }
    // setTimeout(() => {
      
    // }, 4000);

    
    

    //  convertContentToHTML(); // convert text to raw and save it in memory.
    //  convertContentToPlainText(); // convert text to plain text and save it in state & memory.
  };

  const convertContentToRawJSON = () => {
    let JSONobj = convertToRaw(editorLocalState.getCurrentContent()); // convert text to JSON
    return JSONobj;
  };

  //Convert editor content to Plain Text
  const convertContentToPlainText = () => {
    const blocks = convertToRaw(editorLocalState.getCurrentContent()).blocks;
    const plainText = blocks
      .map((block) => (!block.text.trim() && "\n") || block.text)
      .join("\n");

    setConverted2PlainTextContent(plainText);
    saveEditorContentAsPlainText(plainText); //save plain string in local memory.
    return plainText;
  };

  //Save JSON to Database;
  const saveEditorContent = (data) => {
    localStorage.setItem("editorData", JSON.stringify(data));
  };
  //Save Plain Text in local memory or external database;
  const saveEditorContentAsPlainText = (plainText) => {
    localStorage.setItem("editorContentAsPlainText", plainText);
  };

  //Load JSON from Database;
  const getSavedEditorData = () => {
    const savedData = localStorage.getItem("editorData");
    return savedData ? JSON.parse(savedData) : null;
  };
  //Handle Key command
  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorLocalState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  //Render Content As Raw JSON
  const renderContentAsRawJs = () => {
    const contentState = editorLocalState.getCurrentContent();
    const raw = convertToRaw(contentState);
    const textResult = raw.blocks[0].text;
    let acc = "";
    const allTexts = raw.blocks.map((el) => acc + el.text + "");
    const stringJSON = JSON.stringify(raw, null, 2);

    return allTexts;
  };
  //Render Content As Plain Text
  const renderContentAsPlainText = () => {
    //  const currentText = converted2PlainTextContent;
    const blocks = convertToRaw(editorLocalState.getCurrentContent()).blocks;
    const currentText = blocks
      .map((block) => (!block.text.trim() && "\n") || block.text)
      .join("\n");

    return currentText;
  };
  //Render Content As HTML dangerously
  const renderContentAsHTML = () => {
    let currentContentAsHTML = convertToHTML(
      editorLocalState.getCurrentContent()
    );
    //  const blocks = convertToRaw(editorLocalState.getCurrentContent()).blocks;
    //  const currentText = blocks
    //    .map((block) => (!block.text.trim() && "\n") || block.text)
    //    .join("\n");

    return currentContentAsHTML;
  };

  const convertContentToHTML = () => {
    //Simple implementation:
    //  let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());

    //Advanced optional props:
    let currentContentAsHTML = convertToHTML({
      styleToHTML: (style) => {
        if (style === "BOLD") {
          return <span style={{ color: "blue" }} />;
        }
      },
      blockToHTML: (block) => {
        if (block.type === "PARAGRAPH") {
          return <p />;
        }
      },
      entityToHTML: (entity, originalText) => {
        if (entity.type === "LINK") {
          return <a href={entity.data.url}>{originalText}</a>;
        }
        return originalText;
      },
    })(editorLocalState.getCurrentContent());
    setConverted2HtmlContent(currentContentAsHTML);
    console.log('converted content as HTML is :', currentContentAsHTML);

    return currentContentAsHTML;
  };

  const createSanitizedMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  const handleSubmit = async () => {
    console.log("hello from handleSubmit :D ", converted2RawContent);
    // updateRichTextMessageAsHTML(converted2RawContent);
    // sendDataToServer("/api/v1/email", convertContentToRawJSON());
    // sendDataToServer("/api/v1/email", converted2RawContent);
    console.log(
      "rendered HTML is :",
      createSanitizedMarkup(renderContentAsHTML()).__html
    );
    //THIS ONE WORKS !!!
    // sendDataToServer(
    //   "/api/v1/email",
    //   renderContentAsHTML())
    // ;

    // sendDataToServer("/api/v1/email", renderContentAsHTML());
    // try {
    //   const response = await axios.post("/api/v1/email", {
    //     posted_data: "dalam kalti mashan",
    //     my_text: converted2RawContent,
    //   });
    //   console.log("👉 Returned data:", response);
    // } catch (e) {
    //   console.log(`😱 Axios request failed: ${e}`);
    // }
  };

  return (
    <Card>
      <Header>
        {/* <Image style={{ background: `url(${vegeloperImage})` }} /> */}
        <img
          src={vegeloperImage}
          style={{
            width: "60px",
            height: "60px",
            filter: "brightness(1.4) saturate(180%) hue-rotate(220deg)",
          }}
        />
        <Text>Tell me about your project...</Text>
      </Header>
      <Editor
        className="editor"
        editorState={editorLocalState}
        onEditorStateChange={handleEditorChange}
        placeholder="Type your message"
        toolbar={{
          options: ["inline"],
          inline: {
            options: ["bold", "italic", "underline"],
            inDropdown: false,
            bold: { icon: boldIcon },
            italic: { icon: italicIcon_2 },
            underline: { icon: underlineIcon_3 },
          },
        }}
      />
    </Card>
  );
};
const mapStateToProps = createStructuredSelector({
  // Empty
});

const mapDispatchToProps = (dispatch) => ({
  sendDataToServer: (URL, data) => dispatch(sendDataToServer(URL, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RichTextCard);



