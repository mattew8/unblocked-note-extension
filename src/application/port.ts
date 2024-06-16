import { Post } from '../domain/post';

export interface PostService {
  getPosts(): Promise<Post[]>;
  getPost(id: Post['id']): Promise<Post | null>;
  addPost(text: string): Promise<void>;
}

export interface Router {
  pathname: string;
  searchParams: Record<string, string>;
  push(url: string): void;
}
