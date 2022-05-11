import GlobalStyle from '../src/components/GlobalStyle';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
