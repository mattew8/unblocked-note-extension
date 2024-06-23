import { openSidePanelController } from '../../service/message-controller/open-side-panel';
import useRoutePost from '../../service/post/route-post';

const Popup = () => {
  const { routeToList, routeToCreate } = useRoutePost(openSidePanelController);

  const onClickShowList = async () => {
    try {
      await routeToList();
      window.close();
    } catch (e) {
      alert(e || 'fail to load side-panel. please retry later.');
    }
  };

  const onClickWriteMemo = async () => {
    try {
      await routeToCreate();
      window.close();
    } catch (e) {
      alert(e || 'fail to load side-panel. please retry later.');
    }
  };

  return (
    <div style={{ width: 320, height: 210, textAlign: 'center' }}>
      <p>let's start unblocked note</p>
      <button className="bg-red-700" onClick={onClickShowList}>
        show memos
      </button>
      <button onClick={onClickWriteMemo}>write memo</button>
    </div>
  );
};

export default Popup;
