import GlobalStyle from '../src/components/ui/GlobalStyle';
import Layout from '../src/components/basics/Layout';
import { useEffect } from 'react';
import useStore from '../src/lib/store/useStore';

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		useStore.getState().fetchEntries();
	}, []);

	return (
		<Layout>
			<GlobalStyle />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
