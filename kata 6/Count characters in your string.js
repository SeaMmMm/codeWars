function count(string) {
  const obj = {};

  for (const str of string) {
    if (str in obj) obj[str]++;
    else {
      obj[str] = 1;
    }
  }
  return obj;
}
