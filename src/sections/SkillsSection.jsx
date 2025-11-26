const SkillsSection = () => (
    <section id="skills" className="section">
        <div className="section-header">
            <div className="section-title">Skills</div>
            <div className="section-subtitle">Tech &amp; leadership</div>
        </div>
        <div className="section-body">
            <p>
                <strong>Core technologies</strong>
            </p>
            <div className="pill-row" style={{ marginBottom: 8 }}>
                <span className="pill">React / Redux</span>
                <span className="pill">JavaScript / TypeScript</span>
                <span className="pill">HTML / CSS</span>
                <span className="pill">Node.js</span>
                <span className="pill">PHP (Phalcon 3/5)</span>
                <span className="pill">REST APIs</span>
            </div>

            <p>
                <strong>Data &amp; backend</strong>
            </p>
            <div className="pill-row" style={{ marginBottom: 8 }}>
                <span className="pill">Oracle</span>
                <span className="pill">MariaDB / MySQL</span>
                <span className="pill">Query optimization</span>
                <span className="pill">Big data visualization</span>
            </div>

            <p>
                <strong>DevOps &amp; tooling</strong>
            </p>
            <div className="pill-row" style={{ marginBottom: 8 }}>
                <span className="pill">Git</span>
                <span className="pill">Jenkins</span>
                <span className="pill">Docker</span>
                <span className="pill">CI/CD pipelines</span>
                <span className="pill">Linux servers basics</span>
            </div>

            <p>
                <strong>Leadership &amp; collaboration</strong>
            </p>
            <div className="pill-row">
                <span className="pill">Leading small teams</span>
                <span className="pill">Code review &amp; mentoring</span>
                <span className="pill">Requirements analysis</span>
                <span className="pill">Architecture decisions</span>
                <span className="pill">Working with non-technical stakeholders</span>
            </div>
        </div>
    </section>
)

export default SkillsSection
