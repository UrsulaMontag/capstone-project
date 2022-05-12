import GlobalStyle from '../src/components/ui/GlobalStyle';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />;
		</>
	);
}

export default MyApp;
