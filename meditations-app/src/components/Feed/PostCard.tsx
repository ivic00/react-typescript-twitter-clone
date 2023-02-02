import {
  Box,
  Card,
  Stack,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { IPost } from "../../interfaces/IPost";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import "./PostCard.css";

function PostCard({ post }: { post: IPost }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        className="postCard"
      >
        <Stack direction="column" spacing={0.5} alignItems="left">
          <CardHeader
            avatar={
              <Avatar variant="square" sx={{ borderRadius: 2}}>
                {post.user.firstName[0].concat(post.user.lastName[0])}
              </Avatar>
            }
            title={
              <Stack spacing={0}>
                <Typography variant="h6">{post.user.firstName + " " + post.user.lastName}</Typography>
                <Typography>{post.user.userName}</Typography>
              </Stack>
            }
            sx={{ padding: 1 }}
          />
          <CardContent sx={{ padding: 2, paddingBottom: 1 }}>
            <Typography variant="body1" color="initial">
              {post.text}
            </Typography>
          </CardContent>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-end"
            sx={{ paddingRight: 2 }}
          >
            <Button
              startIcon={<ThumbUpOffAltIcon />}
              size="large"
              color="secondary"
            >
              <Typography>{post.likes.toString()}</Typography>
            </Button>
            <Button
              startIcon={<ThumbDownOffAltIcon />}
              size="large"
              color="secondary"
            >
              {post.dislikes.toString()}
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}

export default PostCard;
