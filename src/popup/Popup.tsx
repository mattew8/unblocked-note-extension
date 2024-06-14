import { openSidePanelController } from '../service/message-controller/open-side-panel';

const Popup = () => {
  const onClickOpen = async () => {
    try {
      await openSidePanelController.send();
      window.close();
    } catch (e) {
      alert(e || 'fail to load side-panel. please retry later.');
    }
  };

  return (
    <div style={{ width: 320, height: 210, textAlign: 'center' }}>
      <p>let's start unblocked note</p>
      <button onClick={onClickOpen}>open</button>
    </div>
  );
};

export default Popup;
