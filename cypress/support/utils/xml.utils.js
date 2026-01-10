export const parseXml = (xmlString) => {
  const parser = new DOMParser();
  return parser.parseFromString(xmlString, 'application/xml');
};

export const getXmlText = (xmlDoc, selector) => {
  const el = xmlDoc.querySelector(selector);
  return el ? el.textContent : null;
};
