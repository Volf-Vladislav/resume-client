import { useDispatch } from 'react-redux'
import { flipState } from '../app/redux/UI/UISlice'

import OpacitySlide from '../shared/particles/OpacitySlide'
import DefaultBackground from '../shared/particles/DefaultBackground'
import ImageUploader from '../shared/particles/ImageUploader'


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
