import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
    props.showAlert("Text copied to clipboard!", "success");
  }

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText.trim());
    props.showAlert("Extra spaces removed!", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="container my-3">
      <h2>{props.heading}</h2>
<textarea
  className="form-control"
  value={text}
  onChange={handleOnChange}
  id="myBox"
  rows="8"
  style={{
    backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black'
  }}
></textarea>


      <button className="btn btn-primary my-2 mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
      <button className="btn btn-secondary my-2 mx-1" onClick={handleLowclick}>Convert to Lowercase</button>
      <button className="btn btn-success my-2 mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-warning my-2 mx-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-danger my-2 mx-1" onClick={handleClear}>Clear Text</button>

      <div className="container my-3">
        <h3>Your text summary</h3>
        <p>{text.split(/\s+/).filter(word => word.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter(word => word.length !== 0).length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter something in the textbox to preview here."}</p>
      </div>
    </div>
  );
}
