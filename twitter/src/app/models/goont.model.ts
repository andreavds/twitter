import { Author } from './author.model';

export interface Goont {
  _id: {
    $oid: string;
  };
  content: string;
  author: Author;
  likes: number[];
  image: string | null;
  isComment: boolean;
  createdAt: string;
  __v: number;
}