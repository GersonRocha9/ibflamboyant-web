export function limitCharacters(text: string) {
  if (text.length > 80) {
    return text.slice(0, 80) + '...'
  }
  return text
}
