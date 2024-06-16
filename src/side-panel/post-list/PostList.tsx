import { useEffect, useState } from 'react';
import { postService } from '../../service/post/post-service';
import { Post } from '../../domain/post';
import { useExtensionRouter } from '../../service/router/extension-router';

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useExtensionRouter();
  useEffect(() => {
    postService
      .getPosts()
      .then((posts) => setPosts(posts))
      .catch(() => {});
  }, []);

  const onClickEditPost = (id: Post['id']) => {
    router.push(`post/detail?id=${id}`);
  };

  return (
    <div>
      포포
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.id}</p>
          <button onClick={() => onClickEditPost(post.id)}>edit</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
