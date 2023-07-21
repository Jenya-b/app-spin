import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		border: 0;

		::-webkit-scrollbar {
    	width: 0px;
    	height: 0px;
  	}
	}
	*,
	*::before,
	*::after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	:focus,
	:active {
		outline: none;
	}
	a:focus,
	a:active {
		outline: none;
	}
	nav,
	footer,
	header,
	section,
	aside {
		display: block;
	}
	html,
	body {
		height: 100%;
		width: 100%;
		font-family: 'Raleway', sans-serif;
		font-size: 100%;
		line-height: 1;
		font-size: 14px;
		-ms-text-size-adjust: 100%;
		-moz-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		background: ${({ theme }) => theme.colors.bgPrimary};
		color: ${({ theme }) => theme.colors.textPrimary};
	}
	body {
		overflow: hidden;
	}
	input,
	button,
	textarea {
		font-family: inherit;
	}
	input::-ms-clear {
		display: none;
	}
	button {
		cursor: pointer;
	}
	button::-moz-focus-inner {
		padding: 0;
		border: 0;
	}
	a,
	a:visited {
		text-decoration: none;
	}
	a:hover {
		text-decoration: none;
	}
	ul li {
		list-style: none;
	}
	img {
		vertical-align: top;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: inherit;
		font-weight: 400;
	}
	#root{
		height: 100vh;
	}
`;
