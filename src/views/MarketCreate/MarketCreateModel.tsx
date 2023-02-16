import { SubHeader } from '../../components/subheader';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { graphql } from '../../gql';
import { useMutation } from '@apollo/client';

const MODEL_CREATE = graphql(/* GraphQL */ `
  mutation modelCreate($name: String!, $multiplier: Float!) {
    modelCreate(name: $name, multiplier: $multiplier) {
      successful
      result {
        id
        name
        multiplier
        insertedAt
      }
    }
  }
`);

const MarketCreateModel = () => {
  const [modelCreate, { data, loading, error }] = useMutation(MODEL_CREATE);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name') as string;
    const multiplier = data.get('multiplier');
    modelCreate({
      variables: {
        name: name,
        multiplier: Number(multiplier),
      },
    });
  };

  return (
    <div className="flex flex-col gap-3 mr-4">
      <SubHeader>New model:</SubHeader>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <Input label="Name" type="text" name="name"></Input>
        <Input
          label="Multiplier"
          type="number"
          step="0.01"
          name="multiplier"
        ></Input>
        <Button type="submit">Create</Button>
      </form>

      {loading && <div className="animate-spin ">.</div>}
      {error && <div> {error.message} </div>}
      {data && !error && (
        <div>
          {' '}
          Created model: {JSON.stringify(data.modelCreate?.result?.name)}{' '}
        </div>
      )}
    </div>
  );
};

export default MarketCreateModel;
