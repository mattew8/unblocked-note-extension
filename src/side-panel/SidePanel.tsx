import { postService } from '../service/post/post-service';

const EDITABLE_ELEMENT_ID = 'editable-div';
const SidePanel = () => {
  const saveNotes = () => {
    const editText = document.getElementById(EDITABLE_ELEMENT_ID)?.innerHTML;
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

  return (
    <div>
      <div>
        <h1>let's note!</h1>
        <button onClick={saveNotes}>save</button>
        <button onClick={getNotes}>get</button>
      </div>

      <div
        style={{ height: '100vh', border: '1px solid red' }}
        contentEditable
        id={EDITABLE_ELEMENT_ID}
      ></div>
    </div>
  );
};

export default SidePanel;
