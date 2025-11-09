import { Avatar, Box, Button, Container, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetIsSessionActive, PostUser } from "../middleware/api";
import AddAlertIcon from '@mui/icons-material/AddAlert';

export default function Home({ signalRConnection, setConfirmDialog }) {
	const navigate = useNavigate();
	
	const connectionId = signalRConnection.connection.connectionId;
	
	const [isSessionActive, setIsSessionActive] = useState(true);
	const [username, setUsername] = useState('');
	const [role, setRole] = useState('');
	const [usernameError, setUsernameError] = useState(false);
	const [usernameHelper, seUsernameHelper] = useState('');
	const [roleError, setRoleError] = useState(false);
	const [roleHelper, setRoleHelper] = useState('');
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await GetIsSessionActive();
				setIsSessionActive(response);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
		
		signalRConnection.on("ReceiveSessionExists", (activeSessionExists) => {
			setIsSessionActive(activeSessionExists);
		});
		
		signalRConnection.on("ReceiveAdminConnectionId", (adminConnectionId) => {
			signalRConnection.invoke("SetAdminConnected", adminConnectionId);
		});
		
	}, []);
	
	const handleUsernameChange = (e) => {
		const inputValue = e.target.value;
		setUsername(inputValue);
		if (inputValue.trim() === '') {
			setUsernameError(true);
			seUsernameHelper('Username is required');
		} else {
			setUsernameError(false);
		}
	}

	const handleRoleChange = (e) => {
		const inputValue = e.target.value;
		setRole(inputValue);
		if (inputValue.trim() === '') {
			setRoleError(true);
			setRoleHelper('Role is required');
		} else {
			setRoleError(false);
		}
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		if (username.trim() === '' || role.trim() === '') {
			if (username.trim() === '') {
				setUsernameError(true);
				seUsernameHelper('Username is required');
			}

			if (role.trim() === '') {
				setRoleError(true);
				setRoleHelper('Role is required');
			}
			return;
		}
	
		if (isSessionActive) {
			handleLogin();
		} else {
			setConfirmDialog({
				title: 'Are you sure you want to create a session?',
				subtitle: "You will be the admin for the session.",
				isOpen: true,
				icon: <AddAlertIcon />,
				iconColor: '#1976d2',
				buttonColor: 'primary',
				onConfirm: () => handleLogin()
			})
		}
	}
	
	const handleLogin = async () => {
		const result = await PostUser(username.trim(), role.trim(), connectionId);
		
		if (result.success) {
			localStorage.setItem('username', username);
			localStorage.setItem('role', role);
			navigate(`/voting?username=${username}`);
		} else {
			setUsernameError(true);
			seUsernameHelper(result.message);
		}
	}

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 2, bgcolor: blue[700] }} />
				<Typography component="h1" variant="h5">
					Voting Session
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						fullWidth
						label="Username"
						name="username"
						autoComplete="off"
						autoFocus
						value={username}
						onChange={handleUsernameChange}
						error={usernameError}
						helperText={usernameError && usernameHelper}
						style={{marginBottom:"0"}}
					/>
					<TextField
						margin="normal"
						fullWidth
						label="Role"
						name="role"
						autoComplete="off"
						value={role}
						onChange={handleRoleChange}
						error={roleError}
						helperText={roleError && roleHelper}
						style={{marginBottom:"30px"}}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 1 }}
					>
						{isSessionActive ? 'Join' : 'Create'}
					</Button>
				</Box>
			</Box>
		</Container>
	);
}

