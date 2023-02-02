import internal from "stream";
import { IUser } from "./IUser";

export interface IPost{
    id: Number,
    username: String,
    text: String,
    //later add userID
    uploadDateTime: Date,
    likes: Number,
    dislikes: Number,
    user: IUser
}