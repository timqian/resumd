import React, { useState, useEffect, useRef } from 'react';
import queryString from 'query-string';
import notie from 'notie';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-extScrollSync';
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

function App() {
  const editorEl = useRef(null);
  const queryObj = queryString.parse(window.location.search);
  const queryMdEncoded = queryObj.md;
  const localMd = window.localStorage.getItem('mdContent');
  let initMdContent = initContent;
  if (localMd) initMdContent = localMd;
  if (queryMdEncoded) initMdContent = decodeURIComponent(queryMdEncoded);
  const [theme, setTheme] = useState(themes.tui.name);

  // only run on first render.
  useEffect(() => {
    addStyleSheet({
      css: themes[theme].editorCss,
      id: themes[theme].name,
    });
  }, []);


  const updateTheme = (newTheme) => {
    removeStyleSheet(theme);
    setTheme(newTheme);
    addStyleSheet({
      css: themes[newTheme].editorCss,
      id: newTheme,
    });
  }

  const onMdContentChange = () => {
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

  const getShareLink = () => {
    const md = window.localStorage.getItem('mdContent');
    const url = window.location.origin + '?' + queryString.stringify({md: encodeURIComponent(md)});
    console.log(url);
    notie.alert({ text: `Share this editable resume to others with <br/><a href="${url}">this link</a>`, type: 'success', time: 6});
  }

  return (
    <div className="App">
      <header>
        <div className="header-left">
          <a href="/"><img src="https://i.v2ex.co/e0W134z7.png" className="App-logo" alt="logo" /></a>
        </div>
        <div className="header-right"> 
          <div className="dropdown">
            <a className="header-link" href> Themes <span style={{fontSize:'10px'}}>▼</span></a>
            <div className="dropdown-content">
              <a href onClick={() => updateTheme(themes.tui.name)}>TUI</a>
              <a href onClick={() => updateTheme(themes.timqian.name)}>timqian.com</a>
              <a href onClick={() => updateTheme(themes.github.name)}>GitHub</a>
              <hr/>
              <a href="https://github.com/timqian/resumd/issues/1"><i><small>Customize</small></i></a>
            </div>
          </div>
          <div className="dropdown">
            <a className="header-link" href> Download <span style={{fontSize:'10px'}}>▼</span></a>
            <div className="dropdown-content">
              <a href onClick={() => downloadPDF()}>PDF</a>
              <a href onClick={() => downloadMD()}>Markdown</a>
              <a href onClick={() => downloadHTML()}>HTML</a>
            </div>
          </div>
          <a className="header-link" href onClick={() => getShareLink()}>
            <span>Get Link </span> 
            
            <svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
          </a>
        </div>
      </header>
      <Editor
        ref={editorEl}
        initialValue={initMdContent}
        previewStyle="vertical"
        height="calc(100vh - 64px)"
        initialEditType="markdown"
        useCommandShortcut={true}
        onChange={() => onMdContentChange()}
        exts={[
          'scrollSync',
        ]}
      />

      <div className="ad-div">
        <a href="https://www.patreon.com/timqian">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <span> Donate</span>
        </a>
        &nbsp;
        |
        &nbsp;
        <a href="https://github.com/timqian/resumd/issues">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          <span> Feedback</span>
        </a>
      </div>
    </div>
  );
}

export default App;
