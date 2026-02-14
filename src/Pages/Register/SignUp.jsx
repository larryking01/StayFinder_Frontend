import './signUp.css';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import {
  BsFillEyeSlashFill,
  BsFillEyeFill,
  BsFillPersonFill,
} from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import axios from 'axios';

import { UserData } from '../../App';
import appNamesArray from '../../data/appNames';











const SignUp = () => {
  const api_url = process.env.REACT_APP_DEV_API_URL;
  const brand_name = appNamesArray[0];


  const navigate = useNavigate();
  const { userInfo } = useContext(UserData);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // handling user input errors
  const [hasFirstNameError, setHasFirstNameError] = useState(false);
  const [hasLastNameError, setHasLastNameError] = useState(false);
  const [hasEmailError, setHasEmailError] = useState(false);
  const [hasPasswordError, setHasPasswordError] = useState(false);
  const [hasConfirmPasswordError, setHasConfirmPasswordError] =
    useState(false);
  // const [hasPasswordsMismatchError, setHasPasswordsMismatchError] = useState(false);

  // const [firstNameErrorMessage, setFirstNameErrorMessage] = useState(null);
  // const [lastNameErrorMessage, setLastNameErrorMessage] = useState(null);
  // const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  // const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);
  // const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
  //   useState(null);
  // const [passwordsMismatchErrorMessage, setPasswordsMismatchErrorMessage] = useState(false)

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [otherError, setOtherError] = useState(null);

  // component always displays from top on initial render.
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  // updating state values.
  const UpdatefirstName = (event) => {
    setHasFirstNameError(false);
    setFirstName(event.target.value.trim());
  };

  const UpdatelastName = (event) => {
    setHasLastNameError(false);
    setLastName(event.target.value.trim());
  };

  const UpdateEmail = (event) => {
    setHasEmailError(false);
    setEmail(event.target.value.trim());
  };

  const UpdatePassword = (event) => {
    setHasPasswordError(false);
    setPassword(event.target.value);
  };

  const UpdateConfirmPassword = (event) => {
    setHasConfirmPasswordError(false);
    setConfirmPassword(event.target.value);
  };

  const TogglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const ToggleConfirmPasswordVisible = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const CreateNewUser = async () => {
      setHasFirstNameError(false);
      setHasLastNameError(false);
      setHasEmailError(false);
      setHasPasswordError(false);
      setHasConfirmPasswordError(false);
      setOtherError(null);

      if( !firstName || !lastName || !email || !password || !confirmPassword ) {
        if (!firstName) {
          console.log("first name is required")
        } 
        else {
          setHasFirstNameError(false);
        }

        if (!lastName) {
          setHasLastNameError(true);
          console.log("last name is required")
        } else {
          setHasLastNameError(false);
        }

        if (!email) {
          setHasEmailError(true);
          console.log("e-mail is required")
        } else {
          setHasEmailError(false);
        }

        if (!password) {
          setHasPasswordError(true);
          console.log("password is required")
        } else {
          setHasPasswordError(false);
        }

        if (!confirmPassword) {
          setHasConfirmPasswordError(true);
          console.log("confirm password is required")
        } else {
          setHasConfirmPasswordError(false);
        }
      }
      else {
        if( password !== confirmPassword ) {
          console.log("Password and confirm passwords must match")
        }
        else {
          let signUpPayload = {
            firstName,
            lastName,
            email,
            password
          }

          axios.post(`${ api_url }/auth/register`, signUpPayload)
          .then( response => {
            console.log("sign up response = ", response.data)
          })
          .catch( error => {
            console.log("sign up error, ", error)
          })
        }
      }

  };


  return (
    <div className="sign-up-wrapper">
      <section>
        <h3 className="log-in-brand-logo" onClick={() => navigate('/')}>
          {brand_name}
        </h3>
      </section>

      <section className="create-account-section">
        <h4 className="sign-up-header-text">Create an account</h4>
        <p className="other-error-text">{otherError ? otherError : null}</p>
        <h4 className="sign-up-header-text mb-5">
          {userInfo.email ? userInfo.email : ''}
        </h4>
      </section>

      <section className="sign-up-form">
        <Form>
          <Row md={2} xs={1} sm={1}>
            <Col>
              <div className="input-group-margin">
                <InputGroup
                  className={
                    hasFirstNameError
                      ? 'input-group-error'
                      : 'input-group-style'
                  }
                >
                  <Form.Control
                    className="signup-control-focus-style"
                    type="text"
                    placeholder="First name *"
                    onChange={UpdatefirstName}
                    value={firstName}
                  />
                  <InputGroup.Text>{<BsFillPersonFill />}</InputGroup.Text>
                </InputGroup>
              </div>
            </Col>

            <Col>
              <div className="input-group-margin">
                <InputGroup
                  className={
                    hasLastNameError
                      ? 'input-group-error'
                      : 'input-group-style'
                  }
                >
                  <Form.Control
                    className="signup-control-focus-style"
                    type="text"
                    placeholder="Last name *"
                    onChange={UpdatelastName}
                    value={lastName}
                  />
                  <InputGroup.Text>{<BsFillPersonFill />}</InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
          </Row>

          <Row md={2} xs={1} sm={1}>
            <Col>
              <div className="input-group-margin">
                <InputGroup
                  className={
                    hasEmailError ? 'input-group-error' : 'input-group-style'
                  }
                >
                  <Form.Control
                    className="signup-control-focus-style"
                    type="email"
                    placeholder="E-mail *"
                    onChange={UpdateEmail}
                    value={email}
                  />
                  <InputGroup.Text>{<AiOutlineMail />}</InputGroup.Text>
                </InputGroup>
              </div>
            </Col>

            <Col>
              <div className="input-group-margin">
                <InputGroup
                  className={
                    hasPasswordError
                      ? 'input-group-error'
                      : 'input-group-style'
                  }
                >
                  <Form.Control
                    className="signup-control-focus-style"
                    type={passwordVisible ? 'text' : 'password'}
                    placeholder="Password *"
                    onChange={UpdatePassword}
                    value={password}
                  />
                  <InputGroup.Text
                    className="input-group-text"
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

          <Row md={2} xs={1} sm={1}>
            <Col>
              <div className="input-group-margin">
                <InputGroup
                  className={
                    hasConfirmPasswordError
                      ? 'input-group-error'
                      : 'input-group-style'
                  }
                >
                  <Form.Control
                    className="signup-control-focus-style"
                    type={confirmPasswordVisible ? 'text' : 'password'}
                    placeholder="Confirm password *"
                    onChange={UpdateConfirmPassword}
                    value={confirmPassword}
                  />
                  <InputGroup.Text
                    className="input-group-text"
                    onClick={ToggleConfirmPasswordVisible}
                  >
                    {confirmPasswordVisible ? (
                      <BsFillEyeFill />
                    ) : (
                      <BsFillEyeSlashFill />
                    )}
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Col>

            <Col>
              <div className="input-group-margin">
                <Button
                  variant="custom"
                  className="sign-up-btn"
                  onClick={CreateNewUser}
                >
                  Create account
                </Button>
              </div>
            </Col>
          </Row>

          <section>
            <Row>
              <p className="sign-up-already-account-text">
                Already have an account?{' '}
                <span
                  className="sign-in-span"
                  onClick={() => navigate('/login')}
                >
                  Sign in
                </span>
              </p>
            </Row>

            <Row className="mb-3">
              <p className="sign-up-tnc-text">
                By signing up, I agree to the{' '}
                <span className="tnc-span">Terms and Conditions</span> and{' '}
                <span className="tnc-span">Privacy Statement</span>
              </p>
            </Row>
          </section>
        </Form>
      </section>
    </div>
  );
};

export default SignUp;
