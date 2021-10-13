import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Menu, Icon, Link } from 'semantic-ui-react';

const Nav = () => {
    return (
        <Menu icon='labeled'>
            <Menu.Item
            name="home"
            href="/home">
                
                <Icon name='home'/>
            </Menu.Item>

            <Menu.Item
          name='gamepad'
          href="/games"
          //active={activeItem === 'gamepad'}
          //onClick={this.handleItemClick}
        >
            
          <Icon name='gamepad' />
        </Menu.Item>

        <Menu.Item
            name="contact"
            href="/contact">
                <Icon name='users'/>
            </Menu.Item>

        </Menu>
    )
}

export default Nav;