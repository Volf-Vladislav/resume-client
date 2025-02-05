import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../states/store'

import { flipState } from '../states/UI/UISlice'

import MenuElement from './templates/MenuElement'

import Contacts from '../svg/Contacts'
import Info from '../svg/Info'
import MenuIcon from '../svg/Menu'
import Person from '../svg/Person'

import Skill from '../svg/Skill'
import Works from '../svg/Works'
import Exit from '../svg/Exit'

import SiteRoutes from '../pages/SiteRoutes'

const Menu = () => {
    const isOpen = useSelector((state: RootState) => state.UI.isMenuOpened)
    const dispatch = useDispatch()

    return (
        <nav className='leftMenu' id={isOpen ? 'openMenu' : 'closedMenu'}>
            <div className="title">
                <div className="logo"><p>WOLFAPP</p></div>
                <div className='menuButton' onClick={() => dispatch(flipState({type: 'menu'}))}>
                    {
                        isOpen ? <Exit width='34px' color='var(--buttonText)' /> : <MenuIcon width='34px' color='var(--buttonText)' />
                    }
                </div>
            </div>

            <div className="navigation">
                <MenuElement text='О себе' Icon={<Person width={'24px'} />} link={SiteRoutes.main} />
                <MenuElement text='Навыки' Icon={<Skill width={'26px'} />} link={SiteRoutes.skills} />
                <MenuElement text='Портфолио' Icon={<Works width={'26px'} />} link={SiteRoutes.works} />
                <MenuElement text='Контакты' Icon={<Contacts width={'26px'} />} link={SiteRoutes.contacts} />
                {/* <MenuElement text='Биография' Icon={<Book width={'28px'} />} link={SiteRoutes.self} /> */}
                <MenuElement text='О сайте' Icon={<Info width={'26px'} />} link={SiteRoutes.about} />
            </div>
        </nav>
    )
}

export default Menu
