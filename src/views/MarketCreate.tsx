import { SubHeader } from '../components/subheader';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { graphql } from '../gql';

const handleSubmitItem = (event: any) => {};

const handleSubmitType = (event: any) => {};

const handleSubmitModel = (event: any) => {};

const MarketCreate = () => {
  return (
    <div className="flex">
      <form className="flex flex-col gap-3 p-2">
        <SubHeader>New item:</SubHeader>
        <Input label="Name" type="text" name="itemName"></Input>
        <Input label="TypeId" type="number" name="typeId"></Input>
        <Input label="ModelId" type="number" name="modelId"></Input>
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
        <Input
          label="Multiplier"
          type="number"
          step="0.01"
          name="multiplier"
        ></Input>
        <Button type="submit" onSubmit={handleSubmitModel}>
          Create model
        </Button>
      </form>
    </div>
  );
};

export default MarketCreate;
