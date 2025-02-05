interface PropsType {
    text: string,
    action: () => void
}

const Button = (props:PropsType) => {
  return (
    <div className="button" onClick={() => props.action()}>
        <a>{props.text}</a>
    </div>
  )
}

export default Button
