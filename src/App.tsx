import { Link, Outlet } from 'react-router-dom';
import { NavButton } from './components/navButton';
function App() {
  return (
    <>
      <div className="flex flex-col px-4 bg-header-image bg-center border-b-2 border-black sticky top-0 z-50 ">
        <nav className="flex justify-between my-4 ">
          <div>
            <Link className="m-2" to={'/home'}>
              <NavButton> Wattos marketplace</NavButton>
            </Link>
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
