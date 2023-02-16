import ProfileMyItems from './ProfileMyItems';
import ProfileMe from './ProfileMe';
import { Header } from '../../components/header';

const Profile = () => {
  return (
    <>
      <Header>My Profile</Header>
      <div className="grid grid-cols-2">
        <ProfileMe />
        <ProfileMyItems />
      </div>
    </>
  );
};

export default Profile;
