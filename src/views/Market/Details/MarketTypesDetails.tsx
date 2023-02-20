import { useQuery } from '@apollo/client';
import { graphql } from '../../../gql';
import { useParams } from 'react-router-dom';
import { SubHeader } from '../../../components/subheader';

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

  return (
    <div className="px-4 flex flex-col">
      <SubHeader>Type details</SubHeader>
      <div className="bg-teal-100 p-2 m-2 rounded-xl">
        <h1 className="text-xl">Name: {data?.typeById?.name}</h1>
        <p>Id: {data?.typeById?.id}</p>
        <p>IndexPrice: {data?.typeById?.indexPrice}</p>
      </div>
    </div>
  );
};
export default MarketTypesDetails;
