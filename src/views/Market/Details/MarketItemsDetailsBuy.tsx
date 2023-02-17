import { useMutation } from '@apollo/client';
import { BuyButton } from '../../../components/buyButton';
import { graphql } from '../../../gql';

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

const MarketItemsDetailsBuy = ({ itemid }: { itemid: number }) => {
  const [userBuy, { data, loading, error }] = useMutation(USER_BUY, {
    refetchQueries: ['ItemList', 'ItemsByUserId'],
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userBuy({
      variables: {
        itemId: itemid,
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
      <div className="text-center pb-4">
        {loading && <div className="animate-spin">.</div>}
        {error && <div> {error.message} </div>}
        {!data?.userBuy?.successful && (
          <div>
            {' '}
            {data?.userBuy?.messages?.map((msg) => (
              <div>{msg?.message}</div>
            ))}{' '}
          </div>
        )}
        {data?.userBuy?.successful && (
          <div>
            Yay {JSON.stringify(data?.userBuy?.result?.buyer?.name)}, you bought{' '}
            {JSON.stringify(data?.userBuy?.result?.item?.name)} from{' '}
            {JSON.stringify(data?.userBuy?.result?.seller?.name)}
          </div>
        )}
      </div>
    </>
  );
};

export default MarketItemsDetailsBuy;
