import { graphql } from '../../gql';
import { useMutation } from '@apollo/client';
import { Button } from '../../components/button';

const REFUND = graphql(/* GraphQL */ `
  mutation Refund($itemId: Int!) {
    refund(itemId: $itemId) {
      successful
    }
  }
`);

const RefundItem = ({ itemId }: { itemId: number }) => {
  const [refund, { data, loading, error }] = useMutation(REFUND, {
    refetchQueries: ['ItemList', 'ItemsByUserId'],
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    refund({
      variables: {
        itemId: Number(itemId),
      },
    });
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 bg-blue-50 m-2 p-2"
      >
        <Button type="submit">Refund item</Button>
      </form>
    </>
  );
};

export default RefundItem;
