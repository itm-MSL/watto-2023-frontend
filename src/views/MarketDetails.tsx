import { useQuery } from '@apollo/client';
import { graphql } from '../gql';
import { useParams } from 'react-router-dom';

const ITEM_BY_ID = graphql(/* GraphQL */ `
  query ItemById($id: Int!) {
    itemById(id: $id) {
      id
      name
      model {
        id
      }
      type {
        id
      }
      price
    }
  }
`);

const MarketDetails = () => {
  let { id } = useParams();
  const { data, loading, error } = useQuery(ITEM_BY_ID, {
    variables: { id: Number(id) },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
    <>
      <div>
        <h1>ItemName: {data?.itemById?.name}</h1>
        <p>ModelId: {data?.itemById?.model.id}</p>
        <p>TypeId: {data?.itemById?.type.id}</p>
        <p>Price: {data?.itemById.price}</p>
      </div>
    </>
  );
};

export default MarketDetails;
