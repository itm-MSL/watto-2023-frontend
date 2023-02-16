import { SubHeader } from '../../components/subheader';
import ProfileCreditsUpdate from './ProfileCreditsUpdate';
import ProfileMyItems from './ProfileMyItems';
import ProfileMe from './ProfileMe';

const Profile = () => {
  return (
    <>
      <SubHeader>My Profile:</SubHeader>
      <div className="grid grid-cols-2">
        <ProfileMe />
        <ProfileMyItems />
      </div>
    </>
  );
};

export default Profile;
