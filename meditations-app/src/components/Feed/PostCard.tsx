import {
  Box,
  Card,
  Stack,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
} from "@mui/material";
import { IPost } from "../../interfaces/IPost";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

function PostCard(/*props: IPost*/) {
  const posts: IPost[] = [
    {
      text: "yall aint even",
      uploadDateTime: new Date(Date.UTC(2021, 9, 15, 16, 35, 3)),
      likes: 23,
      dislikes: 0,
    },
    {
      text: "Guys stopppp",
      uploadDateTime: new Date(Date.UTC(2021, 9, 15, 16, 35, 3)),
      likes: 69,
      dislikes: 420,
    },
  ];
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ padding: 1, borderRadius: 5, margin: 10 }} elevation={5}>
        <Stack direction="column" spacing={0.5} alignItems="left">
          <CardHeader
            avatar={
              <Avatar variant="square" sx={{ borderRadius: 2 }}>
                id
              </Avatar>
            }
            title={<Typography variant="h6">Username</Typography>}
            sx={{ padding: 1 }}
          />
          <CardContent sx={{ padding: 2, paddingBottom: 1 }}>
            <Typography variant="body1" color="initial">
              This is where the post text goes This is where the post text goes
              This is where the post text goes This is where the post text goes
            </Typography>
          </CardContent>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ paddingLeft: 2 }}
          >
            <IconButton>
              <ThumbUpOffAltIcon />
            </IconButton>
            <IconButton>
              <ThumbDownOffAltIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}

export default PostCard;
