const LABELS = {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
}

const TopNav = ({activeSection, onNavClick, sections, theme, onToggleTheme}) => {
    const isLight = theme === 'light'

    return (
        <div className="top-nav">
            <button
                className="nav-pill"
                type="button"
                onClick={onToggleTheme}
                title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
                style={{marginRight: 'auto'}}
            >
                {isLight ? '🌙 Dark mode' : '☀️ Light mode'}
            </button>

            {sections.map((section) => (
                <button
                    key={section}
                    className={'nav-pill' + (activeSection === section ? ' active' : '')}
                    onClick={() => onNavClick(section)}
                >
                    {LABELS[section] || section}
                </button>
            ))}
        </div>
    )
}

export default TopNav
