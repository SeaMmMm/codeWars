/**
 * @description: The Hashtag Generator
 * @param {String} str
 * @return {String | Boolean}
 */
function generateHashtag(str) {
  if (!str.trim().length) return false;

  let result = ['#'];
  const arr = str.split(' ');
  for (const char of arr) {
    if (char === '') continue;

    result.push(char[0].toUpperCase() + char.slice(1));
  }
  result = result.join('');

  return result.length <= 140 ? result : false;
}
