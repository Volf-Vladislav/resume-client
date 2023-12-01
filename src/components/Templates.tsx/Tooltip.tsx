import React from 'react'

interface PropsTypes {
    text: string
    position: Array<string>
    id: string
}

export default function Tooltip(props: PropsTypes) {
    const [visible, setVisible] = React.useState(localStorage.getItem('userID') == null)

    const position = {
        top: props.position[0],
        left: props.position[1],
        bottom: props.position[2],
        right: props.position[3]
    }
    return (
        <>
            {visible ? <div
                className="tooltip"
                id={props.id}
                onClick={() => setVisible(false)}
                style={position}
            >
                < div className="information">
                    <p>{props.text}</p>
                </div >

                <div className="closeText">
                    <p>Нажмите чтобы закрыть</p>
                </div>
            </div > : <></>
            }
        </>

    )
}
