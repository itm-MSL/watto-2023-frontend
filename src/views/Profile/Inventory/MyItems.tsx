import { useQuery } from '@apollo/client';
import { SubHeader } from '../../../components/subheader';
import { graphql } from '../../../gql';
import { MyItemCard } from '../../../components/myItemCard';

const ITEMS_BY_USER_ID = graphql(/* GraphQL */ `
  query ItemsByUserId {
    itemsByUserId {
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
      forSale
    }
  }
`);

const MyItems = () => {
  const { data, loading, error } = useQuery(ITEMS_BY_USER_ID);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <SubHeader>My items</SubHeader>
      <div className="p-2 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-2">
        {data?.itemsByUserId?.length === 0 && (
          <h1 className="text-l">
            You dont have any items check the market to buy something
          </h1>
        )}
        {data?.itemsByUserId?.map((item: any) => (
          <MyItemCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default MyItems;
