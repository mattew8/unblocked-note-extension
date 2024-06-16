import { Post } from '../domain/post';

export interface PostService {
  getPosts(): Promise<Post[]>;
  addPost(text: string): Promise<void>;
}

export interface Router {
  pathname: string;
  searchParams: Record<string, string>;
  push(url: string): void;
}
