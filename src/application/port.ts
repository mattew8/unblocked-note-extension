import { Post } from '../domain/post';

export interface PostService {
  getPosts(): Promise<Post[]>;
  getPost(id: Post['id']): Promise<Post | null>;
  addPost(text: string): Promise<Post>;
  editPost(id: Post['id'], text: string): Promise<void>;
}

export interface Router {
  pathname: string;
  searchParams: Record<string, string>;
  push(url: string): void;
}

type MessageActionType = 'open-side-panel';
export interface Message {
  action: MessageActionType;
  payload?: Record<string, string>;
}
export interface MessageController<T extends Message> {
  message: T;

  send(): Promise<unknown>;
  on(callback: (message: T) => void): void;
}
