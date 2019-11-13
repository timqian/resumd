import React, {useState, useRef} from 'react';
import showdown from 'showdown';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
// import 'tui-editor/dist/tui-editor-contents.min.css';
import './customization/GitHub.css'
import { Editor } from '@toast-ui/react-editor'
import printJS from 'print-js';
import './components/Dropdown.css';
import initContent from './initContent';
import './App.css';
import fileDownload from 'js-file-download';

function App() {

  const editorEl = useRef(null);

  const downloadMD = () => {
    fileDownload(editorEl.current.getInstance().getValue(), 'resume.md'); 
  }
  const downloadHTML = () => {
    fileDownload(editorEl.current.getInstance().getHtml(), 'resume.html');
  }
  const downloadPDF = () => {
    printJS({
      type: 'raw-html',
      css: "",
      scanStyles: true,
      printable: editorEl.current.getInstance().getHtml(),
      targetStyles: ['*'],
    });
  }

  return (
    <div className="App">
      <header>
        <div className="header-left">
          <img src="https://i.v2ex.co/e0W134z7.png" className="App-logo" alt="logo" />
        </div>
        <div className="header-right"> 
          <div className="dropdown">
            <a className="header-link" href> Themes <span style={{fontSize:'10px'}}>▼</span></a>
            <div className="dropdown-content">
              <a href>GitHub</a>

              <a href>ToastUI</a>
              <hr/>
              <a href>Customize</a>
            </div>
          </div>
          <div className="dropdown">
            <a className="header-link" href> Download <span style={{fontSize:'10px'}}>▼</span></a>
            <div className="dropdown-content">
              <a href onClick={() => downloadMD()}>Markdown</a>

              <a href onClick={() => downloadHTML()}>HTML</a>

              <a href onClick={() => downloadPDF()}>PDF</a>
            </div>
          </div>
          <a className="header-link">Get Link</a>
        </div>
      </header>
      <div className="editor-container">
        <Editor
          ref={editorEl}
          initialValue={initContent}
          previewStyle="vertical"
          height="100%"
          initialEditType="markdown"
          useCommandShortcut={true}
          exts={[
            {
              name: 'chart',
              minWidth: 100,
              maxWidth: 600,
              minHeight: 100,
              maxHeight: 300
            },
            'scrollSync',
            'colorSyntax',
            'uml',
            'mark',
            'table'
          ]}
        />
      </div>

      <div className="ad-div">
        <a href="https://www.patreon.com/timqian"><img src="https://i.v2ex.co/06CPY1e8.png" width="100px"></img></a>
      </div>
    </div>
  );
}

export default App;
