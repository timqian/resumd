import React, { useState, useEffect, useRef } from 'react';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import { Editor } from '@toast-ui/react-editor'
import printJS from 'print-js';
import './components/Dropdown.css';
import initContent from './initContent';
import './App.css';
import fileDownload from 'js-file-download';
import { addStyleSheet, removeStyleSheet} from './utils/sheetManager';
import decorateHtml from './utils/decorateHtml';
import githubCssForEditor from './customization/githubCssForEditor';
import githubCssForPdf from "./customization/githubCssForPdf";
import tuiCssForEditor from "./customization/tuiCssForEditor";
import tuiCssForPdf from "./customization/tuiCssForPdf";
import timqianCssForPdf from "./customization/timqianCssForPdf";
import timqianCssForEditor from "./customization/timqianCssForEditor";

function App() {
  const themes = {
    tui: {
      name: 'tui',
      pdfCss: tuiCssForPdf,
      editorCss: tuiCssForEditor,
    },
    github: {
      name: 'github',
      pdfCss: githubCssForPdf,
      editorCss: githubCssForEditor,
    },
    timqian: {
      name: 'timqian',
      pdfCss: timqianCssForPdf,
      editorCss: timqianCssForEditor,
    }
  }
  const editorEl = useRef(null);

  const initMdContent = window.localStorage.getItem('mdContent') ? window.localStorage.getItem('mdContent') : initContent;
  const [theme, setTheme] = useState(themes.tui.name);

  // only run on first render.
  useEffect(() => {
    addStyleSheet({
      css: themes[theme].editorCss,
      id: themes[theme].name,
    });
  }, [])


  const updateTheme = (newTheme) => {
    removeStyleSheet(theme);
    setTheme(newTheme);
    addStyleSheet({
      css: themes[newTheme].editorCss,
      id: newTheme,
    });
  }

  const onMdContentChange = (e) => {
    const value = editorEl.current.getInstance().getValue();
    window.localStorage.setItem('mdContent', value);
  }

  const downloadMD = () => {
    fileDownload(editorEl.current.getInstance().getValue(), 'resume.md'); 
  }

  const downloadHTML = () => {
    const editorHtml = editorEl.current.getInstance().getHtml();
    const decoratedHtml = decorateHtml({
      mdHtml: editorHtml,
      css: themes[theme].pdfCss,
    });
    fileDownload(decoratedHtml, 'resume.html');
  }

  const downloadPDF = () => {
    const editorHtml = editorEl.current.getInstance().getHtml();
    const decoratedHtml = decorateHtml({
      mdHtml: editorHtml,
      css: themes[theme].pdfCss,
    });
    printJS({
      type: 'raw-html',
      css: "",
      scanStyles: true,
      printable: decoratedHtml,
      targetStyles: ['*'],
      documentTitle: "&nbsp"
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
              <a href onClick={() => updateTheme(themes.tui.name)}>TUI</a>
              <a href onClick={() => updateTheme(themes.timqian.name)}>timqian.com</a>
              <a href onClick={() => updateTheme(themes.github.name)}>GitHub</a>
              <hr/>
              <a href><i><small>Customize</small></i></a>
            </div>
          </div>
          <div className="dropdown">
            <a className="header-link" href onClick={() => downloadPDF()}> Download PDF <span style={{fontSize:'10px'}}>▼</span></a>
            <div className="dropdown-content">
              <a href onClick={() => downloadPDF()}>PDF</a>
              <a href onClick={() => downloadMD()}>Markdown</a>
              <a href onClick={() => downloadHTML()}>HTML</a>
            </div>
          </div>
          <a className="header-link">Get Link</a>
        </div>
      </header>
      <Editor
        ref={editorEl}
        initialValue={initMdContent}
        previewStyle="vertical"
        height="calc(100vh - 64px)"
        initialEditType="markdown"
        useCommandShortcut={true}
        onChange={(e)=>onMdContentChange(e)}
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

      <div className="ad-div">
        <a href="https://www.patreon.com/timqian"><span role="img" aria-label="donate">❤️</span>Donate</a>
        &nbsp;
        |
        &nbsp;
        <a href="https://github.com/timqian/resumd/issues">
          <svg width="15" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" fill="#fff"d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
          &nbsp;
          Feedback
        </a>
      </div>
    </div>
  );
}

export default App;
