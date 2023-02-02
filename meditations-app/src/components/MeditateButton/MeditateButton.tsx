import { Fab } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import './MeditateButton.css'

function MeditateButton() {
  return (
    <Fab
    className="meditateBtn"
      sx={{ position: "fixed", right: 50, bottom: 50, width: 80, height: 80 }}
      color="secondary"
    >
      <CreateIcon fontSize="large"/>
    </Fab>
  );
}

export default MeditateButton;
