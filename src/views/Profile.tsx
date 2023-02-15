import { useQuery } from '@apollo/client';
import { Link, Outlet } from 'react-router-dom';
import { SubHeader } from '../components/subheader';
import { graphql } from '../gql';

const ME = graphql(/* GraphQL */ `
  query Me {
    me {
      id
      name
      username
      credits
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
          <h1>UserId: {data?.me?.id}</h1>
          <h2>UserName: {data?.me?.username}</h2>
          <p>Name: {data?.me?.name} </p>
          <p>Credits: {data?.me?.credits}</p>
        </div>
      </div>

      <SubHeader>Add Credits</SubHeader>

      <div className="p-2 bg-green-50 grid grid-cols-2">
        <div className="grid">
          <label>Credits to add: </label>
          <input type="number" />
        </div>
      </div>
    </>
  );
};

export default Profile;
