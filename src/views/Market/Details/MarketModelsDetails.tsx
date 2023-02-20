import { useQuery } from '@apollo/client';
import { graphql } from '../../../gql';
import { useParams } from 'react-router-dom';
import { mapModelToColor } from '../MarketItems';
import { SubHeader } from '../../../components/subheader';

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
    <div className="px-4 flex flex-col">
      <SubHeader>Model details</SubHeader>
      <div
        className={
          'p-2 m-2 rounded-xl ' +
          mapModelToColor(data?.modelById?.name?.toString())
        }
      >
        <h1 className="text-xl">Name: {data?.modelById?.name}</h1>
        <p>Id: {data?.modelById?.id}</p>
        <p>Multiplier: {data?.modelById?.multiplier.toFixed(2)}</p>
      </div>
    </div>
  );
};
export default MarketModelsDetails;
