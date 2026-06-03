import './login.scss';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { UserData } from '../../App';
import appNamesArray from '../../data/appNames';











const Login = () => {
  const brand_name = appNamesArray[0];
  const navigate = useNavigate();

  const { userInfo } = useContext(UserData);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorExists, setEmailErrorExists] = useState(false);
  const [passwordErrorExists, setPasswordErrorExists] = useState(false);
  const [otherError, setOtherError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  // component always displays from top on initial render.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);


  const TogglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const UpdateEmail = (event) => {
    setEmailErrorExists(false);
    setEmail(event.target.value.trim());
  };

  const UpdatePassword = (event) => {
    setPasswordErrorExists(false);
    setPassword(event.target.value);
  };



  const SignInUser = async () => {
    try {
      setEmailErrorExists(false);
      setPasswordErrorExists(false);
      setOtherError(null);

      if (email.length < 1 || password.length < 1) {
        if (email.length < 1) {
          setEmailErrorExists(true);
        } else {
          setEmailErrorExists(false);
        }

        if (password.length < 1) {
          setPasswordErrorExists(true);
        } else {
          setPasswordErrorExists(false);
        }
      } else {
        // create a new user
        console.log( userInfo )
      }
    } catch (error) {
      // handle errors appropriately
    }
  };

return (
  <div className="login">
    <section className="login__brand">
      <h3
        className="login__brand-logo"
        onClick={() => navigate('/')}
      >
        {brand_name}
      </h3>
    </section>

    <section className="login__account">
      <h4 className="login__title">
        Login to your account
      </h4>

      <p className="login__error-message">
        {otherError ? otherError : null}
      </p>

      <h4 className="login__user-email mb-5">
        current user email
      </h4>
    </section>

    <section className="login__form-wrapper">
      <Form>
        <Row md={2} xs={1} sm={1}>
          <Col>
            <div className="login__field">
              <InputGroup
                className={
                  emailErrorExists
                    ? 'login__input-group login__input-group--error'
                    : 'login__input-group'
                }
              >
                <Form.Control
                  className="login__input login__input--email"
                  type="email"
                  placeholder="E-mail *"
                  onChange={UpdateEmail}
                  value={email}
                />

                <InputGroup.Text className="login__input-icon">
                  <AiOutlineMail />
                </InputGroup.Text>
              </InputGroup>
            </div>
          </Col>

          <Col>
            <div className="login__field">
              <InputGroup
                className={
                  passwordErrorExists
                    ? 'login__input-group login__input-group--error'
                    : 'login__input-group'
                }
              >
                <Form.Control
                  className="login__input login__input--password"
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder="Password *"
                  onChange={UpdatePassword}
                  value={password}
                />

                <InputGroup.Text
                  className="login__input-icon login__input-icon--clickable"
                  onClick={TogglePasswordVisible}
                >
                  {passwordVisible ? (
                    <BsFillEyeFill />
                  ) : (
                    <BsFillEyeSlashFill />
                  )}
                </InputGroup.Text>
              </InputGroup>
            </div>
          </Col>
        </Row>

        <Button
          variant="custom"
          className="login__submit-button mb-3"
          onClick={SignInUser}
        >
          Sign in
        </Button>

        <section className="login__footer">
          <Row>
            <p className="login__create-account">
              Don't have an account?{' '}
              <span
                className="login__link"
                onClick={() => navigate('/sign-up')}
              >
                Create One
              </span>
            </p>

            <p className="login__forgot-password">
              Forgot password?
            </p>

            <p className="login__terms">
              By signing in, I agree to the{' '}
              <span className="login__link">
                Terms and Conditions
              </span>{' '}
              and{' '}
              <span className="login__link">
                Privacy Statement
              </span>
            </p>
          </Row>
        </section>
      </Form>
    </section>
  </div>
);
};

export default Login;
