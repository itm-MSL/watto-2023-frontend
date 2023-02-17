import { SubHeader } from '../../components/subheader';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { graphql } from '../../gql';
import { useMutation } from '@apollo/client';

const TYPE_CREATE = graphql(/* GraphQL */ `
  mutation TypeCreate($name: String!, $indexPrice: Int!) {
    typeCreate(name: $name, indexPrice: $indexPrice) {
      successful
      result {
        id
        name
        indexPrice
        insertedAt
      }
    }
  }
`);

const MarketCreateType = () => {
  const [typeCreate, { data, loading, error }] = useMutation(TYPE_CREATE);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name') as string;
    const indexPrice = data.get('indexPrice');
    typeCreate({
      variables: {
        name: name,
        indexPrice: Number(indexPrice),
      },
    });
  };

  return (
    <div className="flex flex-col gap-3 mr-4">
      <SubHeader>Type</SubHeader>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <Input label="Name" type="text" name="name"></Input>
        <Input label="IndexPrice" type="number" name="indexPrice"></Input>
        <Button type="submit">Create</Button>
      </form>

      {loading && <div className="animate-spin ">.</div>}
      {error && <div> {error.message} </div>}
      {data && !error && (
        <div>
          {' '}
          Created type: {JSON.stringify(data.typeCreate?.result?.name)}{' '}
        </div>
      )}
    </div>
  );
};

export default MarketCreateType;
