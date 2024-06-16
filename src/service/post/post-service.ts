import { Post } from '../../domain/post';
import { PostService } from '../../application/port';
import { chromeStorage } from '../database/chrome-storage';

export const postService: PostService = {
  async getPosts() {
    const post = (await chromeStorage.get('posts')) as Post[] | undefined;
    return post || [];
  },

  async addPost(text) {
    const randomId = Math.floor(Math.random() * 1000000);
    const post: Post = {
      id: randomId,
      contents: text,
    };
    const prevPosts = (await chromeStorage.get('posts')) as Post[] | undefined;

    return chromeStorage.create('posts', (prevPosts || []).concat(post));
  },

  async getPost(id) {
    const posts = (await chromeStorage.get('posts')) as Post[] | undefined;
    if (posts === undefined) return null;
    return posts.find((post) => post.id === id) || null;
  },

  async editPost(id, text) {
    const prevPosts = ((await chromeStorage.get('posts')) || []) as Post[];
    const updatedPosts = prevPosts.map((post) =>
      post.id === id ? { ...post, contents: text } : post,
    );

    return chromeStorage.create('posts', updatedPosts);
  },
};
