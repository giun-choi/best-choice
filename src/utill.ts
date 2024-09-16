export const getDataURL = (file: File): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.addEventListener('load', (event) => {
      const dataURL = event.target.result

      if (typeof dataURL === 'string') {
        resolve(dataURL)
      } else {
        console.error('Failed to convert to "data:url"')
        reject(null)
      }
    })
    reader.readAsDataURL(file)
  })
}
