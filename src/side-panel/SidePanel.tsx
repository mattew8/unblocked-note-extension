import { useExtensionRouter } from '../service/router/extension-router';
import PostDetail from './post-detail/PostDetail';
import PostList from './post-list/PostList';

const SidePanel = () => {
  const { pathname, searchParams } = useExtensionRouter();
  const postId = searchParams.id || null;

  return (
    <>
      {pathname === 'post/list' && <PostList />}
      {pathname === 'post/detail' && postId !== null && (
        <PostDetail id={Number(postId)} />
      )}
    </>
  );
};

export default SidePanel;
