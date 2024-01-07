import React, { useState } from "react";
import MainLayout from "@component/components/MainLayout";
import InputField from "@component/components/inputs/InputField";
import { Button } from "@component/components/button/Button";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (e: any) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLoginSubmit = (type: String) => {
    switch (type) {
      case "credentials":
        signIn("credentials", {
          redirect: false,
          password: credentials.password,
          username: credentials.username,
        }).then((res) => {
          if (res?.ok) router.push("/");
        });
        break;
      case "facebook":
        signIn("facebook");
        break;
      case "google":
        signIn("google");
        break;
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col mx-auto mt-24 w-1/3 h-min p-5">
        {/* <h1>Login</h1> */}
        <div className="flex flex-col gap-2">
          <InputField
            name="username"
            value={credentials.username}
            type={"username"}
            onChange={(e: any) => handleLoginChange(e)}
            placeholder={"Username"}
            required
          />
          <InputField
            name="password"
            value={credentials.password}
            type={"password"}
            onChange={(e: any) => handleLoginChange(e)}
            placeholder={"Password"}
            required
          />

          <Button
            type="medium"
            children="Login"
            color="white"
            buttonColor="defaultGreen"
            additionalClasses="w-full"
            handleClick={() => handleLoginSubmit("credentials")}
          />

          <Button
            type="mediumIconLeft"
            children="Login with Facebook"
            color="lightBlack"
            buttonColor="white"
            icon={<FaFacebook />}
            handleClick={() => handleLoginSubmit("facebook")}
            fullWidth
          />

          <Button
            type="mediumIconLeft"
            children="Login with Google"
            color="lightBlack"
            buttonColor="white"
            icon={<FaGooglePlusG />}
            handleClick={() => handleLoginSubmit("google")}
            fullWidth
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
