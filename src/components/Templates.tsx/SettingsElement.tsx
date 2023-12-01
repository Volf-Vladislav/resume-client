interface PropsType {
    text: string,
    UIElement: JSX.Element,
    action?: () => void
}

const SettingsElement = (props:PropsType) => {
    return (
        <div className="element">
            <div className="settingsDescription">
                <p>{props.text}</p>
            </div>

            <div className="settingsButton" onClick={() => props.action ? props.action() : () => {}}>
                {props.UIElement}
            </div>
        </div>
    )
}

export default SettingsElement
