import { Stack, TextField, InputAdornment } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";

function MUITextField() {
    const [value, setValue] = useState('')
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <TextField id="" label="Name" variant="outlined" />
        <TextField id="" label="Name" variant="filled" />
        <TextField id="" label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          id=""
          label="Small secondary"
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField id="" label="Form Input" value={value} required onChange={e => setValue(e.target.value)}
        error = {!value}
        helperText= {!value ? 'Required': 'Do not share your password'}/>
        <TextField
          id=""
          label="Password"
          type="password"
          required
          helperText="Ne deli sifru ni sa kim"
          InputProps={{endAdornment: <VisibilityIcon fontSize="small"/>}}
        />
        <TextField
          id=""
          label="Read Only"
          InputProps={{ readOnly: true }}
          required
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField id="" label="Amount" InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}/>
        <TextField id="" label="Weight" InputProps={{endAdornment: <InputAdornment position="end">Kg</InputAdornment>}}/>
      </Stack>
    </Stack>
  );
}

export default MUITextField;
