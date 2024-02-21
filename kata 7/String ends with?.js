function solution(str, ending) {
  if ((elen = ending.length) > (slen = str.length)) return false

  while (elen >= 0) {
    if (str[slen] === ending[elen]) {
      elen--
      slen--
    } else {
      return false
    }
  }
  return true
}
