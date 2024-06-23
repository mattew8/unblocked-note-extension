import { openSidePanelController } from '../../service/message-controller/open-side-panel';
import useRoutePost from '../../service/post/route-post';
import { Button } from '../components/ui/button';

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
    <div className="flex flex-col items-center w-56 gap-3 p-3">
      <Button onClick={onClickShowList} className="w-48">
        show memos
      </Button>
      <Button onClick={onClickWriteMemo} variant={'secondary'} className="w-48">
        write memo
      </Button>
    </div>
  );
};

export default Popup;
