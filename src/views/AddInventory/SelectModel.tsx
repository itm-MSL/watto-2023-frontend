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
    <select className="rounded-xl px-2 py-1" name={name}>
      {data?.modelList?.map((type: any) => (
        <option key={type.id} value={type.id}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default SelectModel;