function latestClock(a, b, c, d) {
  const arr = [a, b, c, d]
  let times = []

  // Generate all possible time combinations
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j !== i) {
        for (let k = 0; k < 4; k++) {
          if (k !== i && k !== j) {
            let l = 6 - i - j - k
            times.push(`${arr[i]}${arr[j]}:${arr[k]}${arr[l]}`)
          }
        }
      }
    }
  }

  // Filter out invalid times
  times = times.filter((time) => {
    const [hours, minutes] = time.split(':')
    return hours >= '00' && hours <= '23' && minutes >= '00' && minutes <= '59'
  })

  // Return the latest time
  return times.sort().pop()
}
