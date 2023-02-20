import { Link, Outlet } from 'react-router-dom';
import { NavButton } from './components/navButton';

function App() {
  return (
    <>
      <div className="flex flex-col mx-4 mt-4 px-4 bg-amber-800 rounded-2xl">
        <h1 className="text-4xl text-white font-semibold m-4 text-center">
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
      <section className="mx-4 p-4">
        {/* Outlet for Login, Market, Add inventory, Profile or Logout view */}
        <Outlet />
      </section>
    </>
  );
}

export default App;
