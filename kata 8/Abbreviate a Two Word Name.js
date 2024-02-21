function abbrevName(name) {
  return (
    name.slice(0, 1).toUpperCase() +
    '.' +
    name.split(' ')[1].slice(0, 1).toUpperCase()
  )
}
