import { useQuery } from '@apollo/client';
import { SellButton } from '../../components/sellButton';
import { SubHeader } from '../../components/subheader';
import { graphql } from '../../gql';
import { mapModelToColor } from '../Market/MarketItems';

const ITEMS_BY_USER_ID = graphql(/* GraphQL */ `
  query ItemsByUserId($userId: Int!) {
    itemsByUserId(userId: $userId) {
      id
      name
      model {
        id
        name
        multiplier
      }
      type {
        id
        name
        indexPrice
      }
      price
      updatedAt
    }
  }
`);

const ProfileMyItems = ({ userId }: { userId: number }) => {
  const { data, loading, error } = useQuery(ITEMS_BY_USER_ID, {
    variables: {
      userId: userId,
    },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <SubHeader>My items</SubHeader>
      <div className="p-2 bg-blue-100 grid">
        {data?.itemsByUserId?.map((item: any) => (
          <div key={item.id} className="flex flex-col bg-blue-50">
            <div
              className={
                'border-2 rounded-md shadow-md py-2 my-2 mx-4 px-4' +
                mapModelToColor(item.model.name)
              }
            >
              <h1 className="ml-2 font-bold"> {item.name.toUpperCase()}</h1>
              <div className="ml-2">
                {' Bought on: '} {item.updatedAt.slice(0, 10)}
                {' // '} {item.updatedAt.slice(11, 19)}
                {' @ Price: '} {item.price.toFixed(2)} {''}
              </div>
              <div>
                <SellButton>Sell</SellButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileMyItems;
