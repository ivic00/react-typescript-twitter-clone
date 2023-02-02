import { Box, Button, Grid } from "@mui/material";
import { IPost } from "../../interfaces/IPost";
import PostCard from "./PostCard";
import { useState } from "react";
import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = () => {
    fetch("https://localhost:7077/api/post/getallposts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data);
      });
  };

  return (
    <Grid
      className="feedGrid"
      container
      spacing={2}
      sx={{ justifyContent: "center" }}
    >
      <Grid item xs={12}>
        {/*<Button onClick={getPosts} fullWidth={true} variant="contained">
          Refresh
  </Button>*/}
        <button className="refreshBtn" onClick={getPosts}>
          Refresh
        </button>
      </Grid>
      {posts.map((post) => (
        <Grid key={post.id.toString()} item xs={12}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Feed;
