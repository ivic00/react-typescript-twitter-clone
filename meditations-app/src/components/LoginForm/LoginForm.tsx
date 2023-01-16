import { Box, Button, ButtonGroup, Card, Stack, TextField } from "@mui/material";

function LoginForm() {
  return (
    <Box sx={{display:"flex", justifyContent: "center"}}>
      <Card sx={{ padding: 2/1,}}>
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
          <ButtonGroup variant="contained">
            <Button variant="outlined">Login</Button>
            <Button>Register</Button>
          </ButtonGroup>
        </Stack>
      </Card>
    </Box>
  );
}

export default LoginForm;
