const initialState = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![cityscape image](https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80)
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: initialState,
      view: 0 };

    this.handleChange = this.handleChange.bind(this);
    this.toggleView = this.toggleView.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value });

  }

  toggleView(n) {
    this.setState({
      view: n });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "wrapper" }, /*#__PURE__*/
      React.createElement("div", { id: "header", className: this.state.view != 0 ? "container-hidden" : "" }, /*#__PURE__*/
      React.createElement("h1", null, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("p", null, "Convert your text into HTML"), /*#__PURE__*/
      React.createElement("p", null, "Coded by Jonathan")), /*#__PURE__*/

      React.createElement("div", { className: `main ${this.state.view != 0 ? "main-maximized" : ""}` }, /*#__PURE__*/
      React.createElement(Editor, { text: this.state.text, handleChange: this.handleChange, view: this.state.view, toggleView: this.toggleView }), /*#__PURE__*/
      React.createElement(Preview, { text: this.state.text, view: this.state.view, toggleView: this.toggleView }))));



  }}


class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.view == 0 ? this.props.toggleView(1) : this.props.toggleView(0);
  }

  render() {
    const { text, handleChange, view } = this.props;
    return /*#__PURE__*/(
      React.createElement("div", { id: "editor-container", className: `container ${view == 1 ? "container-maximized" : view == 2 ? "container-hidden" : ""}` }, /*#__PURE__*/
      React.createElement("div", { className: "title-block" }, /*#__PURE__*/
      React.createElement("div", { className: "title" }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-user-edit" }), " Editor"), /*#__PURE__*/

      React.createElement("div", { className: "control" }, /*#__PURE__*/
      React.createElement("i", { className: `control-icon ${view == 0 ? "far fa-window-maximize" : "fas fa-compress-arrows-alt"}`, onClick: this.handleClick }))), /*#__PURE__*/


      React.createElement("textarea", { id: "editor", className: "text-field", value: text, onChange: handleChange })));


  }}


class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.view == 0 ? this.props.toggleView(2) : this.props.toggleView(0);
  }

  render() {
    const { text, view, toggleView } = this.props;
    const markdown = marked.parse(text, { breaks: true });
    return /*#__PURE__*/(
      React.createElement("div", { id: "preview-container", className: `container ${view == 2 ? "container-maximized" : view == 1 ? "container-hidden" : ""}` }, /*#__PURE__*/
      React.createElement("div", { className: "title-block" }, /*#__PURE__*/
      React.createElement("div", { className: "title" }, /*#__PURE__*/
      React.createElement("i", { className: "fas fa-search" }), " Previewer"), /*#__PURE__*/

      React.createElement("div", { className: "control" }, /*#__PURE__*/
      React.createElement("i", { className: `control-icon ${view == 0 ? "far fa-window-maximize" : "fas fa-compress-arrows-alt"}`, onClick: this.handleClick, id: "preview-control-icon" }))), /*#__PURE__*/


      React.createElement("p", { className: "text-field", id: "preview", dangerouslySetInnerHTML: { __html: markdown } })));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));