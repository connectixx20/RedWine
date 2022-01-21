import Image from 'next/image';
import Logo from '../src/images/logo.png'
const index = () => {
  return (
    <div>
      <Image src={Logo} width={300} height={300} />
      <h1>Currently In Production</h1>
    </div>
  );
};

export default index;
