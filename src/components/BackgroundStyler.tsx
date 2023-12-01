import { useDispatch } from 'react-redux'
import { flipState } from '../states/UI/UISlice'

import OpacitySlide from './particles/OpacitySlide'
import DefaultBackground from './particles/DefaultBackground'
import ImageUploader from './particles/ImageUploader'


const BackgroundStyler = () => {
    const dispatch = useDispatch()

    const closeUI = () => {
        dispatch(flipState({ type: 'bgStyler' }))
    }

    return (
        <div className="bgStyler" >
            <div className="closeOverlay" onClick={closeUI}></div>
            <div className="stylerUI">
                <DefaultBackground />
                <ImageUploader />
                <OpacitySlide />
            </div>
        </div>

    )
}
export default BackgroundStyler
