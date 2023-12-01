import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../states/store'
import { changeValue } from '../../states/UI/UISlice'

const OpacitySlide = () => {
    const backGroundTransperent = useSelector((state: RootState) => state.UI.backGroundTransperent)
    const dispatch = useDispatch()

    const changeOpacity = (value:string) => {
        dispatch(changeValue({type: 'transperent', value:value}))
    }

    return (
        <div className="opacitySlide">
            <div className="title">
                <p>Затемнение фона</p>
            </div>
            <div className="sliderUI">
                <p>0%</p>
                <input type="range" min="0" max="100" step="1" defaultValue={backGroundTransperent} onChange={(value) => changeOpacity(value.target.value)}/>
                <p>100%</p>
            </div>
        </div>
    )
}

export default OpacitySlide
