export default function getQueryString(queryObj) {
  return Object.entries(queryObj)
    .filter(([key, value]) => value !== '')
    .map((q) => [q.join('=')])
    .join('&');
}
