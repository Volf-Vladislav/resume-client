import { saveImage } from '../Helpers/FileHelper'

import Image from '../../svg/Image'

const ImageUploader = () => {
    const onDropHandler = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        let files = [...e.dataTransfer.files]
        console.log(files[0])

    }

    return (
        <div className="customBg">
            <div className="title">
                <p>Или загрузить свой вариант</p>
            </div>
            <div className="dragAndDrop" onDragEnter={e => onDropHandler(e)}>
                <div className="dndContent">
                    <Image width='40px' color='var(--buttonText)' />
                    <div className="information">
                        <p>Перетащите картинку</p>
                        <div className="openImage">
                            <p>или </p>
                            <input
                                type="file"
                                id="imageExplorer"
                                onChange={(e) => {
                                    saveImage(e)
                                    e.target.value = ''
                                }}
                            />
                        </div>
                    </div>

                    <div className="supportTypes">
                        <p>форматы: JPEG, JPG, PNG</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ImageUploader
