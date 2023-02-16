import { useQuery } from '@apollo/client';
import { SubHeader } from '../components/subheader';
import { graphql } from '../gql';
import ProfileCreditsUpdate from './ProfileCreditsUpdate';
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
        <ProfileCreditsUpdate />
      </div>
    </>
  );
};

export default Profile;
