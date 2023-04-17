import { useDispatch } from "react-redux";
import * as authOperation from "../../redux/auth/authOperation";
import { CgLock } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import { AuthBg, Button, Box, Input, BoxWraper, Image, Container, InputWraper, StyledLink } from "./Register.styled";
import { getColor } from "utils/formikColors";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import sprite from "../../images/sprite.svg";
import { ToastContainer } from "react-toastify";

const emailRegexp =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const Register = () => {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .matches(/^[a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]+$/, {
        message: "Special symbols are not allowed",
        excludeEmptyString: true,
      })
      .min(1, "Your name must be 1 character at least")
      .max(16, "16 characters max")
      .required("Type your name please"),
    email: Yup.string()
      .matches(emailRegexp, {
        message: "incorrect Email",
        name: "email",
        excludeEmptyString: true,
      })
      .min(5, "Your email is too short")
      .max(254, "Your email is too long")
      .lowercase()
      .required("Type your email please"),
    password: Yup.string()
      .trim()
      .matches(
        /^[a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$/,
        "Special symbols are not allowed"
      )
      .min(6, "Your password is too short")
      .max(16, "Your password must be 16 characters max")
      .matches(/[1-9]/, {
        message: "Your password is little secure. Add a number!",
        name: "password",
      })
      .matches(/[a-zа-яA-ZА-ЯіїЇІєЄ]/, {
        message: "Your password is little secure. Add a letter!",
        name: "password",
      })
      .required("Type your password please"),
  });

  const navigate = useNavigate();

  function navigateToSignin() {
    navigate("/signin");
  }

  return (
    <AuthBg>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Container>
        <Image />
        <BoxWraper>
          <Box>
            <h1>Registration</h1>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              // isSubmitting={true}
              validationSchema={schema}
              onSubmit={async (values, actions) => {
                const { name, email, password } = values;
                await dispatch(authOperation.register({ name, email, password }));
                navigateToSignin();
              }}
            >
              {(props) => (
                <Form>
                  <InputWraper>
                    <Input
                      autoComplete="off"
                      type="text"
                      name="name"
                      required
                      onChange={props.handleChange}
                      placeholder="Name"
                      onBlur={props.handleBlur}
                      value={props.values.name}
                      color={getColor(props.errors.name, props.values.name, "rgba(255, 255, 255, 0.8)")}
                      borderColor={getColor(props.errors.name, props.values.name, "rgba(255, 255, 255, 0.3)")}
                    />
                    <FiUser
                      className="icon"
                      color={getColor(props.errors.name, props.values.name, "rgba(255, 255, 255, 0.8)")}
                    ></FiUser>
                  </InputWraper>
                  <InputWraper>
                    <Input
                      autoComplete="off"
                      type="email"
                      name="email"
                      required
                      onFocus={props.handleBlur}
                      onBlur={props.handleBlur}
                      onChange={props.handleChange}
                      placeholder="Email"
                      value={props.values.email}
                      color={getColor(props.errors.email, props.values.email, "rgba(255, 255, 255, 0.8)")}
                      borderColor={getColor(props.errors.email, props.values.email, "rgba(255, 255, 255, 0.3)")}
                    />
                    <HiOutlineMail
                      className="icon"
                      color={getColor(props.errors.email, props.values.email, "rgba(255, 255, 255, 0.8)")}
                    ></HiOutlineMail>
                    {props.values.email && (
                      <div>
                        <svg className="statusIcon">
                          <use
                            href={`${sprite}${getColor(
                              props.errors.email,
                              props.values.email,
                              "rgba(255, 255, 255, 0.8)"
                            )}`}
                          ></use>
                        </svg>
                      </div>
                    )}
                    <ErrorMessage
                      color={getColor(props.errors.email, props.values.email, "rgba(255, 255, 255, 0.8)")}
                      className="error"
                      name="email"
                      component="div"
                    />
                  </InputWraper>
                  <InputWraper>
                    <Input
                      autoComplete="off"
                      type="password"
                      name="password"
                      required
                      onChange={props.handleChange}
                      placeholder="password"
                      onFocus={props.handleBlur}
                      onBlur={props.handleBlur}
                      value={props.values.password}
                      color={getColor(props.errors.password, props.values.password, "rgba(255, 255, 255, 0.8)")}
                      borderColor={getColor(props.errors.password, props.values.password, "rgba(255, 255, 255, 0.3)")}
                    />
                    <CgLock
                      className="icon"
                      color={getColor(props.errors.password, props.values.password, "rgba(255, 255, 255, 0.8)")}
                    />
                    {props.values.password && (
                      <div>
                        <svg className="statusIcon">
                          <use
                            href={`${sprite}${getColor(
                              props.errors.password,
                              props.values.password,
                              "rgba(255, 255, 255, 0.8)"
                            )}`}
                          ></use>
                        </svg>
                      </div>
                    )}
                    <ErrorMessage
                      color={getColor(props.errors.password, props.values.password, "rgba(255, 255, 255, 0.8)")}
                      className="error"
                      name="password"
                      component="div"
                    />
                  </InputWraper>
                  <Button
                    type="submit"
                    disabled={props.errors.password || props.errors.email || props.errors.name ? true : false}
                  >
                    Sign up
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
          <StyledLink className={"nav_Link"} to={"/signin"}>
            Sign in
          </StyledLink>
        </BoxWraper>
      </Container>
    </AuthBg>
  );
};
export default Register;
