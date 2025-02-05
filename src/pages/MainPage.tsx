import ES6Logo from "../svg/ES6Logo"
import Github from "../svg/Github"
import NextjsLogo from "../svg/NextjsLogo"
import NodeLogo from "../svg/NodeLogo"
import Phone from "../svg/Phone"
import ReactLogo from "../svg/ReactLogo"
import ReduxLogo from "../svg/ReduxLogo"
import ScssLogo from "../svg/ScssLogo"
import Telegram from "../svg/Telegram"
import TypescriptLogo from "../svg/TypescriptLogo"

import avatar from '../media/me.jpg'

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="selfInfo" id="card">
        <div className="avatar">
          <div className="image">
            <img src={avatar} alt="" />
          </div>
          <div className="contacts">
            <div className="element">
              <Telegram width='21px' color="var(--activeColor)" />
              <a href="">@valentineweb</a>
            </div>

            <div className="element">
              <Phone width='21px' color="var(--activeColor)" />
              <a href="">+7 (916) 006 2001</a>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="name">Владислав Вольф</div>
          <div className="job">React Developer</div>
          <div className="expereance">Oпыт работы 4 года на фрилансе. Предыдущий опыт: разрабатка Веб приложений с использованием Mongo, Express, React, Node.
          </div>
          <div className="city">Россия, Москва</div>
        </div>

        <div className="description">
          <p>Привет! Меня зовут Владислав, и я являюсь фрилансером в области веб-разработки. В течение моей карьеры я получил ценный опыт коммуникации с заказчиками и наработал умение эффективно оценивать свои силы для достижения поставленных целей в строго оговоренный срок. Часто мне приходилось брать ответственность за весь цикл выполнения проекта - от идеи до реализации. Буду рад применить свой опыт и умения в новом проекте, и внести свою лепту в развитие вашей компании.</p>
        </div>
      </div>

      <div className="hrInfo" id="card">

        <div className="article">
          <div className="title">
            <p>Образование</p>
          </div>
          <div className="name">
            <p>ITHUB College</p>
          </div>

          <div className="optional">
            <p>Программист, среднее-специальное</p>
          </div>
          <div className="date">
            <p>Москва, с 05.2019 по 05.2020</p>
          </div>
        </div>

        <div className="article">
          <div className="name">
            <p>Колледж связи 54</p>
          </div>
          <div className="optional">
            <p>Программист, среднее-специальное</p>
          </div>
          <div className="date">
            <p>Москва, с 05.2020 по 05.2021</p>
          </div>
        </div>

        <div className="article">
          <div className="name">
            <p>Frontend-разработчик</p>
          </div>
          <div className="optional">
            <p>Лайка Софт, Москва (lk-soft.ru)</p>
          </div>
          <div className="date">
            <p>Март 2024 — Сентябрь 2024 (7 месяцев)</p>
          </div>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <ReactLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт в разработке веб-приложений 4 года</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <NodeLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт создания собственных REST API 3 года</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <TypescriptLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт в использовании typescript 1 год</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <ReduxLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт в использовании Redux для создании бизнес-логики 4 года</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <ScssLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт в использовании препроцессоров 2 года</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <Github width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт работы с git 4 года</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <ES6Logo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Использование ES6 на протяжении 4 лет</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <NextjsLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт в оптимизации SEO через SSR 8 месяцев</p>
        </div>
      </div>

    </div>
  )
}

export default MainPage