import { SubHeader } from '../components/subheader';
import watto from '../assets/watto.jpg';
export const Home = () => {
  return (
    <div>
      <SubHeader>The man the myth the legend</SubHeader>
      <img src={watto}></img>
    </div>
  );
};
