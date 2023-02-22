import { Link, Outlet } from 'react-router-dom';
import { NavButton } from './components/navButton';

function App() {
  return (
    <>
      <div className="flex flex-col px-4 bg-white border-b-2 border-black sticky top-0 z-50 ">
        <h1 className="text-4xl text-black font-semibold m-4 text-center">
          Watto's marketplace!
        </h1>
        <nav className="flex justify-center">
          <Link className="m-2" to={'/login'}>
            <NavButton> Login </NavButton>
          </Link>

          <Link className="m-2" to={'/market/items'}>
            <NavButton> Market</NavButton>
          </Link>

          <Link className="m-2" to={'/profile/me'}>
            <NavButton> Profile </NavButton>
          </Link>
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
