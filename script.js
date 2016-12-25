var MarkdownText = React.createClass({

  getInitialState: function() {
    return {
      text: "\nHeading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"
    }
  },

  updateText: function() {
    var val = this.refs.newInput.value;
    this.setState({
      text: val
    });
  },
 render: function() {
    
     var text=this.state.text;
     var markedText= {__html:marked(text)};
    console.log(text);
    return (
        
      <div className="row">
        <div className="col-xs-6 wrapper2">
          <h2><b>Marked text</b></h2>
          <div className="preview wins" dangerouslySetInnerHTML={markedText}></div>      
          </div>
        <div className="col-xs-6 wrapper2">
          <h2><b>Input text</b></h2>
          <textarea onChange={this.updateText} ref="newInput" className= "markdown wins" defaultValue={text}></textarea>
        </div>
      </div>);
  }
});

ReactDOM.render(
  <MarkdownText />,
  document.getElementById("display")
);