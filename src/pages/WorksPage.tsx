import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/redux/store'
import { flipState } from '../app/redux/UI/UISlice'

import ImageSlider from '../shared/components/ImageSlider'

import chatShort from '../images/portfolio/anonimChat/short.jpg'
import chat1 from '../images/portfolio/anonimChat/1.jpg'
import chat2 from '../images/portfolio/anonimChat/2.jpg'
import chat3 from '../images/portfolio/anonimChat/3.jpg'

import motoring1 from '../images/portfolio/motoring/1.jpg'
import motoring2 from '../images/portfolio/motoring/2.jpg'
import motoring3 from '../images/portfolio/motoring/3.jpg'

import brickside1 from '../images/portfolio/brickside/1.jpg'
import brickide2 from '../images/portfolio/brickside/2.jpg'

export default function WorksPage() {
  const [currentSlides, setCurrentSlides] = useState([''])
  const [currentIndex, setCurrentIndex] = useState(0)

  const dispatch = useDispatch()
  const isSliderOpen = useSelector((state: RootState) => state.UI.isSliderOpen)

  const openSlider = (slides: string[], index: number) => {
    dispatch(flipState({ type: 'slider' }))
    setCurrentSlides(slides)
    setCurrentIndex(index)
  }

  const chat = [chat1, chat2, chat3]
  const motoring = [motoring1, motoring2, motoring3]
  const brickside = [brickside1, brickide2]

  return (
    <div className="worksPage">
      <div className="element" id='card'>
        <div className="title">
          <p>Чат для анонимных рандомных бесед</p>
          <a href="https://anonim-chat.com">anonim-chat.com</a>
        </div>

        <div className="wrapp">
          <div className="description">
            <p>Проект был написан мною на <strong>React-native + Express + MongoDB + Nodejs</strong>.
              Включает в себя 2 серверные и 2 клиентские части.
              В основе чата используются <strong>web-socket server</strong> в котором написан небольшой бот на случай инактива сайта. Серверная часть админа монолит,
              где можно кидать пользователей из списка жалоб в бан по приватному ip(бан происходит на стороне сокет-сервера)
              и менять динамическую информацию на клиентской стороне, добавлять новые языки для ручного перевода сайта. Язык wss - <strong>typescript</strong></p>
          </div>

          <div className="images">
            <img style={{ width: '63%' }} src={chatShort} alt="" onClick={() => openSlider(chat, 0)} />
            <img src={chat2} alt="" onClick={() => openSlider(chat, 1)} />
          </div>
        </div>
      </div>

      <div className="element" id='card'>
        <div className="title">
          <p>Сайт чемпионата автоспорта</p>
          <a href="https://motoring.ru">motoring.ru</a>
        </div>

        <div className="wrapp">
          <div className="description">
            <p>Довольно большой, многомодульный сайт, состоящий из React + redux, WordPress, WooCommerce, Django, PostgreSQL.
              В данном проекте я занимался разработкой личного кабинета для участников на <strong>React + typescript + redux</strong>,
              адаптацией для мобильных устройств и подвязкой данных к серверу. Основным требованием заказчика было использование <strong>
                styled-component</strong> и приглашение пользователей для регистрации только по ссылке-инвайту</p>
          </div>

          <div className="images">
            <img src={motoring1} alt="" onClick={() => openSlider(motoring, 0)} />
            <img style={{ width: '63%' }} src={motoring2} alt="" onClick={() => openSlider(motoring, 1)} />
          </div>
        </div>
      </div>

      <div className="element" id='card'>
        <div className="title">
          <p>Лендинг для строительной компании</p>
          <a href="https://brick-side.ru">brick-side.ru</a>
        </div>

        <div className="wrapp">
          <div className="description">
            <p>Написан на React, в планах переход на e-commerce, мой первый проект в этом году. Инструменты: scss, React, Redux-toolkit, React router dom</p>
          </div>

          <div className="images">
            <img style={{ width: '100%' }} src={brickside1} alt="" onClick={() => openSlider(brickside, 0)} />
          </div>
        </div>
      </div>

      {isSliderOpen ? <ImageSlider slides={currentSlides} initialIndex={currentIndex} /> : <></>}

    </div>

  )
}
