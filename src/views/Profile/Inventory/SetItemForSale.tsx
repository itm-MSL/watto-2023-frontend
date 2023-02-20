import { graphql } from '../../../gql';
import { useMutation } from '@apollo/client';
import { Button } from '../../../components/button';

const ITEM_SELLABLE = graphql(/* GraphQL */ `
  mutation ItemSellable($itemId: Int!) {
    itemSellable(id: $itemId) {
      successful
    }
  }
`);

const SetItemForSale = ({ itemId }: { itemId: number }) => {
  const [itemSellable, { data, loading, error }] = useMutation(ITEM_SELLABLE, {
    refetchQueries: ['ItemList', 'ItemsByUserId'],
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    itemSellable({
      variables: {
        itemId: Number(itemId),
      },
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 m-2 p-2">
      <Button type="submit">Set Item For Sale</Button>
    </form>
  );
};

export default SetItemForSale;
