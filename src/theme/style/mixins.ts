export const colorOpacityMixin = (color: string, opacity = 1) => {
  const rgbMatch = color.match(/\b\d+\b/g)
  const hexMatch = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)
  const rgbaMatch = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i)
  const hslaMatch = color.match(/^hsla?\(([\d.]+),\s*([\d.]+)%,\s*([\d.]+)%,?\s*([\d.]+)?\)$/i)

  if (rgbMatch) {
    const [r, g, b] = rgbMatch.map((value) => parseInt(value, 10))
    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }

  if (hexMatch) {
    const [, r, g, b] = hexMatch
    return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${opacity})`
  }

  if (rgbaMatch) {
    const [, r, g, b, a = 1] = rgbaMatch.map(parseFloat)
    return `rgba(${r}, ${g}, ${b}, ${a * opacity})`
  }

  if (hslaMatch) {
    const [, h, s, l, a = 1] = hslaMatch.map(parseFloat)
    return `hsla(${h}, ${s}%, ${l}%, ${a * opacity})`
  }

  return color
}
