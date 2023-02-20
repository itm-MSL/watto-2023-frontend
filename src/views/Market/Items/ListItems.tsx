import { useQuery } from '@apollo/client';
import { SubHeader } from '../../../components/subheader';
import { graphql } from '../../../gql';
import { ItemCard } from '../../../components/itemCard';
import { Item } from '../../../gql/graphql';

const ITEM_LIST = graphql(/* GraphQL */ `
  query ItemList {
    itemsExcludingOwnedByUser {
      id
      name
      model {
        id
        name
      }
      type {
        id
      }
      price
      user {
        id
        name
      }
    }
  }
`);

const MarketItems = () => {
  const { data, loading, error } = useQuery(ITEM_LIST);

  if (loading) return <div className="animate-spin">.</div>;
  if (error)
    return (
      <div>
        Error: {error.message}
        {(window.location.href = '/login')}
      </div>
    );
  return (
    <>
      <SubHeader>Items for sale</SubHeader>
      <div className="p-2 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-2">
        {data?.itemsExcludingOwnedByUser?.map((item: any) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default MarketItems;
