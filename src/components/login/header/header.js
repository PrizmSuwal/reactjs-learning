import Heading from './heading/heading';
import LogoDisplay from './logo/logo';
import SubHeading from './sub-heading/sub-heading';

export default function LoginHeader() {
  return (
    <div>
      <LogoDisplay />
      <Heading title="Log into Dashboard kit" />
      <SubHeading title="Enter your email and password below" />
    </div>
  );
}
