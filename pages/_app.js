import GlobalStyle from '../src/components/ui/GlobalStyle';
import Layout from '../src/components/basics/Layout';
import { useEffect } from 'react';
import useStore from '../src/lib/store/useStore';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	useEffect(() => {
		useStore.getState().fetchEntries();
	}, []);

	return (
		<SessionProvider session={session}>
			<Layout>
				<GlobalStyle />
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
}

export default MyApp;
