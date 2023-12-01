const ToBase64 = (e:any) => {
    const file = e.target.files[0]
    console.log(file)
    getBase64(file).then(base64 => {
        localStorage["fileBase64"] = base64
        console.debug("file stored", base64)
    })
}

const getBase64 = (file:any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
        reader.readAsDataURL(file)
    })
}

export default { ToBase64 }