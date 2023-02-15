export function toDate (timestamp: string): string {
  if (timestamp) {
    try {
      const y = timestamp.substring(0, 4)
      const m = timestamp.substring(5, 7)
      const d = timestamp.substring(8, 10)
      return `${d.padStart(2, '0')}.${m.padStart(2, '0')}.${y}`
    } catch (error) {
      console.error('unparsable date ' + timestamp)
    }
  }
  return ''
}

export function toDateTime (timestamp: string): string {
  if (timestamp) {
    try {
      const y = timestamp.substring(0, 4)
      const m = timestamp.substring(5, 7)
      const d = timestamp.substring(8, 9)
      const t = timestamp.substring(11, 19)
      return `${t} ${d.padStart(2, '0')}.${m.padStart(2, '0')}.${y}`
    } catch (error) {
      console.error('unparsable date ' + timestamp)
    }
  }
  return ''
}
