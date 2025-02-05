import EmptyImage from '../svg/EmptyImage'

import cosmos from '../../images/cosmos.jpg'
import mounth from '../../images/mounth.jpg'
import { setLocalStorageItem } from '../custom-hooks/setLocalStorageItem'


const DefaultBackground = () => {
    const changeBackground = (image: string) => {
        if(image == 'default') {
            setLocalStorageItem('background', '')
        }
        
        else setLocalStorageItem('background', image)
    }

    return (
        <div className="defaultBg">
            <div className="title">
                <p>Выбрать один из стандартных</p>
            </div>

            <div className="imagesContainer">
                <div className="defaultImage" onClick={() => changeBackground('default')}>
                    <EmptyImage width='70px' color='var(--buttonText)' />
                </div>
                <div className="defaultImage" onClick={() => changeBackground(cosmos)}>
                    <img src={cosmos} alt="cosmos" />
                </div>
                <div className="defaultImage" onClick={() => changeBackground(mounth)}>
                    <img src={mounth} alt="mounth" />
                </div>
            </div>
        </div>
    )
}

export default DefaultBackground
