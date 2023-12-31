import ReactLogo from "../svg/ReactLogo"
import ReduxLogo from "../svg/ReduxLogo"
import ViteLogo from "../svg/ViteLogo"
import TypescriptLogo from "../svg/TypescriptLogo"

import ScssLogo from "../svg/ScssLogo"
import NodeLogo from "../svg/NodeLogo"
import WebSoketLogo from "../svg/WebSoketLogo"



export default function AboutPage() {
  return (
    <div className="aboutPage">
      <div className="description" id="card">
        <div className="title">
          <p>Что то о сайте</p>
        </div>

        <div className="content">
          <p>The recent surge in the price of Bitcoin, the world's largest cryptocurrency, has sparked renewed interest in the digital asset. As of August 2021, Bitcoin's value has exceeded $50,000, marking a new all-time high. This meteoric rise has been attributed to various factors, including increased institutional adoption, growing mainstream acceptance, and the ongoing COVID-19 pandemic's impact on traditional financial markets.</p>
          <p>The recent surge in the price of Bitcoin, the world's largest cryptocurrency, has sparked renewed interest in the digital asset. As of August 2021, Bitcoin'</p>
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
