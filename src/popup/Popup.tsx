import useStartExtensionInPopup from '../service/start-extension/start-extension-in-popup';

const Popup = () => {
  const start = useStartExtensionInPopup();

  const onClickShowList = async () => {
    try {
      await start('post-list');
    } catch (e) {
      alert(e || 'fail to load side-panel. please retry later.');
    }
  };

  const onClickWriteMemo = async () => {
    try {
      await start('post-create');
    } catch (e) {
      alert(e || 'fail to load side-panel. please retry later.');
    }
  };

  return (
    <div style={{ width: 320, height: 210, textAlign: 'center' }}>
      <p>let's start unblocked note</p>
      <button onClick={onClickShowList}>show memos</button>
      <button onClick={onClickWriteMemo}>write memo</button>
    </div>
  );
};

export default Popup;
