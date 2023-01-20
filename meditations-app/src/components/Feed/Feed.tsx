import { Grid } from "@mui/material";
import { IPost } from "../../interfaces/IPost";


function Feed() {
    const posts: IPost[] = [
        {
            text: "yall aint even",
            uploadDateTime: new Date(Date.UTC(2021, 9, 15, 16, 35, 3)),
            likes: 23,
            dislikes: 0
        },
        {
            text: "Guys stopppp",
            uploadDateTime: new Date(Date.UTC(2021, 9, 15, 16, 35, 3)),
            likes: 69,
            dislikes: 420
        },
    ]
    /*return(
        <Grid container spacing={5}>
            {posts.map((post)=> (
                <Grid item >
                    
                </Grid>
            ))}
        </Grid>
    );*/
}

export default Feed