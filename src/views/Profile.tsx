import { useQuery } from '@apollo/client';
import { Link, Outlet } from 'react-router-dom';
import { SubHeader } from '../components/subheader';
import { graphql } from '../gql';

const ME = graphql(/* GraphQL */ `
  query Me {
    me {
      result {
        id
        name
        username
        credit
      }
    }
  }
`);

const Profile = () => {
  const { data, loading, error } = useQuery(ME);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  return (
    <>
      <SubHeader>My Profile:</SubHeader>

      <div className="p-2 bg-green-50 grid grid-cols-2">
        <div className="grid">
          <h1>UserId: {data?.me?.result?.id}</h1>
          <h2>UserName: {data?.me?.result?.username}</h2>
          <p>Name: {data?.me?.result?.name} </p>
          <p>Credits: {data?.me?.result?.credit}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
