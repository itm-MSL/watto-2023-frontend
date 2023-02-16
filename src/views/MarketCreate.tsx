import MarketCreateType from './MarketCreateType';
import MarketCreateModel from './MarketCreateModel';
import MarketCreateItem from './MarketCreateItem';

const MarketCreate = () => {
  return (
    <div className="flex flex-wrap">
      <MarketCreateType />
      <MarketCreateModel />
      <MarketCreateItem />
    </div>
  );
};

export default MarketCreate;
