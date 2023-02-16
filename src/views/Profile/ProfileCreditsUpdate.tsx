import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { graphql } from '../../gql';
import { useMutation } from '@apollo/client';

const USER_CREDITS_UPDATE = graphql(/* GraphQL */ `
  mutation UserCreditsUpdate($userId: Int!, $credits: Float!) {
    userCreditsUpdate(userId: $userId, credits: $credits) {
      successful
      result {
        id
        credits
      }
    }
  }
`);

const ProfileCreditsUpdate = ({ myuserId }: { myuserId: number }) => {
  const [userCreditsUpdate, { data, loading, error }] =
    useMutation(USER_CREDITS_UPDATE);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userId = myuserId;
    const credits = data.get('credits');
    userCreditsUpdate({
      variables: {
        userId: Number(userId),
        credits: Number(credits),
      },
    });
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 bg-blue-50 m-2 p-2"
      >
        <Input label="Credits" type="number" name="credits"></Input>
        <Button type="submit">Add</Button>
      </form>

      {loading && <div className="animate-spin ">.</div>}
      {error && <div> {error.message} </div>}
      {data && !error && (
        <div>
          Updated credits to: {''}
          {JSON.stringify(data.userCreditsUpdate?.result?.credits)}
        </div>
      )}
    </>
  );
};

export default ProfileCreditsUpdate;
