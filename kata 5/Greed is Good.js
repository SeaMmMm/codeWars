const mul = (time, value) => {
  const once = (num) => {
    if (num === 1) return 100;
    if (num === 5) return 50;

    return 0;
  };

  const treble = (num) => {
    if (num > 6) return 0;
    else return num === 1 ? 1000 : num * 100;
  };

  if (time === 1) return once(value);
  if (time === 3) return treble(value);
};

function score(dice) {
  let result = 0,
    temp = 0,
    sign = [],
    midArr = [],
    l = 0,
    r = 0;

  while (r <= dice.length) {
    if (dice[l] !== dice[r] || temp === 3) {
      result += mul(temp, dice[l]) || 0;
      if (temp === 3) sign.push(dice[l]);
      temp = 0;
      l = r;
    } else {
      r++;
      temp++;
    }
  }

  for (let i = 0; i < dice.length; i++) {
    midArr[dice[i]] = (midArr[dice[i]] || 0) + 1;
  }

  for (let i = 0; i < midArr.length; i++) {
    if (midArr[i] === 3) {
      if (sign.includes(i)) continue;
      else {
        result += mul(3, i);
      }
    }
  }

  return result;
}
