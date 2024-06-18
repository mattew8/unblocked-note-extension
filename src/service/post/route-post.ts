import { useExtensionRouter } from '../router/extension-router';
import { MessageController } from '../../application/port';
import {
  routeToPostCreate,
  routeToPostList,
} from '../../application/post/route';

interface RoutePost {
  /**
   * @description route to post list page
   */
  routeToList(): Promise<void>;
  /**
   * @description route to post create page
   */
  routeToCreate(): Promise<void>;
}

const useRoutePost = (
  messageController: MessageController<{ action: 'open-side-panel' }>,
): RoutePost => {
  const router = useExtensionRouter();

  const routeToList = () => {
    routeToPostList(router);
    return messageController.send();
  };

  const routeToCreate = () => {
    routeToPostCreate(router);
    return messageController.send();
  };

  return {
    routeToList,
    routeToCreate,
  };
};

export default useRoutePost;
