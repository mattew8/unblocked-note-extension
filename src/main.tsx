import React from 'react';
import ReactDOM from 'react-dom/client';
import SidePanel from './extension/side-panel/SidePanel';
import ContentScript from './extension/content-script/ContentScript';
import Popup from './extension/popup/Popup';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <section id="popupSection">
      <p className="selection-description">popup section</p>
      <Popup />
    </section>

    <section id="sidePanelSection">
      <p className="selection-description">side panel section</p>
      <SidePanel />
    </section>

    <section id="contentScriptSection">
      <p className="selection-description">content script section</p>
      <ContentScript />
    </section>
  </React.StrictMode>,
);
