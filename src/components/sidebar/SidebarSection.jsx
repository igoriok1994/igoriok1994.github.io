const SidebarSection = ({ title, children }) => {
    return (
        <div className="sidebar-section">
            <div className="sidebar-section-title">{title}</div>
            {children}
        </div>
    )
}

export default SidebarSection
