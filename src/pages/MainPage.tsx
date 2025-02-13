import ES6Logo from "../shared/svg/ES6Logo"
import Github from "../shared/svg/Github"
import NextjsLogo from "../shared/svg/NextjsLogo"
import NodeLogo from "../shared/svg/NodeLogo"
import Phone from "../shared/svg/Phone"
import ReactLogo from "../shared/svg/ReactLogo"
import ReduxLogo from "../shared/svg/ReduxLogo"
import ScssLogo from "../shared/svg/ScssLogo"
import Telegram from "../shared/svg/Telegram"
import TypescriptLogo from "../shared/svg/TypescriptLogo"

import avatar from '../images/me.jpg'

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
          <div className="expereance">Oпыт работы 3 года на фрилансе. Предыдущий опыт: разрабатка Веб приложений с использованием Mongo, Express, React, Node.
          </div>
          <div className="city">Россия, Москва</div>
        </div>

        <div className="description">
          <p>Привет! Меня зовут Владислав, и я веб-разработчик. В течение моей карьеры я получил ценный опыт коммуникации с заказчиками и наработал умение эффективно оценивать свои силы для достижения поставленных целей в строго оговоренный срок. Часто мне приходилось брать ответственность за весь цикл выполнения проекта - от идеи до реализации. Буду рад применить свой опыт и умения в новом проекте, и внести свою лепту в развитие вашей компании.</p>
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
            <p>Цифровые технологии и платформы</p>
          </div>
          <div className="date">
            <p>Октябрь 2022 — Декабрь 2023 (1 год 3 месяца)</p>
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
            <p>Март 2024 — ноябрь 2024 (9 месяцев)</p>
          </div>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <ReactLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт в разработке веб-приложений 5 лет</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <NodeLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт создания собственных REST API 5 лет</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <TypescriptLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт в использовании typescript 4 годa</p>
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
          <p>Опыт в использовании препроцессоров 4 года</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <Github width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт работы с git 5 лет</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <ES6Logo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Использование ES6 на протяжении 5 лет</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <NextjsLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт в оптимизации SEO через SSR 2 года</p>
        </div>
      </div>

    </div>
  )
}

export default MainPage