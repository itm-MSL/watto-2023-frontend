import MarketCreateType from './MarketCreateType';
import MarketCreateModel from './MarketCreateModel';
import MarketCreateItem from './MarketCreateItem';
import { Header } from '../../components/header';

const MarketCreate = () => {
  return (
    <>
      <Header>Add inventory</Header>
      <div className="flex flex-wrap">
        <MarketCreateType />
        <MarketCreateModel />
        <MarketCreateItem />
      </div>
    </>
  );
};

export default MarketCreate;
