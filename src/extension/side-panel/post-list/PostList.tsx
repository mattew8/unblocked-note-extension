import { useEffect, useState } from 'react';
import { postService } from '../../../service/post/post-service';
import { Post } from '../../../domain/post';
import { useExtensionRouter } from '../../../service/router/extension-router';
import { Button } from '@/extension/components/ui/button';

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

  const onClickCreateNote = () => {
    router.push(`post/create`);
  };

  return (
    <>
      <div className="flex flex-row-reverse">
        <Button onClick={onClickCreateNote}>write new note!</Button>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {posts.map((post) => (
          <button
            key={post.id}
            onClick={() => onClickEditPost(post.id)}
            className={
              'flex flex-col items-start gap-2 p-3 text-sm text-left border rounded-lg hover:bg-accent'
            }
          >
            <div dangerouslySetInnerHTML={{ __html: post.contents }} />
          </button>
        ))}
      </div>
    </>
  );
};

export default PostList;
