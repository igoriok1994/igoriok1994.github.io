import {useState, useEffect} from 'react'
import './index.css'

import Sidebar from './components/Sidebar.jsx'
import TopNav from './components/TopNav.jsx'
import AboutSection from './sections/AboutSection.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'
import ProjectsSection from './sections/ProjectsSection.jsx'

const SECTIONS = ['about', 'experience', 'skills', 'projects']

function App() {
    const [activeSection, setActiveSection] = useState('about')
    const [theme, setTheme] = useState(() => (window.localStorage.getItem('theme') ?? 'dark'))

    useEffect(() => {
        const saved = window.localStorage.getItem('theme')

        if (saved === 'light' || saved === 'dark') {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTheme(saved)
        }
    }, [])

    useEffect(() => {
        console.log('theme: ', theme)
        const root = document.documentElement
        if (theme === 'light') {
            root.setAttribute('data-theme', 'light')
        } else {
            root.removeAttribute('data-theme') // дефолтная тёмная тема
        }
    }, [theme])

    const handleNavClick = (section) => {
        setActiveSection(section)
        const el = document.getElementById(section)
        if (el) {
            el.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';

        window.localStorage.setItem('theme', newTheme);
        setTheme(newTheme)
    }

    return (
        <div className="page">
            <Sidebar/>

            <main>
                <TopNav
                    activeSection={activeSection}
                    onNavClick={handleNavClick}
                    sections={SECTIONS}
                    theme={theme}
                    onToggleTheme={toggleTheme}
                />

                <AboutSection/>
                <ExperienceSection/>
                <SkillsSection/>
                <ProjectsSection/>

                <div className="footer">
                    Built with ♥ and deployed on{' '}
                    <a
                        href="https://pages.github.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub Pages
                    </a>
                </div>
            </main>
        </div>
    )
}

export default App
