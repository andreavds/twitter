export interface Goont {
  _id: {
    $oid: string;
  };
  content: string;
  author: string;
  likes: number[];
  image: string | null;
  isComment: boolean;
  createdAt: string;
  __v: number;
}
