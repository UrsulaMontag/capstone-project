import GlobalStyle from '../src/components/ui/GlobalStyle';
import Layout from '../src/components/basics/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<GlobalStyle />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
