import React from "react";
import * as Elements from "./Elements.login";
import Hero from "../../assets/images/bg.jpg";

const Login = () => {
  return (
    <>
      <Elements.LoginSection>
        <Elements.HeroWrapper>
          <Elements.Img src={Hero} alt="Hero" />
        </Elements.HeroWrapper>

        <Elements.FormSection>
          <Elements.FormContainer>
            <div>
              <Elements.Heading>
                <h1>Crypto App</h1>
                <h2>Log in to your account</h2>
              </Elements.Heading>
            </div>

            <Elements.Form>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                  autoFocus
                  autoComplete="true"
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="email">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  required
                />
              </div>

              <button type="submit">Log In</button>
            </Elements.Form>

            <hr />

            <Elements.Button type="button">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="w-6 h-6"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <path
                      id="a"
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    />
                  </defs>
                  <clipPath id="b">
                    <use xlinkHref="#a" overflow="visible" />
                  </clipPath>
                  <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                  <path
                    clipPath="url(#b)"
                    fill="#EA4335"
                    d="M0 11l17 13 7-6.1L48 14V0H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#34A853"
                    d="M0 37l30-23 7.9 1L48 0v48H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#4285F4"
                    d="M48 48L17 24l-4-3 35-10z"
                  />
                </svg>
                <span className="ml-4">Log in with Google</span>
              </div>
            </Elements.Button>

            <p className="mt-8">
              Need an account?
              <a
                href="www.google.com"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Create an account
              </a>
            </p>

            <p className="text-sm text-gray-500 mt-12">
              &copy; 2021 Talwind - All Rights Reserved.
            </p>
          </Elements.FormContainer>
        </Elements.FormSection>
      </Elements.LoginSection>
    </>
  );
};

export default Login;
