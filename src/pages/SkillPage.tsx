export default function SkillPage() {
  return (
    <div className="skillPage" id="card">
      <div className="description">
        <div className="title">
          <p>Навыки</p>
        </div>

        <div className="content">
          <p>За время работы на фрилансе я

            ~ Написал около 10 интернет-магазинов с использование MERN включая создание дизайна и деплой на хост

            ~ Писал чаты на Node, websocket, применяя WebRTC

            ~ Дорабатывал проекты на Node, React с внедрением систем монетизации, oauth, доработки бизнес-логики на redux

            ~ использовал typescript, SCSS, SSR, react-native</p>

            <br />

            <p>За время работы в компаниях я создал с нуля 4 проекта, которые используются в московском метро и РЖД
            </p>
          <p>Также во время работы изучал паттерны, ООП, Solid, принцип работы reconciliation React, babel, webpack, ES6, принцип работы eventloop и SSR</p>
        </div>
      </div>

      <div className="wrapp">
        <div className="title">
          <p>Ключевые навыки</p>
        </div>
        <div className="element">
          <p>typescript/javascript</p>
          <p>React/redux</p>
          <p>vite/webpack</p>
          <p>Node.js</p>
          <p>FSD</p>
          <p>SASS/SCSS</p>
          <p>ООП/Паттерны</p>
          <p>Docker</p>
        </div>
      </div>

      <div className="wrapp">
        <div className="title">
          <p>Дополнительные навыки</p>
        </div>
        <div className="element">
          <p>MongoDB</p>
          <p>Express</p>
          <p>Linux/Nginx</p>
          <p>UI/UX</p>
          <p>Photoshop</p>
          <p>Figma</p>
          <p>Английский - B1</p>
        </div>
      </div>
    </div>
  )
}
