import React, { useState, useEffect } from 'react';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Convert the markdown text to HTML and update the 'html' state
    // const convertToHTML = () => {
    //   // Implement the logic to convert markdown to HTML here
    //   // You can use a library like 'marked' or 'remarkable' for this purpose
    //   const convertedHtml = yourMarkdownToHtmlFunction(markdown);
    //   setHtml(convertedHtml);
    

    setIsLoading(true);
    setTimeout(() => {
      convertToHTML();
      setIsLoading(false);
    }, 1000); // Simulating a delay for loading
  }, [markdown]);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
    
  };
//   console.log("hello", markdown)
  return (
   
     <div className="markdown-editor">
      <div className="textarea">
        <textarea
          placeholder="Write your markdown here"
          value={markdown}
          onChange={e=> setMarkdown(e.target.value)}
        />
      </div>
      <div className="preview">
        {isLoading ? <div className="loading">{markdown}</div> :" "}
      </div>
    </div>
  
  );
};

export default MarkdownEditor;
