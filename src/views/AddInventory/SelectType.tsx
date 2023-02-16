import { useQuery } from '@apollo/client';
import { graphql } from '../../gql';

const TYPE_LIST = graphql(/* GraphQL */ `
  query TypeList {
    typeList {
      id
      name
    }
  }
`);

const SelectType = ({ name }: { name: string }) => {
  const { data, loading, error } = useQuery(TYPE_LIST);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <select className="rounded-xl px-2 py-1" name={name}>
      {data?.typeList?.map((type: any) => (
        <option key={type.id} value={type.id}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default SelectType;