export default `
@font-face {
  font-family: octicons-link;
  src: url(data:font/woff;charset=utf-8;base64,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) format('woff');
}

.CodeMirror {
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.tui-editor-contents {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  color: #24292e;
  line-height: 1.5;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-size: 13px;

  word-wrap: break-word;
}

.tui-editor-contents .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.tui-editor-contents .anchor {
  float: left;
  line-height: 1;
  margin-left: -20px;
  padding-right: 4px;
}

.tui-editor-contents .anchor:focus {
  outline: none;
}

.tui-editor-contents h1 .octicon-link,
.tui-editor-contents h2 .octicon-link,
.tui-editor-contents h3 .octicon-link,
.tui-editor-contents h4 .octicon-link,
.tui-editor-contents h5 .octicon-link,
.tui-editor-contents h6 .octicon-link {
  color: #1b1f23;
  vertical-align: middle;
  visibility: hidden;
}

.tui-editor-contents h1:hover .anchor,
.tui-editor-contents h2:hover .anchor,
.tui-editor-contents h3:hover .anchor,
.tui-editor-contents h4:hover .anchor,
.tui-editor-contents h5:hover .anchor,
.tui-editor-contents h6:hover .anchor {
  text-decoration: none;
}

.tui-editor-contents h1:hover .anchor .octicon-link,
.tui-editor-contents h2:hover .anchor .octicon-link,
.tui-editor-contents h3:hover .anchor .octicon-link,
.tui-editor-contents h4:hover .anchor .octicon-link,
.tui-editor-contents h5:hover .anchor .octicon-link,
.tui-editor-contents h6:hover .anchor .octicon-link {
  visibility: visible;
}



.tui-editor-contents .pl-c {
  color: #6a737d;
}

.tui-editor-contents .pl-c1,
.tui-editor-contents .pl-s .pl-v {
  color: #005cc5;
}

.tui-editor-contents .pl-e,
.tui-editor-contents .pl-en {
  color: #6f42c1;
}

.tui-editor-contents .pl-s .pl-s1,
.tui-editor-contents .pl-smi {
  color: #24292e;
}

.tui-editor-contents .pl-ent {
  color: #22863a;
}

.tui-editor-contents .pl-k {
  color: #d73a49;
}

.tui-editor-contents .pl-pds,
.tui-editor-contents .pl-s,
.tui-editor-contents .pl-s .pl-pse .pl-s1,
.tui-editor-contents .pl-sr,
.tui-editor-contents .pl-sr .pl-cce,
.tui-editor-contents .pl-sr .pl-sra,
.tui-editor-contents .pl-sr .pl-sre {
  color: #032f62;
}

.tui-editor-contents .pl-smw,
.tui-editor-contents .pl-v {
  color: #e36209;
}

.tui-editor-contents .pl-bu {
  color: #b31d28;
}

.tui-editor-contents .pl-ii {
  background-color: #b31d28;
  color: #fafbfc;
}

.tui-editor-contents .pl-c2 {
  background-color: #d73a49;
  color: #fafbfc;
}

.tui-editor-contents .pl-c2:before {
  content: "^M";
}

.tui-editor-contents .pl-sr .pl-cce {
  color: #22863a;
  font-weight: 700;
}

.tui-editor-contents .pl-ml {
  color: #735c0f;
}

.tui-editor-contents .pl-mh,
.tui-editor-contents .pl-mh .pl-en,
.tui-editor-contents .pl-ms {
  color: #005cc5;
  font-weight: 700;
}

.tui-editor-contents .pl-mi {
  color: #24292e;
  font-style: italic;
}

.tui-editor-contents .pl-mb {
  color: #24292e;
  font-weight: 700;
}

.tui-editor-contents .pl-md {
  background-color: #ffeef0;
  color: #b31d28;
}

.tui-editor-contents .pl-mi1 {
  background-color: #f0fff4;
  color: #22863a;
}

.tui-editor-contents .pl-mc {
  background-color: #ffebda;
  color: #e36209;
}

.tui-editor-contents .pl-mi2 {
  background-color: #005cc5;
  color: #f6f8fa;
}

.tui-editor-contents .pl-mdr {
  color: #6f42c1;
  font-weight: 700;
}

.tui-editor-contents .pl-ba {
  color: #586069;
}

.tui-editor-contents .pl-sg {
  color: #959da5;
}

.tui-editor-contents .pl-corl {
  color: #032f62;
  text-decoration: underline;
}

.tui-editor-contents details {
  display: block;
}

.tui-editor-contents summary {
  display: list-item;
}

.tui-editor-contents a {
  background-color: transparent;
}

.tui-editor-contents a:active,
.tui-editor-contents a:hover {
  outline-width: 0;
}

.tui-editor-contents strong {
  font-weight: inherit;
  font-weight: bolder;
}

.tui-editor-contents h1 {
  font-size: 2em;
  margin: .67em 0;
}

.tui-editor-contents img {
  border-style: none;
}

.tui-editor-contents code,
.tui-editor-contents kbd,
.tui-editor-contents pre {
  font-family: monospace,monospace;
  font-size: 1em;
}

.tui-editor-contents hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

.tui-editor-contents input {
  font: inherit;
  margin: 0;
}

.tui-editor-contents input {
  overflow: visible;
}

.tui-editor-contents [type=checkbox] {
  box-sizing: border-box;
  padding: 0;
}

.tui-editor-contents * {
  box-sizing: border-box;
}

.tui-editor-contents input {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.tui-editor-contents a {
  color: #0366d6;
  text-decoration: none;
}

.tui-editor-contents a:hover {
  text-decoration: underline;
}

.tui-editor-contents strong {
  font-weight: 600;
}

.tui-editor-contents hr {
  background: transparent;
  border: 0;
  border-bottom: 1px solid #dfe2e5;
  height: 0;
  margin: 15px 0;
  overflow: hidden;
}

.tui-editor-contents hr:before {
  content: "";
  display: table;
}

.tui-editor-contents hr:after {
  clear: both;
  content: "";
  display: table;
}

.tui-editor-contents table {
  border-collapse: collapse;
  border-spacing: 0;
}

.tui-editor-contents td,
.tui-editor-contents th {
  padding: 0;
}

.tui-editor-contents details summary {
  cursor: pointer;
}

.tui-editor-contents h1,
.tui-editor-contents h2,
.tui-editor-contents h3,
.tui-editor-contents h4,
.tui-editor-contents h5,
.tui-editor-contents h6 {
  margin-bottom: 0;
  margin-top: 0;
}

.tui-editor-contents h1 {
  font-size: 32px;
}

.tui-editor-contents h1,
.tui-editor-contents h2 {
  font-weight: 600;
}

.tui-editor-contents h2 {
  font-size: 24px;
}

.tui-editor-contents h3 {
  font-size: 20px;
}

.tui-editor-contents h3,
.tui-editor-contents h4 {
  font-weight: 600;
}

.tui-editor-contents h4 {
  font-size: 16px;
}

.tui-editor-contents h5 {
  font-size: 14px;
}

.tui-editor-contents h5,
.tui-editor-contents h6 {
  font-weight: 600;
}

.tui-editor-contents h6 {
  font-size: 12px;
}

.tui-editor-contents p {
  margin-bottom: 10px;
  margin-top: 0;
}

.tui-editor-contents blockquote {
  margin: 0;
}

.tui-editor-contents ol,
.tui-editor-contents ul {
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
}

.tui-editor-contents ol ol,
.tui-editor-contents ul ol {
  list-style-type: lower-roman;
}

.tui-editor-contents ol ol ol,
.tui-editor-contents ol ul ol,
.tui-editor-contents ul ol ol,
.tui-editor-contents ul ul ol {
  list-style-type: lower-alpha;
}

.tui-editor-contents dd {
  margin-left: 0;
}

.tui-editor-contents code,
.tui-editor-contents pre {
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  font-size: 12px;
}

.tui-editor-contents pre {
  margin-bottom: 0;
  margin-top: 0;
}

.tui-editor-contents input::-webkit-inner-spin-button,
.tui-editor-contents input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}

.tui-editor-contents .border {
  border: 1px solid #e1e4e8!important;
}

.tui-editor-contents .border-0 {
  border: 0!important;
}

.tui-editor-contents .border-bottom {
  border-bottom: 1px solid #e1e4e8!important;
}

.tui-editor-contents .rounded-1 {
  border-radius: 3px!important;
}

.tui-editor-contents .bg-white {
  background-color: #fff!important;
}

.tui-editor-contents .bg-gray-light {
  background-color: #fafbfc!important;
}

.tui-editor-contents .text-gray-light {
  color: #6a737d!important;
}

.tui-editor-contents .mb-0 {
  margin-bottom: 0!important;
}

.tui-editor-contents .my-2 {
  margin-bottom: 8px!important;
  margin-top: 8px!important;
}

.tui-editor-contents .pl-0 {
  padding-left: 0!important;
}

.tui-editor-contents .py-0 {
  padding-bottom: 0!important;
  padding-top: 0!important;
}

.tui-editor-contents .pl-1 {
  padding-left: 4px!important;
}

.tui-editor-contents .pl-2 {
  padding-left: 8px!important;
}

.tui-editor-contents .py-2 {
  padding-bottom: 8px!important;
  padding-top: 8px!important;
}

.tui-editor-contents .pl-3,
.tui-editor-contents .px-3 {
  padding-left: 16px!important;
}

.tui-editor-contents .px-3 {
  padding-right: 16px!important;
}

.tui-editor-contents .pl-4 {
  padding-left: 24px!important;
}

.tui-editor-contents .pl-5 {
  padding-left: 32px!important;
}

.tui-editor-contents .pl-6 {
  padding-left: 40px!important;
}

.tui-editor-contents .f6 {
  font-size: 12px!important;
}

.tui-editor-contents .lh-condensed {
  line-height: 1.25!important;
}

.tui-editor-contents .text-bold {
  font-weight: 600!important;
}

.markdown-body:before {
  content: "";
  display: table;
}

.markdown-body:after {
  clear: both;
  content: "";
  display: table;
}

.markdown-body>:first-child {
  margin-top: 0!important;
}

.markdown-body>:last-child {
  margin-bottom: 0!important;
}

.tui-editor-contents a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.tui-editor-contents blockquote,
.tui-editor-contents dl,
.tui-editor-contents ol,
.tui-editor-contents p,
.tui-editor-contents pre,
.tui-editor-contents table,
.tui-editor-contents ul {
  margin-bottom: 16px;
  margin-top: 0;
}

.tui-editor-contents hr {
  background-color: #e1e4e8;
  border: 0;
  height: .25em;
  margin: 24px 0;
  padding: 0;
}

.tui-editor-contents blockquote {
  border-left: .25em solid #dfe2e5;
  color: #6a737d;
  padding: 0 1em;
}

.tui-editor-contents blockquote>:first-child {
  margin-top: 0;
}

.tui-editor-contents blockquote>:last-child {
  margin-bottom: 0;
}

.tui-editor-contents kbd {
  background-color: #fafbfc;
  border: 1px solid #c6cbd1;
  border-bottom-color: #959da5;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #959da5;
  color: #444d56;
  display: inline-block;
  font-size: 11px;
  line-height: 10px;
  padding: 3px 5px;
  vertical-align: middle;
}

.tui-editor-contents h1,
.tui-editor-contents h2,
.tui-editor-contents h3,
.tui-editor-contents h4,
.tui-editor-contents h5,
.tui-editor-contents h6 {
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 16px;
  margin-top: 24px;
}

.tui-editor-contents h1 {
  font-size: 2em;
}

.tui-editor-contents h1,
.tui-editor-contents h2 {
  border-bottom: 1px solid #eaecef;
  padding-bottom: .3em;
}

.tui-editor-contents h2 {
  font-size: 1.5em;
}

.tui-editor-contents h3 {
  font-size: 1.25em;
}

.tui-editor-contents h4 {
  font-size: 1em;
}

.tui-editor-contents h5 {
  font-size: .875em;
}

.tui-editor-contents h6 {
  color: #6a737d;
  font-size: .85em;
}

.tui-editor-contents ol,
.tui-editor-contents ul {
  padding-left: 2em;
}

.tui-editor-contents ol ol,
.tui-editor-contents ol ul,
.tui-editor-contents ul ol,
.tui-editor-contents ul ul {
  margin-bottom: 0;
  margin-top: 0;
}

.tui-editor-contents li {
  word-wrap: break-all;
}

.tui-editor-contents li>p {
  margin-top: 16px;
}

.tui-editor-contents li+li {
  margin-top: .25em;
}

.tui-editor-contents dl {
  padding: 0;
}

.tui-editor-contents dl dt {
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
  margin-top: 16px;
  padding: 0;
}

.tui-editor-contents dl dd {
  margin-bottom: 16px;
  padding: 0 16px;
}

.tui-editor-contents table {
  display: block;
  overflow: auto;
  width: 100%;
}

.tui-editor-contents table th {
  font-weight: 600;
}

.tui-editor-contents table td,
.tui-editor-contents table th {
  border: 1px solid #dfe2e5;
  padding: 6px 13px;
}

.tui-editor-contents table tr {
  background-color: #fff;
  border-top: 1px solid #c6cbd1;
}

.tui-editor-contents table tr:nth-child(2n) {
  background-color: #f6f8fa;
}

.tui-editor-contents img {
  background-color: #fff;
  box-sizing: content-box;
  max-width: 100%;
}

.tui-editor-contents img[align=right] {
  padding-left: 20px;
}

.tui-editor-contents img[align=left] {
  padding-right: 20px;
}

.tui-editor-contents code {
  background-color: rgba(27,31,35,.05);
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: .2em .4em;
}

.tui-editor-contents pre {
  word-wrap: normal;
}

.tui-editor-contents pre>code {
  background: transparent;
  border: 0;
  font-size: 100%;
  margin: 0;
  padding: 0;
  white-space: pre;
  word-break: normal;
}

.tui-editor-contents .highlight {
  margin-bottom: 16px;
}

.tui-editor-contents .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.tui-editor-contents .highlight pre,
.tui-editor-contents pre {
  background-color: #f6f8fa;
  border-radius: 3px;
  font-size: 85%;
  line-height: 1.45;
  overflow: auto;
  padding: 16px;
}

.tui-editor-contents pre code {
  background-color: transparent;
  border: 0;
  display: inline;
  line-height: inherit;
  margin: 0;
  max-width: auto;
  overflow: visible;
  padding: 0;
  word-wrap: normal;
}

.tui-editor-contents .commit-tease-sha {
  color: #444d56;
  display: inline-block;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  font-size: 90%;
}

.tui-editor-contents .blob-wrapper {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  overflow-x: auto;
  overflow-y: hidden;
}

.tui-editor-contents .blob-wrapper-embedded {
  max-height: 240px;
  overflow-y: auto;
}

.tui-editor-contents .blob-num {
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  color: rgba(27,31,35,.3);
  cursor: pointer;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  font-size: 12px;
  line-height: 20px;
  min-width: 50px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: right;
  user-select: none;
  vertical-align: top;
  white-space: nowrap;
  width: 1%;
}

.tui-editor-contents .blob-num:hover {
  color: rgba(27,31,35,.6);
}

.tui-editor-contents .blob-num:before {
  content: attr(data-line-number);
}

.tui-editor-contents .blob-code {
  line-height: 20px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  vertical-align: top;
}

.tui-editor-contents .blob-code-inner {
  color: #24292e;
  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  font-size: 12px;
  overflow: visible;
  white-space: pre;
  word-wrap: normal;
}

.tui-editor-contents .pl-token.active,
.tui-editor-contents .pl-token:hover {
  background: #ffea7f;
  cursor: pointer;
}

.tui-editor-contents kbd {
  background-color: #fafbfc;
  border: 1px solid #d1d5da;
  border-bottom-color: #c6cbd1;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 #c6cbd1;
  color: #444d56;
  display: inline-block;
  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;
  line-height: 10px;
  padding: 3px 5px;
  vertical-align: middle;
}

.tui-editor-contents :checked+.radio-label {
  border-color: #0366d6;
  position: relative;
  z-index: 1;
}

.tui-editor-contents .tab-size[data-tab-size="1"] {
  -moz-tab-size: 1;
  tab-size: 1;
}

.tui-editor-contents .tab-size[data-tab-size="2"] {
  -moz-tab-size: 2;
  tab-size: 2;
}

.tui-editor-contents .tab-size[data-tab-size="3"] {
  -moz-tab-size: 3;
  tab-size: 3;
}

.tui-editor-contents .tab-size[data-tab-size="4"] {
  -moz-tab-size: 4;
  tab-size: 4;
}

.tui-editor-contents .tab-size[data-tab-size="5"] {
  -moz-tab-size: 5;
  tab-size: 5;
}

.tui-editor-contents .tab-size[data-tab-size="6"] {
  -moz-tab-size: 6;
  tab-size: 6;
}

.tui-editor-contents .tab-size[data-tab-size="7"] {
  -moz-tab-size: 7;
  tab-size: 7;
}

.tui-editor-contents .tab-size[data-tab-size="8"] {
  -moz-tab-size: 8;
  tab-size: 8;
}

.tui-editor-contents .tab-size[data-tab-size="9"] {
  -moz-tab-size: 9;
  tab-size: 9;
}

.tui-editor-contents .tab-size[data-tab-size="10"] {
  -moz-tab-size: 10;
  tab-size: 10;
}

.tui-editor-contents .tab-size[data-tab-size="11"] {
  -moz-tab-size: 11;
  tab-size: 11;
}

.tui-editor-contents .tab-size[data-tab-size="12"] {
  -moz-tab-size: 12;
  tab-size: 12;
}

.tui-editor-contents .task-list-item {
  list-style-type: none;
}

.tui-editor-contents .task-list-item+.task-list-item {
  margin-top: 3px;
}

.tui-editor-contents .task-list-item input {
  margin: 0 .2em .25em -1.6em;
  vertical-align: middle;
}

.tui-editor-contents hr {
  border-bottom-color: #eee;
}

.tui-editor-contents .pl-0 {
  padding-left: 0!important;
}

.tui-editor-contents .pl-1 {
  padding-left: 4px!important;
}

.tui-editor-contents .pl-2 {
  padding-left: 8px!important;
}

.tui-editor-contents .pl-3 {
  padding-left: 16px!important;
}

.tui-editor-contents .pl-4 {
  padding-left: 24px!important;
}

.tui-editor-contents .pl-5 {
  padding-left: 32px!important;
}

.tui-editor-contents .pl-6 {
  padding-left: 40px!important;
}

.tui-editor-contents .pl-7 {
  padding-left: 48px!important;
}

.tui-editor-contents .pl-8 {
  padding-left: 64px!important;
}

.tui-editor-contents .pl-9 {
  padding-left: 80px!important;
}

.tui-editor-contents .pl-10 {
  padding-left: 96px!important;
}

.tui-editor-contents .pl-11 {
  padding-left: 112px!important;
}

.tui-editor-contents .pl-12 {
  padding-left: 128px!important;
}
`;