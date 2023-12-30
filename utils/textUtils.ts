// replace single-letter words from being left alone at the end of the line
// this is especially important in Czech language, where it is considered
// a typography error
export function preventSingleLetterOrphans (input: string): string {
  if (input) {
    // single-letter words (CS language)
    input = input.replace(' a ', ' a\u00A0')
    input = input.replace(' i ', ' i\u00A0')
    input = input.replace(' k ', ' k\u00A0')
    input = input.replace(' o ', ' o\u00A0')
    input = input.replace(' s ', ' s\u00A0')
    input = input.replace(' v ', ' v\u00A0')
    input = input.replace(' z ', ' z\u00A0')
    // other special symbols
    input = input.replace(' - ', ' -\u00A0')
    input = input.replace(' č. ', ' č.\u00A0')
    input = input.replace(' %', '\u00A0%')
    input = input.replace(' Sb.', '\u00A0Sb.')
  }
  return input
}
