import { useQuery } from '@apollo/client';
import { graphql } from '../../gql';

const MODEL_LIST = graphql(/* GraphQL */ `
  query ModelList {
    modelList {
      id
      name
    }
  }
`);

const SelectModel = ({ name }: { name: string }) => {
  const { data, loading, error } = useQuery(MODEL_LIST);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <select className="rounded-md px-4 py-2 border-2 mr-2" name={name}>
      {data?.modelList?.map((type: any) => (
        <option key={type.id} value={type.id}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default SelectModel;
