import { startExtension } from '../../application/start-extension/start-extension';
import { useExtensionRouter } from '../router/extension-router';
import { openSidePanelController } from '../message-controller/open-side-panel';

const useStartExtensionInPopup = () => {
  const router = useExtensionRouter();

  const start = (type: 'post-list' | 'post-create') =>
    startExtension(type, {
      router,
      messageController: openSidePanelController,
    });

  return start;
};

export default useStartExtensionInPopup;
