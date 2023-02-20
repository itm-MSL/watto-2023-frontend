import { SubHeader } from '../../../components/subheader';
import { Input } from '../../../components/input';
import { Button } from '../../../components/button';
import { graphql } from '../../../gql';
import { useMutation } from '@apollo/client';
import SelectModel from '../../../components/selectModel';
import SelectType from '../../../components/selectType';

const ITEM_CREATE = graphql(/* GraphQL */ `
  mutation ItemCreate($name: String!, $typeId: Int!, $modelId: Int!) {
    itemCreate(name: $name, typeId: $typeId, modelId: $modelId) {
      successful
      result {
        id
        name
        insertedAt
      }
    }
  }
`);

const MarketCreateItem = () => {
  const [itemCreate, { data, loading, error }] = useMutation(ITEM_CREATE);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name') as string;
    const typeId = data.get('typeId');
    const modelId = data.get('modelId');

    itemCreate({
      variables: {
        name: name,
        typeId: Number(typeId),
        modelId: Number(modelId),
      },
    });
  };
  return (
    <div className="flex flex-col gap-3 mr-4">
      <SubHeader>Item</SubHeader>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <Input label="Name" type="text" name="name"></Input>
        <div className="grid grid-cols-2 gap-1">
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