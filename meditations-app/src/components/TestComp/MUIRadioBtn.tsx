import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";

function MUIRadioBtn() {
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
        ></RadioGroup>

        <FormHelperText></FormHelperText>
      </FormControl>
    </Box>
  );
}

export default MUIRadioBtn;
