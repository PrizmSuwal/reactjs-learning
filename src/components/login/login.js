import Button from './form/button/button';
import Checkbox from './form/checkbox/checkbox';
import FieldName from './form/field/field';
import Input from './form/input/input';
import Heading from './header/heading/heading';
import LogoDisplay from './header/logo/logo';
import SubHeading from './header/sub-heading/sub-heading';
import FooterDescription from './footer/footer';
import './login.css';

function Header() {
    return (
      <div>
        <LogoDisplay />
        <Heading title='Log into Dashboard kit'/>
        <SubHeading title='Enter your email and password below'/>
      </div>
    );
}
  
function Form() {
    return (
      <div>
        <form className='form'>
          <FieldName label='Email' />
          <Input placeholder='Email' type='text' />
          <FieldName label='Password' />
          <Input placeholder='Password' type='password' />
          <Checkbox name='Remember me' />
          <Button name='Log In'/>
        </form>
      </div>
    );
}
  
//footer
  
function Footer() {
    return (
      <div>
        <FooterDescription title="Don't have an account?" link="/signup" linkValue="Sign Up"/>
      </div>
    );
}
  
  
function Login() {
    return (
      <div className='loginBody'>
        <Header />
        <Form />
        <Footer />
      </div>
     
    );
}
  
export default Login;