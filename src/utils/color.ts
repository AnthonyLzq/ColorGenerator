const componentToHex = (c: number) => {
  const hex = c.toString(16)

  return hex.length === 1 ? `0${hex}` : hex
}

const rgbToHex = (r: number, g: number, b: number) =>
  `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`

export { componentToHex, rgbToHex }
