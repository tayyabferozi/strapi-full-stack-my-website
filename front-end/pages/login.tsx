import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import isEmpty from "../utils/is-empty";
import { setJWT } from "../utils/jwtUtils";
import AppHead from "./partials/Head";

interface FormType {
  identifier: string;
  password: string;
}

interface ErrType {
  identifier: string;
  password: string;
  msg?: string;
}

const initialFormState = {
  identifier: "",
  password: "",
};

const Login: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormType>(initialFormState);
  const [errState, setErrState] = useState<ErrType>({
    identifier: "",
    password: "",
  });

  const router = useRouter();

  const inputChangeHandler = (e: any) => {
    const { name, value } = e.target;

    setFormState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const registerHandler = (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    setErrState(initialFormState);

    axios
      .post("/auth/local", formState)
      .then((res) => {
        toast.success("Your account has been registered successfully!");
        setJWT(res.data.jwt);
        router.push("/");
      })
      .catch((err) => {
        const errObj: any = {};
        const errArr = err?.response?.data?.error?.details?.errors;
        const msg: string = err?.response?.data?.error?.message;
        if (!isEmpty(errArr)) {
          errArr.forEach((el: any) => {
            errObj[el.path[0]] = el.message;
          });

          setErrState(errObj);
        } else if (msg) {
          setErrState((prevState) => {
            return { ...prevState, msg };
          });
        } else {
          toast.error("Uh Oh! Something went wrong. Please try again!");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <AppHead forwardAuthenticated title="Login" />
      <Navbar />
      <main className="page login-page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">Log In</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <Form noValidate onSubmit={registerHandler}>
              <Alert
                show={!!errState.msg}
                variant="danger"
                onClose={() =>
                  setErrState((prevState) => {
                    return { ...prevState, msg: "" };
                  })
                }
                dismissible
              >
                {errState.msg}
              </Alert>
              <div className="mb-3">
                <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    className="item"
                    type="email"
                    id="email"
                    name="identifier"
                    onChange={inputChangeHandler}
                    value={formState.identifier}
                    isInvalid={!isEmpty(errState.identifier)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errState.identifier}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="mb-3">
                <Form.Group>
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control
                    className="item"
                    type="password"
                    id="password"
                    name="password"
                    onChange={inputChangeHandler}
                    value={formState.password}
                    isInvalid={!isEmpty(errState.password)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errState.password}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox"
                  />
                  <label className="form-check-label" htmlFor="checkbox">
                    Remember me
                  </label>
                </div>
              </div>
              <Button disabled={isLoading} variant="primary" type="submit">
                Log In
              </Button>
            </Form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Login;
