import { useQuery } from '@apollo/client';
import { graphql } from '../gql';
import { useParams } from 'react-router-dom';

const TYPE_BY_ID = graphql(/* GraphQL */ `
  query TypeById($id: Int!) {
    typeById(id: $id) {
      id
      name
      indexPrice
    }
  }
`);

const MarketTypesDetails = () => {
  let { typeid } = useParams();
  const { data, loading, error } = useQuery(TYPE_BY_ID, {
    variables: { id: Number(typeid) },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  return (
    <>
      <div className="px-4 bg-blue-100 shadow-md flex flex-col">
        <h1 className="text-xl">Id: {data?.typeById?.id}</h1>
        <p>Name: {data?.typeById?.name}</p>
        <p>Multiplier: {data?.typeById?.indexPrice}</p>
      </div>
    </>
  );
};
export default MarketTypesDetails;
