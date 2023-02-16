import { SubHeader } from '../../components/subheader';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { graphql } from '../../gql';
import { useMutation, useQuery } from '@apollo/client';
import SelectModel from './SelectModel';
import SelectType from './SelectType';

const ME = graphql(/* GraphQL */ `
  query Me {
    me {
      id
      name
      username
      credits
    }
  }
`);

const ITEM_CREATE = graphql(/* GraphQL */ `
  mutation ItemCreate(
    $name: String!
    $typeId: Int!
    $modelId: Int!
    $userId: Int!
  ) {
    itemCreate(
      name: $name
      typeId: $typeId
      modelId: $modelId
      userId: $userId
    ) {
      successful
      result {
        id
        name
        model {
          id
        }
        type {
          id
        }
        insertedAt
      }
    }
  }
`);
const MarketCreateItem = () => {
  const { data: meData, loading: meLoading, error: meError } = useQuery(ME);
  if (meLoading) return <div>Loading...</div>;
  if (meError) return <div>Error: {meError.message}</div>;

  const [itemCreate, { data, loading, error }] = useMutation(ITEM_CREATE);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name') as string;
    const typeId = data.get('typeId');
    const modelId = data.get('modelId');
    const userId = meData?.me?.id;

    itemCreate({
      variables: {
        name: name,
        typeId: Number(typeId),
        modelId: Number(modelId),
        userId: Number(userId),
      },
    });
  };
  return (
    <div className="flex flex-col gap-3 mr-4">
      <SubHeader>Item:</SubHeader>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <Input label="Name" type="text" name="name"></Input>
        <div className="grid grid-cols-2">
          <h1>Model</h1>
          <h1>Type</h1>
        </div>
        <div className="grid grid-cols-2">
          <SelectModel name="modelId" />
          <SelectType name="typeId" />
        </div>
        <Button type="submit">Create</Button>
      </form>

      {loading && <div className="animate-spin ">.</div>}
      {error && <div> {error.message} </div>}
      {data && !error && (
        <div>
          {' '}
          Created item: {JSON.stringify(data.itemCreate?.result?.name)}{' '}
        </div>
      )}
    </div>
  );
};
export default MarketCreateItem;
