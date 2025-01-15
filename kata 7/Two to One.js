function longest(s1, s2) {
  const arr1 = Array.from(new Set(s1.split('')));
  const arr2 = Array.from(new Set(s2.split('')));
  return Array.from(new Set([...arr1, ...arr2]))
    .sort()
    .join('');
}
