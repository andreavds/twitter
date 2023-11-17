export interface User {
    _id: string;
    username: string;
    email: string;
//  password: string;
    fullname: string;
    bio: string;
    profilePicture: string;
    wallpaperPicture: string;
    followers: string[];
    following: string[];
  }
  