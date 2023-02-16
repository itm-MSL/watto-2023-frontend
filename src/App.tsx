import { Header } from './components/header';
import { Button } from './components/button';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="flex flex-col m-4 p-4 bg-blue-500 rounded-t-2xl">
        <Header> Watto's marketplace </Header>
        <nav>
          <Link to={'/signup'}>
            <Button> Signup </Button>
          </Link>

          <Link to={'/login'}>
            <Button> Login </Button>
          </Link>

          <Link to={'/market'}>
            <Button> Market</Button>
          </Link>

          <Link to={'/market/create'}>
            <Button> Add inventory </Button>
          </Link>

          <Link to={'/profile'}>
            <Button> My profile </Button>
          </Link>
        </nav>
      </div>
      <section className="m-4 p-4">
        <Outlet />
      </section>
    </>
  );
}

export default App;
