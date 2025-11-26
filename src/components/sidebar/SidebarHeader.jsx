import avatarImg from '../../assets/avatar.jpg'

const SidebarHeader = () => {
    return (
        <div className="sidebar-top">
            <div className="name-block">
                <div className="badge">
                    <span className="badge-dot"></span>
                    OPEN TO OPPORTUNITIES
                </div>
                <h1>Igor Vilghelm</h1>
                <h2>Web Team Lead &amp;<br/> Full-Stack Developer</h2>
                <div className="location">
                    <span>LT</span>
                    Vilnius, Lithuania · EU
                </div>
            </div>
            <div className="avatar">
                <img src={avatarImg} alt="Igor V."/>
            </div>
        </div>
    )
}

export default SidebarHeader
