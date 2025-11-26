const ProjectsSection = () => (
    <section id="projects" className="section">
        <div className="section-header">
            <div className="section-title">Projects</div>
            <div className="section-subtitle">Highlights</div>
        </div>
        <div className="section-body projects-grid">
            <article className="project-card">
                <div className="project-title-row">
                    <div className="project-title">Smart Metering Web Platform</div>
                    <div className="project-tag">Enterprise</div>
                </div>
                <div>
                    Web interface for automated commercial energy accounting: complex
                    dashboards, reporting, meter management, alarm monitoring.
                </div>
                <div className="project-links">
                    Stack: React, Redux, PHP (Phalcon), Oracle, MariaDB, Docker, Jenkins
                </div>
            </article>

            <article className="project-card">
                <div className="project-title-row">
                    <div className="project-title">SCADA-like GIS module</div>
                    <div className="project-tag">Visualization</div>
                </div>
                <div>
                    Custom SVG-based map module with live status, topology visualizations
                    and interactive elements for energy networks.
                </div>
                <div className="project-links">
                    Stack: React, SVG, custom config engine
                </div>
            </article>

            <article className="project-card">
                <div className="project-title-row">
                    <div className="project-title">Mobile app (React Native)</div>
                    <div className="project-tag">Mobile</div>
                </div>
                <div>
                    Companion app for Smart Metering platform: field data view, alerts and
                    basic control functions.
                </div>
                <div className="project-links">
                    Stack: React Native, Expo, REST API
                </div>
            </article>
        </div>
    </section>
)

export default ProjectsSection
