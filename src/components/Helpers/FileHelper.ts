import { setLocalStorageItem } from "../hooks/setLocalStorageItem"

export const saveImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
        if (!e.target.files) return

        const file = e.target.files[0]
        const file64 = getBase64(file)
        
        file64.then((base64: any) => {
            setLocalStorageItem('background', `${base64}`)
        })
    } catch (error) {
        console.log(error)
    }
}

const getBase64 = async (file: File) => {
    try {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
            reader.readAsDataURL(file)
        })
    }
    catch (error) {
        console.log(error)
    }

}

