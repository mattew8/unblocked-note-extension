import { useExtensionRouter } from '../../service/router/extension-router';
import PostCreate from './post-create/PostCreate';
import PostDetail from './post-detail/PostDetail';
import PostList from './post-list/PostList';

const SidePanel = () => {
  const { pathname, searchParams } = useExtensionRouter();
  const postId = searchParams.id || null;

  return (
    <div className="p-2">
      {pathname === 'post/list' && <PostList />}
      {pathname === 'post/create' && <PostCreate />}
      {pathname === 'post/detail' && postId !== null && (
        <PostDetail id={Number(postId)} />
      )}
    </div>
  );
};

export default SidePanel;
