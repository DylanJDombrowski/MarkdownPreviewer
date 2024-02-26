import PropTypes from "prop-types";

function Editor({ markdown, setMarkdown }) {
  return (
    <div className="editor-container d-flex flex-column align-items-center vh-100">
      <label htmlFor="editor">
        <h2>Markdown Input</h2>
      </label>
      <textarea
        id="editor"
        className="markdown-editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Enter markdown here..."
      />
    </div>
  );
}

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  setMarkdown: PropTypes.func.isRequired,
};

export default Editor;
