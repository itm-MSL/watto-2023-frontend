import React from 'react';
import { useMutation } from '@apollo/client';
import { graphql } from '../gql';
import { Header } from '../components/header';
import { Button } from '../components/button';
import { Input } from '../components/input';

const SIGNUP_MUTATION = graphql(/* GraphQL */ `
  mutation Signup(
    $username: String!
    $password: String!
    $name: String!
    $credits: Float!
  ) {
    signup(
      username: $username
      password: $password
      name: $name
      credits: $credits
    ) {
      result {
        token
      }
      messages {
        message
      }
    }
  }
`);

export const Signup = () => {
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const attrs = {
      username: data.get('username') as string,
      password: data.get('password') as string,
      name: data.get('name') as string,
      credits: data.get('credits'),
    };
    if (!attrs.username || !attrs.password) return;

    signup({
      variables: {
        username: attrs.username,
        password: attrs.password,
        name: attrs.name,
        credits: Number(attrs.credits),
      },
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <Header>Signup</Header>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <Input label="Username" type="text" name="username"></Input>
        <Input label="password" type="password" name="password"></Input>
        <Input label="Name" type="text" name="name"></Input>
        <Input label="Credits" type="number" name="credits"></Input>
        <Button type="submit">Signup</Button>
      </form>

      {loading && <div className="animate-spin ">.</div>}
      {error && <div> {error.message} </div>}
      {data && !error && (
        <div>
          Welcome to the marketplace
          {JSON.stringify(data.signup?.result?.user?.name)}
        </div>
      )}
    </div>
  );
};
