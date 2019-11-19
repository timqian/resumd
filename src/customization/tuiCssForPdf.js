export default `
body {
  max-width: 900px;
  margin: 60px auto;
  padding: 0 10%;
  font-size: 13px;
  font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

*:not(table) {
    line-height: 1.5;
    box-sizing: content-box;
}

i,
cite,
em,
var,
address,
dfn {
    font-style: italic;
}

strong {
    font-weight: bold;
}

p {
    margin: 10px 0;
    color: #555;
}

h1:first-of-type,
div > div:first-of-type h1 {
      margin-top: 14px;
}

h1,
h2,
h3,
h5 {
    font-weight: bold;
}

h1 {
    font-size: 1.6rem;
    line-height: 28px;
    border-bottom: 3px double #999;
    margin: 52px 0 15px 0;
    padding-bottom: 7px;
    color: #000;
}

h2 {
    font-size: 1.3rem;
    line-height: 23px;
    border-bottom: 1px solid #dbdbdb;
    margin: 30px 0 13px 0;
    padding-bottom: 7px;
    color: #333;
}

h3,
h4 {
    font-size: 1.2rem;
    line-height: 18px;
    margin: 20px 0 2px;
    color: #333;
}

h5,
h6 {
    font-size: 1rem;
    line-height: 17px;
    margin: 10px 0 -4px;
    color: #333;
}

blockquote {
    margin: 15px 0;
}

blockquote {
    border-left: 4px solid #dddddd;
    padding: 0 15px;
    color: #777777;
}

blockquote > :first-child {
    margin-top: 0;
}

 blockquote > :last-child {
    margin-bottom: 0;
}

pre {
    margin: 2px 0 8px;
    padding: 18px;
    background-color: #f5f7f8;
}

code {
    color: #c1788b;
    padding: 4px 4px 2px 0;
    letter-spacing: -0.3px;
}

pre code {
    padding: 0;
    color: inherit;
    white-space: pre-wrap;
    background-color: transparent;
}

pre.addon {
    border: 1px solid #e8ebed;
    background-color: #fff;
}

img {
    margin: 4px 0 10px;
    box-sizing: border-box;
    vertical-align: top;
    max-width: 100%;
}

table {
    margin: 2px 0 14px;
    color: #555;
    width: auto;
    border-collapse: collapse;
    box-sizing: border-box;
}

table th, 
table td {
    height: 32px;
    padding: 5px 14px 5px 12px;
}

table td {
    border: 1px solid #eaeaea;
}

table th {
    border: 1px solid #72777b;
    border-top: 0;
    background-color: #7b8184;
    font-weight: 300;
    color: #fff;
    padding-top: 6px;
}

ul,
menu,
ol,
dir {
    display: block;
    list-style-type: disc;
    padding-left: 17px;
    margin: 6px 0 10px;
    color: #555;
}

ol {
    list-style-type: decimal;
}

ul ul,
ul ol,
ol ol,
ol ul {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}

ul li,
ol li {
    position: relative;
}

ul p, ol p {
    margin: 0;
}

ul li.task-list-item:before,
ol li.task-list-item:before,
pre ul li:before {
    content: "";
}

hr {
    border-top: 1px solid #eee;
    margin: 16px 0;
}

a {
    text-decoration: underline;
    color: #5286bc;
}

a:hover {
    color: #007cff;
}
`;