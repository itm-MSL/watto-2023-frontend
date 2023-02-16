import { Button } from './components/button';
import { Link, Outlet } from 'react-router-dom';

const handleOnLogout = () => {
  localStorage.removeItem('token');
  window.location.reload();
};

function App() {
  return (
    <>
      <div className="flex flex-col m-4 p-4 bg-blue-500 rounded-t-2xl">
        <h1 className="text-4xl text-white font-semibold m-4">
          Watto's marketplace!
        </h1>
        <nav>
          <Link className="m-2" to={'/signup'}>
            <Button> Signup </Button>
          </Link>

          <Link className="m-2" to={'/login'}>
            <Button> Login </Button>
          </Link>

          <Link className="m-2" to={'/market'}>
            <Button> Market</Button>
          </Link>

          <Link className="m-2" to={'/market/create'}>
            <Button> Add inventory </Button>
          </Link>

          <Link className="m-2" to={'/profile'}>
            <Button> My profile </Button>
          </Link>

          <Link className="m-2" to={'/login'}>
            <Button onClick={handleOnLogout}>Logout</Button>
          </Link>
        </nav>
      </div>
      <section className="m-4 p-4 bg-blue-100 ">
        <Outlet />
      </section>
    </>
  );
}

export default App;
