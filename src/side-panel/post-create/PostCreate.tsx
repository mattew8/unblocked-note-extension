import { postService } from '../../service/post/post-service';
import { useExtensionRouter } from '../../service/router/extension-router';

const EDITABLE_ELEMENT_ID = 'editable-div';

const PostCreate = () => {
  const router = useExtensionRouter();
  const saveNotes = async () => {
    const contents = document.querySelector(
      `.${EDITABLE_ELEMENT_ID}`,
    )?.innerHTML;
    if (typeof contents === 'string' && contents.length > 0) {
      const post = await postService.addPost(contents);
      router.push(`post/detail?id=${post.id}`);
    }
  };

  return (
    <div>
      <div>
        <h1>let's note!</h1>
        <button onClick={saveNotes}>save</button>
      </div>

      <div
        className={EDITABLE_ELEMENT_ID}
        style={{ height: '100vh', border: '1px solid red' }}
        contentEditable
      ></div>
    </div>
  );
};

export default PostCreate;
