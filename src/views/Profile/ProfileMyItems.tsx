import { useQuery } from '@apollo/client';
import { SubHeader } from '../../components/subheader';
import { graphql } from '../../gql';

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
      <SubHeader>My items:</SubHeader>
      <div className="p-2 bg-blue-100 grid">
        {data?.itemsByUserId?.map((item: any) => (
          <div key={item.id} className="flex flex-col bg-blue-50">
            <div className="hover:italic border-2 rounded-md shadow-md py-2 my-2 mx-4 px-4">
              {item.name.toUpperCase()}
              {' Date: '} {item.updatedAt.slice(0, 10)}
              {' Time: '} {item.updatedAt.slice(11, 19)}
              {' Price: '} {item.price.toFixed(2)} {''}
            </div>
          </div>
        ))}
      </div>
      <div className="grid bg-blue-50 ml-2 shadow-md"></div>
    </div>
  );
};

export default ProfileMyItems;
