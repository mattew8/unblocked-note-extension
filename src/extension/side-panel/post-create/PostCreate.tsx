import { Button } from '@/extension/components/ui/button';
import { postService } from '../../../service/post/post-service';
import { useExtensionRouter } from '../../../service/router/extension-router';

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

  const goBackToPostList = () => {
    router.push('post/list');
  };

  return (
    <div>
      <div className="flex justify-between">
        <Button onClick={goBackToPostList} variant={'secondary'}>
          goBack
        </Button>
        <Button onClick={saveNotes}>save</Button>
      </div>

      <div
        className={`${EDITABLE_ELEMENT_ID} min-h-96 font-sans text-lg p-3 mt-2`}
        contentEditable
        dangerouslySetInnerHTML={{ __html: 'write anything you want!' }} // set initial contentEditable content
      />
    </div>
  );
};

export default PostCreate;
