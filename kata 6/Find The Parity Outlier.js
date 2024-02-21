function findOutlier(integers) {
  const obj = {
    odd: 0,
    ent: 0,
    oddVal: 0,
    entVal: 0,
  }
  for (const val of integers) {
    if (val % 2) {
      obj['odd']++
      obj['oddVal'] = val
    } else {
      obj['ent']++
      obj['entVal'] = val
    }

    if (obj['odd'] === 1 && obj['ent'] > 1) return obj['oddVal']
    if (obj['ent'] === 1 && obj['odd'] > 1) return obj['entVal']
  }
}
