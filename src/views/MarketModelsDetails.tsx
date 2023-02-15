import { useQuery } from '@apollo/client';
import { graphql } from '../gql';
import { useParams } from 'react-router-dom';

const MODEL_BY_ID = graphql(/* GraphQL */ `
  query ModelById($id: Int!) {
    modelById(id: $id) {
      id
      name
      multiplier
    }
  }
`);

const MarketModelsDetails = () => {
  let { modelid } = useParams();
  const { data, loading, error } = useQuery(MODEL_BY_ID, {
    variables: { id: Number(modelid) },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  return (
    <>
      <div>
        <h1>Id: {data?.modelById?.id}</h1>
        <p>Name: {data?.modelById?.name}</p>
        <p>Multiplier: {data?.modelById?.multiplier}</p>
      </div>
    </>
  );
};
export default MarketModelsDetails;
