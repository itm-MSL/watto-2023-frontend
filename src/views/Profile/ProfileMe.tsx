import { useQuery } from '@apollo/client';
import { SubHeader } from '../../components/subheader';
import { graphql } from '../../gql';
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

const ProfileMe = () => {
  const { data, loading, error } = useQuery(ME);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <SubHeader>My info:</SubHeader>
      <div className="p-2 bg-blue-100 grid">
        <div className="p-2 flex flex-col gap-3 bg-blue-50">
          <h1>UserId: {data?.me?.id}</h1>
          <h2>UserName: {data?.me?.username}</h2>
          <p>Name: {data?.me?.name} </p>
          <p>Credits: {data?.me?.credits}</p>
          <ProfileCreditsUpdate myuserId={Number(data?.me?.id)} />
        </div>
      </div>
    </div>
  );
};

export default ProfileMe;
