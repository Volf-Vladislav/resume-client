import React from "react"

import Telegram from "../shared/svg/Telegram"
import CloseIcon from "../shared/svg/CloseIcon"

export default function ChatWidget() {

  const [isOpen, setIsOpen] = React.useState(false)

  const changeChatVisibility = () => setIsOpen(!isOpen)

  return (
    <div className="chatWidget" id={isOpen ? 'opened' : 'closed'} >

      <div className="statusBar">
        <div className="textBox">
          <p className="username">@valentineweb</p>
          <p className="userStatus">WSS chat</p>
        </div>

        <div className="closeButton" onClick={changeChatVisibility}>
          <CloseIcon width='33px' color="#3f3f3f" />
        </div>

      </div>

      <div className="messages">

      </div>

      <div className="messagesInput">

        <div className="textInput">
          <input type='search' placeholder="message" />
        </div>

        <div className="sendMessageButton">
          <Telegram width='33px' color="var(--activeColor)" />
        </div>
      </div>

      <div className="chatIcon" onClick={changeChatVisibility}>
        <Telegram width='50px' color="var(--activeColor)" />
      </div>
    </div>
  )
}
