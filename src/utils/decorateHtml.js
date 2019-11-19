export default function getOutline({mdHtml, css}) {
  return `<head>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style type="text/css" media="print">
@page {
  size: auto;  /* auto is the initial value */
  margin: 0mm; /* this affects the margin in the printer settings */
}
</style>
<style type="text/css">
${css}
</style>
</head>
<body>
${mdHtml}
</body>
`;
}