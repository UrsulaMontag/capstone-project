import { useSession, signIn, signOut } from 'next-auth/react';
import Button from '../ui/Button.styled';
import Typography from '../ui/Typography';

export default function Accountbutton() {
	const { data: session } = useSession();

	if (session) {
		return (
			<>
				<Typography variant="body1">Hello {session.user.name}</Typography>
				<Button variant="logout" type="button" onClick={() => signOut()}>
					Logout
				</Button>
			</>
		);
	}
	return (
		<Button variant="login" type="button" onClick={() => signIn()}>
			Login
		</Button>
	);
}
