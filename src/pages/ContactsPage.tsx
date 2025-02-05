import { useState } from 'react'

import Button from "../shared/components/Button"
import DiscordLogo from "../shared/svg/DiscordLogo"

import Email from "../shared/svg/Email"
import Github from "../shared/svg/Github"
import Phone from "../shared/svg/Phone"
import Telegram from "../shared/svg/Telegram"
import VkLogo from "../shared/svg/VkLogo"


export default function ContactsPage() {
  const [isCopied1, setIsCopied1] = useState('copy')
  const [isCopied2, setIsCopied2] = useState('copy')
  const [isCopied3, setIsCopied3] = useState('copy')

  const [isCopied4, setIsCopied4] = useState('copy')
  const [isCopied5, setIsCopied5] = useState('copy')
  const [isCopied6, setIsCopied6] = useState('copy')

  const nullState = () => {
    setIsCopied1('copy')
    setIsCopied2('copy')
    setIsCopied3('copy')
    setIsCopied4('copy')
    setIsCopied5('copy')
    setIsCopied6('copy')
  }


  const copyContact = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {

      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="contacts" >
      <div className="wrapp" id="card">
        <div className="contactsType">
          <p>Основные</p>
        </div>
        <div className="element">
          <div className="title">
            <Telegram width='30px' color="var(--titleText)" />
          </div>
          <div className="contact">
            <a>@valentineweb</a>
          </div>

          <Button text={isCopied1} action={() => {
            copyContact('@valentineweb')
            nullState()
            setIsCopied1('copied')
          }} />
        </div>

        <div className="element">
          <div className="title">
            <Phone width='30px' color="var(--titleText)" />
          </div>
          <div className="contact">
            <a>+7 (916) 006 2001</a>
          </div>

          <Button text={isCopied2} action={() => {
            copyContact('+79160062001')
            nullState()
            setIsCopied2('copied')
          }} />
        </div>

        <div className="element">
          <div className="title">
            <Email width='30px' color="var(--titleText)" />
          </div>
          <div className="contact">
            <a>therealmiyutreaz@gmail.com</a>
          </div>

          <Button text={isCopied3} action={() => {
            copyContact('therealmiyutreaz@gmail.com')
            nullState()
            setIsCopied3('copied')
          }} />
        </div>
      </div>

      <div className="wrapp" id="card">
        <div className="contactsType">
          <p>Дополнительные</p>
        </div>
        <div className="element">
          <div className="title">
            <Github width='30px' color="var(--titleText)" />
          </div>
          <div className="contact">
            <a>github</a>
          </div>

          <Button text={isCopied4} action={() => {
            copyContact('Volf-Vladislav')
            nullState()
            setIsCopied4('copied')
          }} />
        </div>

        <div className="element">
          <div className="title">
            <DiscordLogo width='30px' color="var(--titleText)" />
          </div>
          <div className="contact">
            <a>zxcghoul322</a>
          </div>

          <Button text={isCopied5} action={() => {
            copyContact('zxcghoul322')
            nullState()
            setIsCopied5('copied')
          }} />
        </div>

        <div className="element">
          <div className="title">
            <VkLogo width='30px' color="var(--titleText)" />
          </div>
          <div className="contact">
            <a>vvolf1</a>
          </div>

          <Button text={isCopied6} action={() => {
            copyContact('vvolf1')
            nullState()
            setIsCopied6('copied')
          }} />
        </div>
      </div>
    </div>
  )
}
