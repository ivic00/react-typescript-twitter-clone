import internal from "stream";

export interface IPost{
    id: Number,
    username: String,
    text: String,
    //later add userID
    uploadDateTime: Date,
    likes: Number,
    dislikes: Number
}