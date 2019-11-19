const addStyleSheet = ({css, id}) => {
  const sheet = document.createElement('style');
  sheet.setAttribute('id', id);
  sheet.innerHTML = css;
  document.body.appendChild(sheet);
}

const removeStyleSheet = (styleId) => {
  const sheetToBeRemoved = document.getElementById(styleId);
  sheetToBeRemoved.remove();
}

export {
  addStyleSheet,
  removeStyleSheet,
}