import { useQuery } from '@apollo/client';
import { Link, Outlet } from 'react-router-dom';
import { SubHeader } from '../../components/subheader';
import { graphql } from '../../gql';

const ITEMS_BY_USER_ID = graphql(/* GraphQL */ `
  query ItemsByUserId($userId: Int!) {
    itemsByUserId(userId: $userId) {
      id
      name
      model {
        id
      }
      type {
        id
      }
      price
    }
  }
`);

const ProfileMyItems = () => {
  const { data, loading, error } = useQuery(ITEMS_BY_USER_ID, {
    variables: {
      userId: 1,
    },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="p-2 bg-blue-100 grid">
        <SubHeader>My items:</SubHeader>
        {data?.itemsByUserId?.map((item: any) => (
          <div key={item.id} className="flex flex-col bg-blue-50">
            <div className="hover:italic border-2 rounded-md shadow-md py-2 my-2 mx-4 px-4">
              {item.name}
            </div>
          </div>
        ))}
      </div>
      <div className="grid bg-blue-50 ml-2 shadow-md"></div>
    </>
  );
};

export default ProfileMyItems;
