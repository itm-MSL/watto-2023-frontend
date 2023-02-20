import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { graphql } from '../gql';
import { Header } from '../components/header';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { Link } from 'react-router-dom';

const LOGIN_MUTATION = graphql(/* GraphQL */ `
  mutation Login($username: String!, $password: String!) {
    signin(username: $username, password: $password) {
      successful
      result {
        token
        user {
          id
          name
        }
      }
      messages {
        message
      }
    }
  }
`);

export const Login = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = new FormData(e.currentTarget);
    const attrs = {
      username: input.get('username') as string,
      password: input.get('password') as string,
    };
    if (!attrs.username || !attrs.password) return;

    login({
      variables: attrs,
    });
  };

  useEffect(() => {
    if (data?.signin?.successful) {
      localStorage.setItem('token', data.signin.result.token);
      console.log('token', data.signin.result.token);
    }
    console.log('result', data);
  }, [data]);

  return (
    <>
      <div className="flex flex-col gap-3">
        <Header>Login</Header>
        <Link to="/signup" className="italic">
          No account? - click here to create one
        </Link>
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <Input label="Username" type="text" name="username"></Input>
          <Input label="password" type="password" name="password"></Input>
          <Button type="submit">Login</Button>
        </form>

        {loading && <div className="animate-spin ">.</div>}
        {error && <div> {error.message} </div>}
        {data?.signin?.messages?.map((message) => (
          <div key={message?.message}> {message?.message} </div>
        ))}

        {data?.signin?.successful && !error && (
          <div> Welcome back {data.signin?.result?.user?.name}! </div>
        )}
      </div>
    </>
  );
};
