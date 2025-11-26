import SidebarHeader from './sidebar/SidebarHeader.jsx'
import SidebarContacts from './sidebar/SidebarContacts.jsx'
import SidebarStrengths from './sidebar/SidebarStrengths.jsx'
import SidebarLanguages from './sidebar/SidebarLanguages.jsx'
import SidebarTechStack from './sidebar/SidebarTechStack.jsx'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <SidebarHeader />
            <SidebarContacts />
            <SidebarStrengths />
            <SidebarLanguages />
            <SidebarTechStack />
        </aside>
    )
}

export default Sidebar
