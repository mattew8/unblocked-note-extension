import { useEffect, useState } from 'react';
import { postService } from '../../service/post/post-service';
import { Post } from '../../domain/post';
import { useExtensionRouter } from '../../service/router/extension-router';

const EDITABLE_ELEMENT_ID = 'editable-div';

interface PostDetailProps {
  id: number;
}
const PostDetail = ({ id }: PostDetailProps) => {
  const router = useExtensionRouter();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    postService.getPost(id).then(setPost);
  }, [id]);

  const saveNotes = async () => {
    const editText = document.querySelector(
      `.${EDITABLE_ELEMENT_ID}`,
    )?.innerHTML;
    if (typeof editText === 'string' && editText.length > 0) {
      await postService.editPost(id, editText);
      router.push('post/list');
    }
  };

  const onClickGoBackToList = () => {
    router.push('post/list');
  };

  const onClickDelete = async () => {
    await postService.deletePost(id);
    router.push('post/list');
  };

  const postContents = post?.contents;

  return (
    <div>
      <div>
        {post !== null && <h1>{post.id}</h1>}
        <button onClick={onClickGoBackToList}>go back to list</button>
        <button onClick={onClickDelete}>delete</button>
        <button onClick={saveNotes}>save</button>
      </div>

      {postContents !== undefined && (
        <div
          className={EDITABLE_ELEMENT_ID}
          style={{ height: '100vh', border: '1px solid red' }}
          contentEditable
          dangerouslySetInnerHTML={{ __html: postContents }} // set initial contentEditable content
        />
      )}
    </div>
  );
};

export default PostDetail;
