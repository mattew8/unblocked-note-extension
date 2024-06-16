import { Message, MessageController } from '../../application/port';
import { queryTabs } from '../../lib/chrome-extension/query-tabs';

interface OpenSidePanelMessage extends Message {
  action: 'open-side-panel';
}

export const openSidePanelController: MessageController<OpenSidePanelMessage> =
  {
    message: {
      action: 'open-side-panel',
    },
    async send() {
      const tabs = await queryTabs({ active: true, lastFocusedWindow: true });
      const tabId = tabs[0]?.id;
      if (tabId === undefined) {
        throw new Error('Active tab does not exist');
      }
      return chrome.sidePanel.open({ tabId });
    },
    on() {},
  };
