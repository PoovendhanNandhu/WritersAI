import React, { useState } from 'react';
import { Editor, EditorState, ContentState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GenrativeText.css';

const GenrativeText = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateText = async () => {
    if (prompt.trim() === '') {
      alert('The prompt should not be empty.');
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/generate-text/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const generatedText = data.generated_text;

      const contentState = ContentState.createFromText(generatedText);
      const newEditorState = EditorState.push(editorState, contentState, 'insert-characters');
      setEditorState(newEditorState);
      setPrompt(''); // Clear the prompt input after generating text
    } catch (error) {
      console.error('Error generating text:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const applyFormatting = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };
  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  return (
    <div>
      <Navbar bg="white" variant="light" expand="lg">
        <Container className='justify-content-center'>
          <Navbar.Brand href="/" className='logo'>
            {/* The content you want in the Navbar.Brand */}
            WritersAi
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="editor-container">
    <input
      type="text"
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      placeholder="Enter your prompt here"
      disabled={isLoading}
      className="prompt-input"
    />
    <div className="toolbar">
      {/* Add buttons for styling */}
      <button onMouseDown={(e) => { e.preventDefault(); applyFormatting('BOLD'); }}>B</button>
      <button onMouseDown={(e) => { e.preventDefault(); applyFormatting('ITALIC'); }}>I</button>
      <button onMouseDown={(e) => { e.preventDefault(); applyFormatting('UNDERLINE'); }}>U</button>
    </div>
    <div className="editor-wrapper">
      <Editor
        editorState={editorState}
        onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        readOnly={isLoading} // The editor is read-only; it's only used for displaying generated text
      />
      {isLoading && <div className="loading-indicator">Loading...</div>}
    </div>
    <button onClick={handleGenerateText} className="button-27" disabled={isLoading}>Generate Text</button>
  </div>
    </div>
    
  );
};

export default GenrativeText;
