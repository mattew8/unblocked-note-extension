import { Post } from '../domain/post';

export interface PostService {
  getPosts(): Promise<Post[]>;
  addPost(text: string): Promise<void>;
}
