import { Header } from '../../components/header';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '../../components/button';

const handleOnLogout = () => {
  localStorage.removeItem('token');
  window.location.reload();
};

const Profile = () => {
  return (
    <>
      <Header>Profile</Header>
      <nav>
        <Link className="p-2" to={'/profile/me'}>
          <Button> Me </Button>
        </Link>

        <Link className="p-2" to={'/profile/inventory'}>
          <Button> Inventory </Button>
        </Link>

        <Link className="m-2" to={'/login'}>
          <Button onClick={handleOnLogout}>Logout</Button>
        </Link>
      </nav>
      {/* Outlet for Me or Inventory view */}
      <Outlet />
    </>
  );
};

export default Profile;
