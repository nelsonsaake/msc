import { twFSs } from './tw_font_sizes'

export function resolveFontSize(className: string): React.CSSProperties | undefined {
  if (twFSs[className]) return twFSs[className]

  const dynamicMatch = className.match(/^text-\[(\d+)px\]$/)
  if (dynamicMatch) {
    const px = parseInt(dynamicMatch[1], 10)
    return { fontSize: px }
  }

  return undefined
}