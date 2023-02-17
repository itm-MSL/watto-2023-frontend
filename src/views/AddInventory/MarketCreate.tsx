import MarketCreateType from './MarketCreateType';
import MarketCreateModel from './MarketCreateModel';
import MarketCreateItem from './MarketCreateItem';
import { Header } from '../../components/header';

const MarketCreate = () => {
  return (
    <>
      <Header>Add inventory</Header>
      <div className="flex flex-col">
        <div className="flex ">
          <MarketCreateType />
          <MarketCreateModel />
        </div>
        <div className="flex">
          <MarketCreateItem />
        </div>
      </div>
    </>
  );
};

export default MarketCreate;
