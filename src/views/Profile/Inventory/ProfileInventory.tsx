import React from 'react';
import ProfileMe from '../Me/ProfileMe';
import ProfileMyItems from './ProfileMyItems';
import { useQuery } from '@apollo/client';
import { graphql } from '../../../gql';

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

const ProfileInventory = () => {
  const { data, loading, error } = useQuery(ME);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <ProfileMyItems userId={Number(data?.me?.id)} />
    </div>
  );
};

export default ProfileInventory;
