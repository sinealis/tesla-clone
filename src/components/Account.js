import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 0;
	overflow: hidden;
	background: linear-gradient(to bottom, #f8f8f8, #e5e5e5);
	background: -webkit-linear-gradient(to bottom, #f8f8f8, #e5e5e5);
`;
const FormWrap = styled.div`
	height: 100%;
	min-height: 43.125rem;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 400px) {
		height: 80%;
	}
`;
const Icon = styled(Link)`
	cursor: pointer;
	margin-left: 1.25rem;
	margin-top: 1.375rem;
	img {
		width: 8.125rem;
		height: auto;
	}
`;
const FormContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 480px) {
		padding: 0.625rem;
	}
`;
const Form = styled.form`
	background: #fff;
	max-width: 25rem;
	width: 100%;
	height: auto;
	z-index: 1;
	display: grid;
	margin: 0 auto;
	border: none;
	border-radius: 0.5rem;
	padding: 3.75rem 2.5rem;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

	@media screen and (max-width: 400px) {
		padding: 2rem;
	}
`;
const FormH1 = styled.h1`
	margin-bottom: 2.5rem;
	color: #393c41;
	font-size: 2rem;
	font-weight: 400;
	text-align: center;
`;
const FormLabel = styled.label`
	font-size: 0.875rem;
	font-weight: 600;
	color: #393c41;
	margin-left: 1rem;
	margin-bottom: 0.5rem;
`;
const FormInput = styled.input`
	font-size: 0.875rem;
	padding: 0.625rem 1rem;
	margin-bottom: 1.625rem;
	border: none;
	border-radius: 2.25rem;
	background: #F5F5F5;
`;
const FormButton = styled.button`
	font-size: 0.875rem;
	color: #fff;
	background: #3E6AE1;
	padding: 0.625rem 1rem;
	margin-bottom: 1.625rem;
	border: none;
	border-radius: 2.25rem;
	cursor: pointer;
	&:hover {
		background: #3457B2;
	}
`;
const FormButtonSecondary = styled.button`
	font-size: 0.875rem;
	color: #393c41;
	background: #F5F5F5;
	padding: 0.625rem 1rem;
	margin-bottom: 1.625rem;
	border: none;
	border-radius: 2.25rem;
	cursor: pointer;
	&:hover {
		background: #eee;
	}
`;
const FormButtonPrimary = styled.button`
	font-size: 0.875rem;
	color: #393c41;
	background: #fff;
	padding: 0.625rem 1rem;
	margin-bottom: 0;
	border: 3px solid #393c41;
	border-radius: 2.25rem;
	cursor: pointer;
	&:hover {
		color: #fff;
		background: #393c41;
	}
`;
const Text = styled.span`
	text-align: center;
	margin-bottom: 1.625rem;
	color: #393c41;
	font-size: 0.8125rem;
`;

const Account = () => {
	return (
		<>
			<Container>
				<FormWrap>
					<Icon to="/">
						<img src="/images/logo.svg" alt="Tesla Logo" />
					</Icon>
					<FormContent>
						<Form action="#">
							<FormH1>Sign In</FormH1>
							<FormLabel htmlFor="for">Email Address</FormLabel>
							<FormInput type="email" required />
							<FormLabel htmlFor="for">Password</FormLabel>
							<FormInput type="password" required />
							<FormButton type="submit">SIGN IN</FormButton>
							<FormButtonSecondary type="button">CANCEL</FormButtonSecondary>
							<Text>Forgot email? | Forgot password?</Text>
							<FormButtonPrimary type="button">CREATE ACCOUNT</FormButtonPrimary>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	)
};

export default Account;
