import { postService } from '../../service/post/post-service';

const EDITABLE_ELEMENT_ID = 'editable-div';

const PostCreate = () => {
  const saveNotes = () => {
    const contents = document.querySelector(
      `.${EDITABLE_ELEMENT_ID}`,
    )?.innerHTML;
    if (typeof contents === 'string' && contents.length > 0) {
      postService.addPost(contents);
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
