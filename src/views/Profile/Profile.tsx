import ProfileMyItems from './ProfileMyItems';
import ProfileMe from './ProfileMe';
import { Header } from '../../components/header';
import { useQuery } from '@apollo/client';
import { graphql } from '../../gql';

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
  return (
    <>
      <Header>My Profile</Header>
      <div className="md:grid md:grid-cols-2 flex flex-col">
        <ProfileMe />
        <ProfileMyItems userId={Number(data?.me?.id)} />
      </div>
    </>
  );
};

export default Profile;
