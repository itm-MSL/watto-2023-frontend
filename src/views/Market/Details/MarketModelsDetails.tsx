import { useQuery } from '@apollo/client';
import { graphql } from '../../../gql';
import { useParams } from 'react-router-dom';
import { mapModelToColor } from '../MarketItems';

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

  return (
    <div className="px-4 bg-blue-50 shadow-md flex flex-col">
      <div
        className={
          'bg-blue-200 p-2 m-2 rounded-xl' +
          mapModelToColor(data?.modelById?.name)
        }
      >
        <h1 className="text-xl">Name: {data?.modelById?.name}</h1>
        <p>Id: {data?.modelById?.id}</p>
        <p>Multiplier: {data?.modelById?.multiplier}</p>
      </div>
    </div>
  );
};
export default MarketModelsDetails;
