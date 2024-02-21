function encodeResistorColors(ohmsString) {
  const obj = {
    0: 'black',
    1: 'brown',
    2: 'red',
    3: 'orange',
    4: 'yellow',
    5: 'green',
    6: 'blue',
    7: 'violet',
    8: 'gray',
    9: 'white',
  }

  const [val, _] = ohmsString.split(' ')
  const ohArr = []
  let ohms = val.slice(0, val.length - 1)

  if (val.slice(-1) === 'k') ohms = (ohms * 1e3).toString()
  if (val.slice(-1) === 'M') ohms = (ohms * 1e6).toString()
  if (Number(!isNaN(val.slice(-1)))) ohms = val

  console.log(ohms)

  const valueArr = ohms.slice(0, 2).split(''),
    band = ohms.slice(2).length

  console.log(valueArr, band)

  for (const value of valueArr) {
    ohArr.push(obj[value])
  }

  ohArr.push(obj[band], 'gold')

  return ohArr.join(' ')
}
