import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';


function Section({ id, title, description, backgroundImg, leftBtnText, rightBtnText }) {
	return (
		<Wrap id={id} bgImage={backgroundImg} >

			<Fade bottom>
				<ItemText>
					<h1>{title}</h1>
					<p>{description}</p>
				</ItemText>
			</Fade>
			<Buttons>
				<Fade bottom>
					<ButtonGroup>
						<LeftButton>{leftBtnText}</LeftButton>
						{rightBtnText &&
							<RightButton>{rightBtnText}</RightButton>
						}
					</ButtonGroup>
				</Fade>
				<DownArrow src="/images/down-arrow.svg" />
			</Buttons>
		</Wrap>
	)
}

export default Section;

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: ${props => `url("/images/${props.bgImage}")`};
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
const ItemText = styled.div`
	padding-top: 11vh;
	text-align: center;
`;
const Buttons = styled.div`
	display: flex;
	flex-direction: column;
`;
const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 1rem;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
const LeftButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 15.625rem;
	color: #fefefe;
	background-color: rgba(23,26,32,0.8);
	border-radius: 6.25rem;
	opacity: 0.9;
	text-transform: uppercase;
	font-size: 0.75rem;
	margin: 0.5rem;
	cursor: pointer;
`;
const RightButton = styled(LeftButton)`
	color: #000;
	background-color: rgba(250,250,250,0.7);
`;
const DownArrow = styled.img`
	height: 1.875rem;
	margin-bottom: 1rem;
	cursor: pointer;
	animation: animateDown infinite 1.5s;
`;