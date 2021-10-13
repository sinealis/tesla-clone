import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

function Header() {
	const [ burgerStatus, setBurgerStatus ] = useState(false);
	const [ scrollNav, setScrollNav ] = useState(false);

	const changeNav = () => {
		if(window.scrollY >= 30) {
			setScrollNav(true)
		} else {
			setScrollNav(false)
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", changeNav)
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<Container scrollNav={scrollNav}>
			<NavLogo to="/" onClick={toggleHome} smooth={true} duration={500} spy={true}>
				<img src="/images/logo.svg" alt="Tesla Logo" />
			</NavLogo>
			<Menu>
				<NavLinks to="models" smooth={true} duration={500} spy={true} exact="true" offset={-64}>Model S</NavLinks>
				<NavLinks to="model3" smooth={true} duration={500} spy={true} exact="true" offset={-64}>Model 3</NavLinks>
				<NavLinks to="modelx" smooth={true} duration={500} spy={true} exact="true" offset={-64}>Model X</NavLinks>
				<NavLinks to="modely" smooth={true} duration={500} spy={true} exact="true" offset={-64}>Model Y</NavLinks>
			</Menu>
			<RightMenu>
				<NavLinks to="accessories" smooth={true} duration={500} spy={true} exact="true" offset={-64}>Shop</NavLinks>
				<NavLinkR to="/signin">Account</NavLinkR>
				<BurgerMenu onClick={() => setBurgerStatus(true)} />
			</RightMenu>
			<BurgerNav show={burgerStatus} >
				<ul>
					<CloseWrapper>
						<CloseMenu onClick={() => setBurgerStatus(false)} />
					</CloseWrapper>
					<li><NavLinks to="#">Existing Inventory</NavLinks></li>
					<li><NavLinks to="#">Used Inventory</NavLinks></li>
					<li><NavLinks to="#">Trade-In</NavLinks></li>
					<li><NavLinks to="#">Test Drive</NavLinks></li>
					<li><NavLinks to="models" smooth={true} duration={500} spy={true} exact="true" offset={-64}>Model S</NavLinks></li>
					<li><NavLinks to="model3" smooth={true} duration={500} spy={true} exact="true" offset={-64}>Model 3</NavLinks></li>
					<li><NavLinks to="modelx" smooth={true} duration={500} spy={true} exact="true" offset={-64}>Model X</NavLinks></li>
					<li><NavLinks to="modely" smooth={true} duration={500} spy={true} exact="true" offset={-64}>Model Y</NavLinks></li>
					<li><NavLinks to="#">Cybertruck</NavLinks></li>
					<li><NavLinks to="#">Roadster</NavLinks></li>
					<li><NavLinks to="#">Semi</NavLinks></li>
					<li><NavLinks to="#">Charging</NavLinks></li>
					<li><NavLinks to="#">Powerwall</NavLinks></li>
					<li><NavLinks to="#">Find Us</NavLinks></li>
					<li><NavLinks to="#">Support</NavLinks></li>
					<li><NavLinks to="#">Investor Relations</NavLinks></li>
				</ul>
			</BurgerNav>
		</Container>
	)
}

export default Header;

const Container = styled.div`
	width: 100%;
	height: 4rem;
	background: ${({scrollNav}) => (scrollNav ? "#f8f8f8" : "transparent")};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 1.25rem;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
	transition: transform 0.3s ease-out;

`;
const NavLogo = styled.div`
	cursor: pointer;
	img {
		width: 8.125rem;
		height: auto;
	}
`;
const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 1020px) {
		display: none;
	}
`;
const NavLinks = styled(LinkS)`
	display: inline-block;
	color: #393c41;
	font-weight: 600;
	margin-right: 1rem;
	padding: 0 1rem;
	text-decoration: none;
	outline: none;
	cursor: pointer;

	&::after {
		content: '';
		display: block;
		width: 0;
		height: 2px;
		background: #393c41;
		transition: width 0.3s ease-out;
	}
	&:hover::after,
	&.active::after {
		width: 100%;
		transition: width 0.3s ease-out;
	}
`;
const RightMenu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const NavLinkR = styled(LinkR)`
	display: inline-block;
	color: #393c41;
	font-weight: 600;
	margin-right: 1rem;
	padding: 0 1rem;
	text-decoration: none;
	outline: none;
	cursor: pointer;

	&::after {
		content: '';
		display: block;
		width: 0;
		height: 2px;
		background: #393c41;
		transition: width 0.3s ease-out;
	}
	&:hover::after,
	&.active::after {
		width: 100%;
		transition: width 0.3s ease-out;
	}
`;

const BurgerMenu = styled(MenuIcon)`
	cursor: pointer;
`;
const BurgerNav = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	background: #f8f8f8;
	width: 18.75rem;
	z-index: 100;
	display: flex;
	flex-direction: column;
	text-align: left;
	transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
	transition: transform 0.3s ease-out;
	ul {
		list-style: none;
		padding: 1rem 1.5rem;
	 }
	 ul li {
		margin: 1rem 0;
	 }
`;
const CloseMenu = styled(CloseIcon)`
	cursor: pointer;
`;
const CloseWrapper = styled.div`
	 display: flex;
	 justify-content: flex-end;
`;