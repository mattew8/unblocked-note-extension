import { useEffect, useState } from 'react';
import { postService } from '../../../service/post/post-service';
import { Post } from '../../../domain/post';
import { useExtensionRouter } from '../../../service/router/extension-router';
import { ChevronLeft, Save, Trash2 } from 'lucide-react';
import { Button } from '@/extension/components/ui/button';

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
      <div className="flex justify-between">
        <Button onClick={onClickGoBackToList} variant="outline" size="icon">
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Trash2 onClick={onClickDelete} className="w-4 h-4" />
          </Button>
          <Button onClick={saveNotes} size="icon">
            <Save className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {postContents !== undefined && (
        <div
          className={`${EDITABLE_ELEMENT_ID} min-h-96 font-sans text-lg p-3 mt-2`}
          contentEditable
          dangerouslySetInnerHTML={{ __html: postContents }} // set initial contentEditable content
        />
      )}
    </div>
  );
};

export default PostDetail;
