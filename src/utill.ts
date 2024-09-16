const getDataURL = (file: File) => {
  return new Promise((resolve, _) => {
    const reader = new FileReader()

    reader.addEventListener('load', (event) => {
      resolve(event)
    })
    reader.readAsDataURL(file)
  })
}

export const saveDataURL = async (files: FileList) => {
  for (let i = 0; i < files.length; i++) {
    const file = files.item(i)

    if (file) {
      console.log(await getDataURL(file))
    }
  }
}
