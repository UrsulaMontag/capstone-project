import { useSession, signIn, signOut } from 'next-auth/react';
import Typography from '../ui/Typography';

export default function Accountbutton() {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<Typography variant="body1">Hello {session.user.name}</Typography>
				<button type="button" onClick={() => signOut()}>
					Sign out
				</button>
			</>
		);
	}
	return (
		<button type="button" onClick={() => signIn()}>
			Sign in
		</button>
	);
}
