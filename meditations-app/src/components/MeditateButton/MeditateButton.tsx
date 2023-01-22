import { Fab } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

function MeditateButton() {
  return (
    <Fab
      sx={{ position: "fixed", right: 50, bottom: 50, width: 80, height: 80 }}
      color="secondary"
    >
      <CreateIcon fontSize="large"/>
    </Fab>
  );
}

export default MeditateButton;
