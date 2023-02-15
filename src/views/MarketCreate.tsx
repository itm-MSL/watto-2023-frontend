import { Header } from '../components/header';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { graphql } from '../gql';

const MarketCreate = () => {
  return (
    <div className="flex">
      <form className="flex flex-col gap-3 p-2">
        <Header>New item:</Header>
        <Input label="Name" type="text" name="name"></Input>
        <Input label="Type" type="number" name="price"></Input>
        <Button type="submit">Add item</Button>
      </form>
      <form className="flex flex-col gap-3 p-2">
        <Header>New type:</Header>
        <Input label="Name" type="text" name="name"></Input>
        <Input label="IndexPrice" type="number" name="indexPrice"></Input>
        <Button type="submit">Add type</Button>
      </form>
      <form className="flex flex-col gap-3 p-2">
        <Header>New model:</Header>
        <Input label="Name" type="text" name="name"></Input>
        <Input label="Multiplier" type="number" name="multiplier"></Input>
        <Button type="submit">Add model</Button>
      </form>
    </div>
  );
};

export default MarketCreate;
