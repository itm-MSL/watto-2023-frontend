import { Link, Outlet } from 'react-router-dom';
import { Button } from '../../components/button';
import { Header } from '../../components/header';

const Market = () => {
  return (
    <>
      <Header>Market</Header>
      <nav>
        <Link className="p-2" to={'/market/items'}>
          <Button> Items </Button>
        </Link>

        <Link className="p-2" to={'/market/types'}>
          <Button> Types </Button>
        </Link>

        <Link className="p-2" to={'/market/models'}>
          <Button> Models </Button>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Market;
