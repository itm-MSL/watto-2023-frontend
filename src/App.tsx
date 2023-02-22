import { useQuery } from '@apollo/client';
import { Link, Outlet } from 'react-router-dom';
import { NavButton } from './components/navButton';
import { graphql } from './gql';

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

function App() {
  const { data, loading, error } = useQuery(ME);
  if (loading) console.log();
  if (error) console.log(error);
  return (
    <>
      <div className="flex flex-col px-4 bg-header-image bg-center border-b-2 border-black sticky top-0 z-50 scrollbar-hide">
        <nav className="flex justify-between my-4">
          <div>
            <Link className="m-2" to={'/home'}>
              <NavButton> Wattos marketplace</NavButton>
            </Link>
            <h1 className="m-4 font-medium text-center italic bg-white rounded-md">
              Logged in as: {data?.me?.name}{' '}
            </h1>
          </div>
          <div>
            <Link className="m-2" to={'/login'}>
              <NavButton> Login </NavButton>
            </Link>

            <Link className="m-2" to={'/market/items'}>
              <NavButton> Market</NavButton>
            </Link>

            <Link className="m-2" to={'/profile/me'}>
              <NavButton> Profile </NavButton>
            </Link>
          </div>
        </nav>
      </div>

      <section className="mx-4 p-4 relative">
        {/* Outlet for Login, Market, Add inventory, Profile or Logout view */}
        <Outlet />
      </section>
    </>
  );
}

export default App;
