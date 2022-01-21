import Image from 'next/image';
import Logo from '../src/images/logo.png'
const index = () => {
  return (
    <div>
      <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1642744232/logo_upg6p6.png"} width={1900} height={900} />
      <div className="title">
      <h1>Coming Soon</h1>
      </div>
    </div>
  );
};

export default index;
