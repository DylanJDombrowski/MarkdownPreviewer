// Preview.js
import { marked } from "marked";
import PropTypes from "prop-types";

function Preview({ markdown }) {
  const getMarkdownText = () => {
    var rawMarkup = marked(markdown, { breaks: true });
    return { __html: rawMarkup };
  };

  return <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />;
}

Preview.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Preview;
