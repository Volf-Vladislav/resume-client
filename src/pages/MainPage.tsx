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

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="selfInfo" id="card">
        <div className="avatar">
          <div className="image">
            <img src="https://app-time.ru/uploads/games/cover/2023/08/01082023134608.jpg" alt="" />
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
          <div className="expereance">The recent surge in the price of Bitcoin, the world's largest cryptocurrency, has sparked renewed interest in the digital asset. As of August 2021, Bitcoin's value has Bitcoin's value has exceeded</div>
          <div className="city">Россия, Москва</div>
        </div>

        <div className="description">
          <p>The recent surge in the price of Bitcoin, the world's largest cryptocurrency, has sparked renewed interest in the digital asset. As of August 2021, Bitcoin's value has exceeded $50,000, marking a new all-time high. This meteoric rise has been attributed to various factors, including increased institutional adoption, growing mainstream acceptance, and the ongoing COVID-19 pandemic.</p>
        </div>
      </div>

      <div className="hrInfo" id="card">
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
        <div className="name">
          <p>Колледж связи 54</p>
        </div>

        <div className="optional">
          <p>Программист, среднее-специальное</p>
        </div>
        <div className="date">
          <p>Москва, с 05.2020 по 05.2021</p>
        </div>

        <div className="title">
          <p>Военный билет</p>
        </div>
        <div className="name">
          <p>Лаборант, категория Б</p>
        </div>
        <div className="optional">
          <p>04.07.2022 - 04.07.2023</p>
        </div>
      </div>


      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <ReactLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт в разработке веб-приложений 1 год</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <NodeLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт создания собственных REST API 8 месяцев</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <TypescriptLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт в использовании typescript 4 месяца</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <ReduxLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт в использовании Redux для создании бизнес-логики 6 месяцев</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <ScssLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт в использовании препроцессоров 7 месяцев</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <Github width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт работы с git 2 года</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <ES6Logo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Использование ES6 на протяжении 1 года</p>
        </div>
      </div>

      <div className="skillInfo" id="card">
        <div className="skillLogo">
          <NextjsLogo width='60px' color="var(--defaultText)" />
        </div>
        <div className="title">
          <p>Опыт в оптимизации SEO через SSR 5 месяцев</p>
        </div>
      </div>

    </div>
  )
}

export default MainPage