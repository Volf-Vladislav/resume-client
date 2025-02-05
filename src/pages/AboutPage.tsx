import ReactLogo from "../shared/svg/ReactLogo"
import ReduxLogo from "../shared/svg/ReduxLogo"
import ViteLogo from "../shared/svg/ViteLogo"
import TypescriptLogo from "../shared/svg/TypescriptLogo"

import ScssLogo from "../shared/svg/ScssLogo"
import NodeLogo from "../shared/svg/NodeLogo"
import WebSoketLogo from "../shared/svg/WebSoketLogo"



export default function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="description" id="card">
        <div className="title">
          <p>Что то о сайте</p>
        </div>

        <div className="content">
          <p>Верстка на flex + grid, препроцессор SCSS, тип клиет-серверное веб-приложение
            Клиентская часть написана на React + typescript + Redux, сборщик Vite. Серверная часть - вебсокет сервер на Node.js + typescript + ws. Чат работает через telegram бота, который принимает сообщения с клиентской части и отправляет ответ по id пользователя который генерируется при первом запуске клиентской части. Все сохранения(тема, задний фон и тп) работают через кастомный хук и отправляются в localstorage</p>
        </div>
      </div>

      <div className="techInfo" id="card">
        <div className="title">
          <p>Клиентская часть</p>
          <a href="github.com">github.com</a>
        </div>

        <div className="developmentStack">
          <div className="element">
            <ReactLogo width='40px' color="var(--activeColor)" />
            <p>v18.2.0</p>
          </div>
          <div className="element">
            <ViteLogo width='40px' color="var(--activeColor)" />
            <p>v4.4.5</p>
          </div>
          <div className="element">
            <ReduxLogo width='40px' color="var(--activeColor)" />
            <p>v1.9.7</p>
          </div>
          <div className="element">
            <TypescriptLogo width='40px' color="var(--activeColor)" />
            <p>v5.0.2</p>
          </div>
          <div className="element">
            <ScssLogo width='40px' color="var(--activeColor)" />
            <p>v1.68</p>
          </div>
        </div>
      </div>

      <div className="techInfo" id="card">
        <div className="title">
          <p>Серверная часть</p>
          <a href="">github.com</a>
        </div>

        <div className="developmentStack">
          <div className="element">
            <NodeLogo width='40px' color="var(--activeColor)" />
            <p>v18.2.0</p>
          </div>
          <div className="element">
            <WebSoketLogo width='40px' color="var(--activeColor)" />
            <p>v18.2.0</p>
          </div>
          <div className="element">
            <TypescriptLogo width='40px' color="var(--activeColor)" />
            <p>v18.2.0</p>
          </div>
        </div>
      </div>
    </div>
  )
}
