import { Item } from '../gql/graphql';
import { useMutation } from '@apollo/client';
import { graphql } from '../gql';
import { Button } from './button';

const USER_BUY = graphql(/* GraphQL */ `
  mutation UserBuy($itemId: Int!) {
    userBuy(itemId: $itemId) {
      successful
      messages {
        message
      }
      result {
        buyer {
          name
        }
        seller {
          name
        }
        item {
          name
        }
      }
    }
  }
`);

export const mapModelToColor = (modelName?: string) => {
  const modelColorMap: { [name: string]: string } = {
    gilded: 'border-yellow-600 bg-yellow-100',
    golden: 'border-yellow-400 bg-yellow-50',
    royal: 'border-blue-600 bg-blue-100',
    regal: 'border-green-400 bg-green-100',
    silver: 'border-stone-500 bg-stone-100',
    enchanted: 'border-purple-400 bg-purple-100',
    embossed: 'border-red-400 bg-red-100',
    epic: 'border-fuchsia-500 bg-fuchsia-200',
  };
  if (!modelName) return 'bg-gray-100';
  return modelColorMap[modelName];
};

export const ItemCard = ({ item }: { item: Item | undefined }) => {
  const [userBuy, { loading, error }] = useMutation(USER_BUY, {
    refetchQueries: ['ItemList', 'ItemsByUserId'],
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userBuy({
      variables: {
        itemId: Number(item?.id),
      },
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className={
          'flex flex-col gap-1 justify-between border-2 rounded-md shadow-md py-2 my-1 mx-2 px-2  ' +
          mapModelToColor(item?.model?.name?.toString())
        }
      >
        <h2 className="font-medium">{item?.user.name} is selling: </h2>
        <h1 className="font-semibold">{item?.name?.toUpperCase()}</h1>
        <p className="font-medium">Price: {item?.price?.toFixed(2)}</p>
        <Button type="submit">Buy</Button>
      </form>
    </div>
  );
};
