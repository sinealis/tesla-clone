import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Header from './Header';

function Home() {
	return (
		<Container css={`height: 100vh; scroll-snap-type: y mandatory; overflow-y: scroll;`}>
			<Header />
			<Section
				css={`scroll-snap-align: start;`}
				id="models"
				title="Model S"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-s.jpg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				css={`scroll-snap-align: start;`}
				id="model3"
				title="Model 3"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-3.jpg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				css={`scroll-snap-align: start;`}
				id="modelx"
				title="Model X"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-x.jpg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				css={`scroll-snap-align: start;`}
				id="modely"
				title="Model Y"
				description="Order Online for Touchless Delivery"
				backgroundImg="model-y.jpg"
				leftBtnText="Custom Order"
				rightBtnText="Existing Inventory"
			/>
			<Section
				css={`scroll-snap-align: start;`}
				id="accessories"
				title="Accessories"
				description=""
				backgroundImg="accessories.jpg"
				leftBtnText="Shop Now"
			/>
			<Section
				css={`scroll-snap-align: start;`}
				id="solar"
				title="Solar for New Roofs"
				description="Money-back guarantee"
				backgroundImg="solar-panels.jpg"
				leftBtnText="Order Now"
				rightBtnText="Learn more"
			/>
		</Container>
	)
}

export default Home;

const Container = styled.div`
	width: 100vw;
	overflow-x: hidden;
`;
