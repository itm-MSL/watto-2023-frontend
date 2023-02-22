import { graphql } from '../../../gql';
import { useMutation } from '@apollo/client';
import { Button } from '../../../components/button';
import { Item } from '../../../gql/graphql';

const ITEM_SELLABLE = graphql(/* GraphQL */ `
  mutation ItemSellable($itemId: Int!) {
    itemSellable(id: $itemId) {
      successful
    }
  }
`);

const SetItemForSale = ({ item }: { item: Item | undefined }) => {
  const [itemSellable] = useMutation(ITEM_SELLABLE, {
    refetchQueries: ['ItemsByUserId'],
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    itemSellable({
      variables: {
        itemId: Number(item?.id),
      },
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <p>Sellable: {item?.forSale ? ' Yes ' : ' No '}</p>
      <Button id="sellable" type="submit">
        Set Item For Sale
      </Button>
    </form>
  );
};

export default SetItemForSale;
