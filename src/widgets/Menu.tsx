import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/redux/store'

import { flipState } from '../app/redux/UI/UISlice'

import MenuElement from '../shared/components/MenuElement'

import Contacts from '../shared/svg/Contacts'
import Info from '../shared/svg/Info'
import MenuIcon from '../shared/svg/Menu'
import Person from '../shared/svg/Person'

import Skill from '../shared/svg/Skill'
import Works from '../shared/svg/Works'
import Exit from '../shared/svg/Exit'

import SiteRoutes from '../app/routing/SiteRoutes'

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
