interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget
}

const ToBase64 = (e:HTMLInputEvent) => {
    if (!e.target.files) return

    const file = e.target.files[0]
    getBase64(file).then(base64 => {
        localStorage["fileBase64"] = base64
        console.debug("file stored", base64)
    })
}

const getBase64 = (file:File) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
        reader.readAsDataURL(file)
    })
}

export default { ToBase64 }