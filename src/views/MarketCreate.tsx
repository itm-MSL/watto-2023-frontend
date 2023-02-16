import MarketCreateType from './MarketCreateType';
import MarketCreateModel from './MarketCreateModel';
import MarketCreateItem from './MarketCreateItem';

const MarketCreate = () => {
  return (
    <div className="flex">
      <MarketCreateType />
      <MarketCreateModel />
      <MarketCreateItem />
    </div>
  );
};

export default MarketCreate;
