import { Box, TextField, Menu, MenuItem, Stack } from "@mui/material";

function MUISelect() {
  return (
    <Stack alignItems="center">
      <Box width="50%">
        <TextField id="" label="Select country" select fullWidth>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="PAK">Pakistan</MenuItem>
          <MenuItem value="USA">United States</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
}

export default MUISelect;
