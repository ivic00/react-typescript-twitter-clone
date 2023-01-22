import { Box, Grid } from "@mui/material";
import { IPost } from "../../interfaces/IPost";
import PostCard from "./PostCard";

function Feed() {
  const posts: IPost[] = [
    {
      id: 0,
      text: "yall aint even",
      uploadDateTime: new Date(Date.UTC(2021, 9, 15, 16, 35, 3)),
      likes: 23,
      dislikes: 0,
      username: "DigidiBambum2",
    },
    {
      id: 1,
      text: "Guys stopppp",
      uploadDateTime: new Date(Date.UTC(2021, 9, 15, 16, 35, 3)),
      likes: 69,
      dislikes: 420,
      username: "LawdShaq32",
    },
    {
      id: 2,
      text: "Juss got da new fit n shiiiii",
      uploadDateTime: new Date(Date.UTC(2021, 9, 15, 16, 35, 3)),
      likes: 49,
      dislikes: 513,
      username: "Guzzler",
    },
    {
        id: 3,
        text: "This is my first meditation, thinking about that zaza",
        uploadDateTime: new Date(Date.UTC(2021, 9, 15, 16, 35, 3)),
        likes: 2,
        dislikes: 1025,
        username: "David",
      },
      {
        id: 4,
        text: "Juss gotYing Lao Shi Tur Dao",
        uploadDateTime: new Date(Date.UTC(2021, 9, 15, 16, 35, 3)),
        likes: 663,
        dislikes: 53,
        username: "Xiao Ling",
      },
  ];
  return (
    <Box sx={{}}>
      <Grid
        container
        spacing={5}
        sx={{ display: "flex", justifyContent: "left" }}
      >
        {posts.map((post) => (
          <Grid key={post.id.toString()} item xs={12}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Feed;
