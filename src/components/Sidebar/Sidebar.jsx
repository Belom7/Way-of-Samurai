import React from 'react';
import Classes from './Sidebar.module.css';
import Nav from './Nav/Nav';
import BlockFriends from './BlockFriends/BlockFriends'

function Sidebar (props) {
    let sidebar = props.state.navbar.map (nav => <Nav id={nav.id} name={nav.name}/>);
    let blockFriends = props.state.blockFriends.map (bf =>  <BlockFriends id={bf.id} img={bf.img} name={bf.name}/>)

    return (
        <div className={Classes.sidebar}>
            <div>
                {sidebar}
            </div>
            <div className={Classes.blockFriends}>
                {blockFriends}
            </div>
        </div>
    )
}

export default Sidebar;