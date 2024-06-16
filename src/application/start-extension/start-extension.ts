import { Router, MessageController } from '../port';

interface StartExtensionConfigs {
  router: Router;
  messageController: MessageController<{
    action: 'open-side-panel';
  }>;
}

export async function startExtension(
  type: 'post-list' | 'post-create',
  configs: StartExtensionConfigs,
) {
  const { router, messageController } = configs;

  // 1. route
  switch (type) {
    case 'post-list':
      router.push('post/list');
      break;
    case 'post-create':
      router.push('post/create');
      break;
    default:
      break;
  }

  // 2. send open side panel message
  await messageController.send();

  // 3. close pop-up
  window.close();
}
