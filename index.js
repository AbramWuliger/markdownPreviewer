marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

function App() {
  const [text, setText] = React.useState("Markdown syntax typed into the first pane will be automatically converted to HTML and rendered in the second pane. Go ahead, give it a try!  \n\n#### Headings:  \n# Heading 1\n## Heading 2\n### Heading 3\n---\n#### Hyperlink:   \n[Google](https://google.com)  \n\n---\n#### Inline code:\nFrom the console, run `console.log('Hello world!');` to see the output.    \n\n---\n\n#### Code block:\n```javascript\nfunction sayHello() {\n  return 'Hello world!';\n}\n```\n---\n\n#### List items:\n1. Ordered list item 1  \n2. Ordered list item 2  \n\n\n- Unordered list item  \n- Unordered list item  \n\n---\n\n#### Blockquote:  \n> Part of the inhumanity of the computer is that, once it is competently programmed and working smoothly, it is completely honest. -Isaac Asimov \n\n---\n#### Image:  \n![alt text](https://avatars2.githubusercontent.com/u/9892522?s=100&v=4 'freeCodeCamp Avatar')  \n\n---\n#### Formatted text:\nAs **bolded** or *emphasized* text.");

  return(
      <div className="text-center px-4">
          <h1 className="p-4">My Markdown Previewer</h1>
          <textarea
          name="text"
          id="editor"
          row="10"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="textarea"
          ></textarea>
          <h3 className="mt-3">Output</h3>
          <Preview markdown={text} />
      </div>
  );
}
function Preview({ markdown }) {
  return (
      <div
          dangerouslySetInnerHTML={{
           __html: marked(markdown, { renderer: renderer }),
          }}
          id="preview"
      ></div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
