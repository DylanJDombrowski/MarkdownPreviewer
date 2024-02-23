import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "bootstrap/dist/css/bootstrap.min.css";

const initialMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

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

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown); // initialMarkdown contains default markdown text

  return (
    <div className="App justify-content-center align-items-center">
      <div className="row">
        <div className="col-md-4 ">
          <Editor markdown={markdown} setMarkdown={setMarkdown} />
        </div>
        <div className="col-md-8 ">
          <Preview markdown={markdown} />
        </div>
      </div>
    </div>
  );
}

export default App;
