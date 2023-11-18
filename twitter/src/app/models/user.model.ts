export interface IUser {
    _id: string; 
    username: string;
    email: string;
    password: string;
    fullname: string;
    bio: string;
    profilePicture: string;
    bannerPicture: string;
    followers: string[]; 
    followersInt: number;
    following: string[]; 
    followingInt: number;
    goonts: string[];
    createdAt: Date;
  }
  