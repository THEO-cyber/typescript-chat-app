import React, {useState} from "react";
import Input from "./input";
import Button from "./Button";

const Login = () => {
    const [login, setLogin] = useState (true);
    const [email, setEmail] = useState ("")
    const [password, setpassword] = useState ("")
    const [confirmPassword, setconfirmPassword] = useState("");

    const handleSignup = () => {
        const data = {email, password, confirmPassword};
        console.log(data);
    }
    const handleSignin = () => {
        const data = {email, password};
        console.log(data);
    };

    return (
      <div className="w-full border-red-700 md:w-[450px]">
        <h1 className="text-white text-center font-bold  text-4xl md:text-6xl mb-10">
          {login ? "Login" : "Register"}
        </h1>
        <div className="flex flex-col gap-3 bg-white w-full p-6 min-h-[150px] rounded-xl drop-shadow-xl">
          <Input
            name=" Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name=" Password"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          {!login && (
            <Input
              name=" Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          )}
          {login ? (
            <>
              <Button text="Login" onClick={handleSignin}/>
              <Button
                onClick={() => setLogin(false)}
                text="Register"
                secondary
              />
            </>
          ) : (
            <>
              <Button text="Register" onClick={handleSignup}/>
              <Button onClick={() => setLogin(true)} text="Login" secondary />
            </>
          )}
        </div>
      </div>
    );
};

export default Login;