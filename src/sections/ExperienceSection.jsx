const ExperienceSection = () => (
    <section id="experience" className="section">
        <div className="section-header">
            <div className="section-title">Experience</div>
            <div className="section-subtitle">Selected roles</div>
        </div>
        <div className="section-body experience-list">
            <div className="exp-item">
                <div className="exp-meta">
                    <div className="exp-role">
                        Web Team Lead &amp; Full-Stack Developer
                    </div>
                    <div className="exp-company">UAB Sigmatelas · Vilnius</div>
                    <div>2024 – Present</div>
                    <div className="exp-tags">
                        <span className="exp-tag">Smart Metering</span>
                        <span className="exp-tag">IoT</span>
                        <span className="exp-tag">Architecture</span>
                    </div>
                </div>
                <div className="exp-body">
                    <ul>
                        <li>
                            Leading development of a large-scale Smart Metering / Automated
                            Commercial Energy Accounting platform including backend services, web interface, and mobile app.
                        </li>
                        <li>
                            End-to-end web application development (frontend/backend architecture, API design, optimization).
                        </li>
                        <li>
                            Implementing data-intensive modules, GIS / SCADA-like SVG
                            visualizations, dashboards and reporting.
                        </li>
                        <li>
                            Developing and optimizing API endpoints for Oracle &amp; MariaDB,
                            integrating with Data Acquisition Server.
                        </li>
                        <li>
                            Configuring build &amp; deployment pipelines (Jenkins, Docker),
                            coordinating work of other developers.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="exp-item">
                <div className="exp-meta">
                    <div className="exp-role">Full-Stack WEB Developer</div>
                    <div className="exp-company">UAB Sigmatelas · Vilnius</div>
                    <div>2016 - 2024</div>
                    <div className="exp-tags">
                        <span className="exp-tag">Enterprise WEB apps</span>
                        <span className="exp-tag">Smart metering</span>
                        <span className="exp-tag">Backend APIs</span>
                        <span className="exp-tag">IoT</span>
                    </div>
                </div>
                <div className="exp-body">
                    <ul>
                        <li>
                            Developing and supporting a Smart Metering system for Automated Commercial Energy Accounting, including backend services, web application, and data visualization modules.
                        </li>
                        <li>Designing and implementing frontend & backend architecture and logic</li>
                        <li>Building and maintaining our internal component framework using React & Redux</li>
                        <li>Developing UI forms, app modules, and reusable components</li>
                        <li>Creating REST endpoints for communication with Oracle DB and Data Acquisition Server</li>
                        <li>Optimizing performance and developing modules for Big Data and IoT integration</li>
                        <li>Designing data structures and implementing data analysis, pivoting, and visualization logic</li>
                        <li>Building SVG-based “SCADA”-like scheme viewer/editor with real-time data binding in React</li>
                        <li>Integrating and customizing third-party npm components (grids, charts, etc.)</li>
                        <li>Automating builds and deployments using Jenkins (custom pipelines, CI/CD)</li>
                        <li>Providing technical consultation and support for team members</li>
                        <li>Occasionally managing web servers (IIS / Apache) and analyzing Oracle SQL queries, functions, and procedures</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
)

export default ExperienceSection
