import { useQuery } from '@apollo/client';
import { graphql } from '../gql';
import { useParams } from 'react-router-dom';

const ITEM_BY_ID = graphql(/* GraphQL */ `
  query ItemById($id: Int!) {
    itemById(id: $id) {
      id
      name
      modelId
      typeId
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
        <h1>{data?.itemById?.name}</h1>
        <p>Model: {data?.itemById?.modelId}</p>
        <p>Type: {data?.itemById?.typeId}</p>
      </div>
    </>
  );
};

export default MarketDetails;
