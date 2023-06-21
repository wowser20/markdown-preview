import { useState } from 'react';
import React from 'react';
import "./style.css";
import { marked } from 'marked';
import Edit from './images/edit.svg'


//a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text

const MarkdownPreview = () => {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \` code \`
  \`\`\`
  {
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**
`);
  marked.setOptions({
    breaks:true
  })
  return (
    <div>
        <header id="header-editor">
            <h3>Editor</h3>
        </header>
            <textarea id="editor" value={text}
            onChange={(e)=>{
            setText(e.target.value)}}
        
            ></textarea>
        
       
        <header id="header-preview">
            <h3>Previewer</h3>
        </header>
            <div id="preview" 
            dangerouslySetInnerHTML={{
              __html: marked(text),
            }}>

            </div>
        

    </div>
  )
}

export default MarkdownPreview