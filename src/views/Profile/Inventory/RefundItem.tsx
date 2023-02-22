import { graphql } from '../../../gql';
import { useMutation } from '@apollo/client';
import { Button } from '../../../components/button';

const REFUND = graphql(/* GraphQL */ `
  mutation Refund($itemId: Int!) {
    refund(itemId: $itemId) {
      successful
    }
  }
`);

const RefundItem = ({ itemId }: { itemId: number }) => {
  const [refund] = useMutation(REFUND, {
    refetchQueries: ['ItemList', 'ItemsByUserId'],
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    refund({
      variables: {
        itemId: Number(itemId),
      },
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col">
      <Button type="submit">Refund item</Button>
    </form>
  );
};

export default RefundItem;
