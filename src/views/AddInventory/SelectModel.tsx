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
    <div>
      <label>Model</label>
      <select className="rounded-md px-4 py-2 border-2 mr-2 " name={name}>
        {data?.modelList?.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectModel;
