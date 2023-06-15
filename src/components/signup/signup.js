import Button from './form/button/button';
import Checkbox from './form/checkbox/checkbox';
import FieldName from './form/field/field';
import Input from './form/input/input';
import Heading from './header/heading/heading';
import LogoDisplay from './header/logo/logo';
import './login.css';

function Header() {
    return (
      <div>
        <LogoDisplay />
        <Heading title='Sign Up to Dashboard kit'/>
      </div>
    );
}
  
function Form() {
    return (
      <div>
        <form className='form'>
        <FieldName label='FullName' />
          <Input placeholder='Fullname' type='text' />
          <FieldName label='Email' />
          <Input placeholder='Email' type='text' />
          <FieldName label='Password' />
          <Input placeholder='Password' type='password' />
          <FieldName label='Confirm Password' />
          <Input placeholder='Confirm Password' type='password' />
          <Checkbox name='Remember me' />
          <Button name='Sign Up'/>
        </form>
      </div>
    );
}
  
function Footer() {
    return (
      <div>
        <FooterDescription title="Already have an account?" link="/login" linkValue="Log In"/>
      </div>
    );
}
  
function SignUp() {
    return (
      <div className='loginBody'>
        <Header />
        <Form />
        <Footer />
      </div>
     
    );
}
  
export default SignUp;