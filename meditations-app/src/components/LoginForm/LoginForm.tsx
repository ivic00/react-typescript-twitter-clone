import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import './LoginForm.css'


function LoginForm() {
  return (
      <Box className="LoginBox" sx={{ display: "flex", justifyContent: "center", marginBottom:2}}>
      <Paper sx={{ padding: 4, borderRadius: 5, marginTop:10}} elevation={5} >
        <Stack direction="column" spacing={2} alignItems="center">
          <TextField
            id="username"
            label="username"
            variant="outlined"
            type="username"
          />
          <TextField
            id="Password"
            label="password"
            variant="outlined"
            type="password"
          />
          <ButtonGroup variant="contained" disableElevation>
            <Button variant="outlined" sx={{borderRadius:3}}>Login</Button>
            <Button sx={{borderRadius:3}}>Register</Button>
          </ButtonGroup>
        </Stack>
      </Paper>
    </Box>
    
  );
}

export default LoginForm;
