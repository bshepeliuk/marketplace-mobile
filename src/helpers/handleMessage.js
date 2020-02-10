export const getUrlFromText = (text) => {
  const msgPattern = /^https?:\/\/(.*)/gm;

  return text.split(' ').filter((txt) => txt.match(msgPattern));
};

export const removeLinkFromText = (text) => {
  const msgPattern = /^https?:\/\/(.*)/gm;

  return text
    .split(' ')
    .map((txt) => txt.replace(msgPattern, ''))
    .join(' ');
};
