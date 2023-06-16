import Button from "../login/form/button/button";
import Checkbox from "../login/form/checkbox/checkbox";
import FieldName from "../login/form/field/field";
import FooterDescription from "../login/footer/footer";
import Heading from "../login/header/heading/heading";
import Input from "../login/form/input/input";
import LogoDisplay from "../login/header/logo/logo";
import '../login/login.css'

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
      <div className="body" >
          <div className='loginBody'>
            <Header />
            <Form />
            <Footer />
        </div>
      </div>
    );
}
  
export default SignUp;