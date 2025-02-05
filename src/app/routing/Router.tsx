import { Routes, Route } from "react-router-dom"

import AboutPage from "../../pages/AboutPage"
import ContactsPage from "../../pages/ContactsPage"
import MainPage from "../../pages/MainPage"
import SkillPage from "../../pages/SkillPage"
import WorksPage from "../../pages/WorksPage"
import SiteRoutes from "./SiteRoutes"

const Router = () => {
    return (
        <Routes >
            <Route path={SiteRoutes.main} Component={MainPage} />
            <Route path={SiteRoutes.skills} Component={SkillPage} />
            <Route path={SiteRoutes.works} Component={WorksPage} />
            <Route path={SiteRoutes.contacts} Component={ContactsPage} />
            <Route path={SiteRoutes.about} Component={AboutPage} />
        </Routes >
    )
}

export default Router
