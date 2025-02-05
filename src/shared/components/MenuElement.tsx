import { NavLink } from 'react-router-dom'

interface PropsType {
    text: string,
    Icon: JSX.Element,
    link: string
}

const MenuElement = (props: PropsType) => {
    return (
        <NavLink to={props.link} >
            {({ isActive }) => (
                <div className="element" style={isActive ? { borderRight: '2px solid var(--activeColor)' } : {}}>
                    <div className="icon">{props.Icon}</div>
                    <p>{props.text}</p>
                </div>
            )}
        </NavLink>
    )
}

export default MenuElement
