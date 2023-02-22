import MarketCreateType from './Types/CreateType';
import MarketCreateModel from './Models/CreateModel';
import MarketCreateItem from './Items/CreateItem';
import { SubHeader } from '../../components/subheader';

const MarketCreate = () => {
  return (
    <>
      <SubHeader>Create new inventory</SubHeader>
      <div className="m-2 lg:w-1/3 md:w-1/2">
        <MarketCreateType />
        <MarketCreateModel />
        <MarketCreateItem />
      </div>
    </>
  );
};

export default MarketCreate;
