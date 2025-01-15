function humanReadable(seconds) {
  let H = Math.floor(seconds / 60 / 60);
  let M = Math.floor(seconds / 60 - H * 60);
  let S = seconds % 60;

  return `${H >= 10 ? H : `0${H}`}:${M >= 10 ? M : `0${M}`}:${
    S >= 10 ? S : `0${S}`
  }`;
}

console.log(humanReadable(45296));
