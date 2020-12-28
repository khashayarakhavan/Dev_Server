//Framework
import React, { useState , useEffect} from "react";
//State Mangement
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//Libraries
import { EditorState , RichUtils, convertToRaw, convertFromRaw} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
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
import vegeloperImage from "../../assets/SVG/Vegeloper.svg";
import boldIcon from "../../assets/SVG/bold.svg";
import italicIcon from "../../assets/SVG/italic.svg";
import underlineIcon from "../../assets/SVG/underline.svg";


export const RichTextCard = ( {sendDataToServer, updateRichTextState }) => {
  const [editorLocalState, setEditorLocalState] = useState(() =>
    EditorState.createEmpty()
  );
  const [converted2HtmlContent, setConverted2HtmlContent] = useState(null);
  const [converted2RawContent, setConverted2RawContent] = useState(null);
  const [converted2PlainTextContent, setConverted2PlainTextContent] = useState(null);

  useEffect(() => {
    const rawEditorData = getSavedEditorData();
    
    
    if (rawEditorData !== null) {
      const contentState = convertFromRaw(rawEditorData); //Convert to HTML from RAW
      setEditorLocalState(EditorState.createWithContent(contentState));

      setConverted2HtmlContent(editorLocalState);
      setConverted2RawContent(rawEditorData);

      updateRichTextState(rawEditorData);
    }
  }, []);

 

   //Handle changes in the editor
   const handleEditorChange = (state) => {
     setEditorLocalState(state);
     const RawJSON = convertContentToRawJSON();
     setConverted2RawContent(RawJSON);
     saveEditorContent(RawJSON); //save JSON in local memory.
     //  convertContentToHTML(); // convert text to raw and save it in memory.
     //  convertContentToPlainText(); // convert text to plain text and save it in state & memory.
     //  console.log(converted2HtmlContent);
     //  console.log("JSON is here: ", converted2RawContent);
     //  console.log("plainText is here: ", converted2PlainTextContent);
   };

   //Convert editor content to HTML
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
      localStorage.setItem('editorData', JSON.stringify(data))
   };
   //Save Plain Text in local memory or external database;
   const saveEditorContentAsPlainText = (plainText) => {
     localStorage.setItem("editorContentAsPlainText", plainText);
   };

   //Load JSON from Database;
   const getSavedEditorData = () => {
     const savedData = localStorage.getItem('editorData');
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
     let acc = '';
     const allTexts = raw.blocks.map(el => acc + el.text + '' );
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
   };

   const createSanitizedMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
   };
  
  const handleSubmit = async () => {
    console.log('hello from handleSubmit :D ', converted2RawContent);
    updateRichTextState(converted2RawContent);
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

    sendDataToServer(
      "/api/v1/email",
      createSanitizedMarkup(renderContentAsHTML())
    );
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
        <Image style={{ background: `url(${vegeloperImage})` }} />
        <Text>Tell me more about your project ...</Text>
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
            italic: { icon: italicIcon },
            underline: { icon: underlineIcon },
          },
        }}
      />
      <button style={{ fontSize: "14px", color: "pink", background: "lightyellow" }} onClick={handleSubmit}>
        Send
      </button>
      <p style={{ fontSize: "14px", color: "red" }}>
        This one uses HTML tags dangerously set inside the div.
      </p>
      <div
        className="preview"
        dangerouslySetInnerHTML={createSanitizedMarkup(renderContentAsHTML())}
        style={{ fontSize: "14px" }}
      ></div>
      <p style={{ fontSize: "14px", color: "red" }}>
        This one uses mapping over all blocks{" "}
      </p>
      <pre style={{ fontSize: "14px", whiteSpace: "normal" }}>
        {renderContentAsRawJs()}
      </pre>
      <p style={{ fontSize: "14px", color: "red" }}>
        This one maps over all plainText and keeps spaces between{" "}
      </p>
      <pre style={{ fontSize: "14px" }}>{renderContentAsPlainText()}</pre>
    </Card>
  );
};
const mapStateToProps = createStructuredSelector({
  // Empty
});

const mapDispatchToProps = (dispatch) => ({
  updateRichTextState: (value) => dispatch(emailRichText(value)),
  sendDataToServer: (URL, data) => dispatch(sendDataToServer(URL, data)),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(RichTextCard);



