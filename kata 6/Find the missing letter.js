function findMissingLetter(array) {
  let codeAt = array[0].charCodeAt(0);

  for (let i = 1; i < array.length; i++) {
    const md = array[i].charCodeAt(0);
    if (md - codeAt !== 1) return String.fromCharCode(codeAt + 1);
    else codeAt = md;
  }
}
