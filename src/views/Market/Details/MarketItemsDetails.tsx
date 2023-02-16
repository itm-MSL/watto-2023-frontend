import { useQuery } from '@apollo/client';
import { graphql } from '../../../gql';
import { useParams } from 'react-router-dom';
import { BuyButton } from '../../../components/buyButton';
import MarketItemsDetailsBuy from './MarketItemsDetailsBuy';

const ITEM_BY_ID = graphql(/* GraphQL */ `
  query ItemById($id: Int!) {
    itemById(id: $id) {
      id
      name
      model {
        id
        name
        multiplier
      }
      type {
        id
        name
        indexPrice
      }
      price
    }
  }
`);

const MarketItemsDetails = () => {
  let { itemid } = useParams();
  const { data, loading, error } = useQuery(ITEM_BY_ID, {
    variables: { id: Number(itemid) },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="px-4 bg-blue-50 shadow-md flex flex-col">
      <MarketItemsDetailsBuy />
      <div className="bg-blue-200 p-2 m-2 rounded-xl">
        <p className="font-bold">Price: {data?.itemById.price}</p>
        <h1 className="text-xl">Name: {data?.itemById?.name}</h1>
        <p>Id: {data?.itemById?.id}</p>
        <h1 className="text-xl">Model: {data?.itemById?.model.name}</h1>
        <p>Id: {data?.itemById?.model.id}</p>
        <h1 className="text-xl">Type: {data?.itemById?.type.name}</h1>
        <p>Id: {data?.itemById?.type.id}</p>
      </div>
    </div>
  );
};

export default MarketItemsDetails;
