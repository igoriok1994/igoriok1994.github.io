const SidebarContacts = () => {
    const handleDownloadClick = () => {
        alert('Here you can open /cv.pdf or any other file from /public')
    }

    return (
        <div className="contact-block">
            <div className="contact-row">
                <div className="contact-label">Email</div>
                <div>
                    <a href="mailto:igoriok1994@mail.ru">igoriok1994@mail.ru</a>
                </div>
            </div>
            <div className="contact-row">
                <div className="contact-label">GitHub</div>
                <div>
                    <a
                        href="https://github.com/igoriok1994"
                        target="_blank"
                        rel="noreferrer"
                    >
                        github.com/igoriok1994
                    </a>
                </div>
            </div>
            <div className="contact-row">
                <div className="contact-label">LinkedIn</div>
                <div>
                    <a
                        href="https://www.linkedin.com/in/igor-vilghem-8ab819139/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        linkedin.com/in/igor-vilghem
                    </a>
                </div>
            </div>
            {/*<button className="download-btn" onClick={handleDownloadClick}>*/}
            {/*    ⬇ Download PDF CV*/}
            {/*</button>*/}
        </div>
    )
}

export default SidebarContacts
