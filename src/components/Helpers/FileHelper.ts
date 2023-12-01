import { setLocalStorageItem } from "../Hooks/setLocalStorageItem"

export const saveImage = (e: any) => {
    try {
        const file = e.target.files[0]
        const file64 = getBase64(file) ?? file
        file64.then((base64: any) => {
            setLocalStorageItem('background', `${base64}`)
        })
    } catch (error) {
        console.log(error)
    }
}

export const getBase64 = (file: any) => {
    try {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result)
            reader.readAsDataURL(file)
            reader.onerror = (error) => reject(error)
        })
    } catch (error) {
        console.log(error)
    }

}

