import React from 'react';
import Logo from '../../../assets/img/hostgator-logo.svg'
import './Header.scss'

const Header = () => {
  return (
    <header className="menu">
			<div className="container-menu">
				<img className="logo" src={Logo} alt="HostGator Logo" />
			</div>
    </header>
  )
}

export default Header;