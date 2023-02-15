import { SubHeader } from '../components/subheader';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { graphql } from '../gql';

const handleSubmitItem = (event: any) => {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const itemName = data.get('itemName');
  const type = data.get('type');
  const model = data.get('model');
  console.log(itemName, type, model);

  const ITEM_CREATE = graphql(/* GraphQL */ `
    mutation ItemCreate($itemName: String!, $type: Int!, $model: Int!) {
      itemCreate(itemName: $itemName, type: $type, model: $model) {
        id
        itemName
        type
        model
      }
    }
  `);
  console.log(ITEM_CREATE);
};

const handleSubmitType = (event: any) => {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const name = data.get('name');
  const indexPrice = data.get('indexPrice');
  console.log(name, indexPrice);

  const TYPE_CREATE = graphql(/* GraphQL */ `
    mutation TypeCreate($name: String!, $indexPrice: Int!) {
      typeCreate(name: $name, indexPrice: $indexPrice) {
        id
        name
        indexPrice
      }
    }
  `);
  console.log(TYPE_CREATE);
};

const handleSubmitModel = (event: any) => {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const name = data.get('name');
  const multiplier = data.get('multiplier');
  console.log(name, multiplier);

  const MODEL_CREATE = graphql(/* GraphQL */ `
    mutation ModelCreate($name: String!, $multiplier: Float!) {
      modelCreate(name: $name, multiplier: $multiplier) {
        id
        name
        multiplier
      }
    }
  `);
  console.log(MODEL_CREATE);
};

const MarketCreate = () => {
  return (
    <div className="flex">
      <form className="flex flex-col gap-3 p-2">
        <SubHeader>New item:</SubHeader>
        <Input label="Name" type="text" name="itemName"></Input>
        <Input label="Type" type="number" name="type"></Input>
        <Input label="Model" type="number" name="model"></Input>
        <Button type="submit" onSubmit={handleSubmitItem}>
          Create item
        </Button>
      </form>
      <form className="flex flex-col gap-3 p-2">
        <SubHeader>New type:</SubHeader>
        <Input label="Name" type="text" name="name"></Input>
        <Input label="IndexPrice" type="number" name="indexPrice"></Input>
        <Button type="submit" onSubmit={handleSubmitType}>
          Create type
        </Button>
      </form>
      <form className="flex flex-col gap-3 p-2">
        <SubHeader>New model:</SubHeader>
        <Input label="Name" type="text" name="name"></Input>
        <Input label="Multiplier" type="number" name="multiplier"></Input>
        <Button type="submit" onSubmit={handleSubmitModel}>
          Create model
        </Button>
      </form>
    </div>
  );
};

export default MarketCreate;
