import { useMutation } from '@apollo/client';
import { BuyButton } from '../../../components/buyButton';
import { graphql } from '../../../gql';

const USER_BUY = graphql(/* GraphQL */ `
  mutation UserBuy($itemId: Int!) {
    userBuy(itemId: $itemId) {
      successful
      result {
        buyer {
          id
          name
        }
        seller {
          id
          name
        }
      }
    }
  }
`);

const MarketItemsDetailsBuy = ({ itemid }: { itemid: number }) => {
  const [userBuy, { data, loading, error }] = useMutation(USER_BUY);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const itemId = { itemid };

    userBuy({
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
        <BuyButton type="submit">Buy</BuyButton>
      </form>
      {loading && <div className="animate-spin ">.</div>}
      {error && <div> {error.message} </div>}
      {data && !error && (
        <div>
          Yay {JSON.stringify(data.userBuy?.result?.buyer?.name)}! You bought{' '}
          from: {''}
          {JSON.stringify(data.userBuy?.result?.seller?.name)}
        </div>
      )}
    </>
  );
};

export default MarketItemsDetailsBuy;
