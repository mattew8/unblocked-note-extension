import { useEffect, useState } from 'react';
import { postService } from '../../service/post/post-service';
import { Post } from '../../domain/post';

const EDITABLE_ELEMENT_ID = 'editable-div';

interface PostDetailProps {
  id: number;
}
const PostDetail = ({ id }: PostDetailProps) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    postService.getPost(id).then(setPost);
  }, [id]);

  const saveNotes = () => {
    const editText = document.querySelector(
      `.${EDITABLE_ELEMENT_ID}`,
    )?.innerHTML;
    if (typeof editText === 'string' && editText.length > 0) {
      postService.addPost(editText);
    }
  };

  const getNotes = async () => {
    const posts = await postService.getPosts();
    const editerElement = document.getElementById(EDITABLE_ELEMENT_ID);
    const lastPostContent = posts.at(-1)?.contents;
    if (editerElement === null || lastPostContent === undefined) return;
    editerElement.innerHTML = lastPostContent;
  };

  const postContents = post?.contents;
  if (post === null || postContents === undefined) return null;

  return (
    <div>
      <div>
        <h1>let's note!</h1>
        <button onClick={saveNotes}>save</button>
        <button onClick={getNotes}>get</button>
      </div>

      <div
        className={EDITABLE_ELEMENT_ID}
        style={{ height: '100vh', border: '1px solid red' }}
        contentEditable
        dangerouslySetInnerHTML={{ __html: postContents }} // set initial contentEditable content
      ></div>
    </div>
  );
};

export default PostDetail;
