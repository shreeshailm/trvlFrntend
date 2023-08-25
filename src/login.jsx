

import "./screens/style.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useHistory } from 'react-router-dom';


function Login() {
  const history = useHistory();

  const [credentials, setcredentials] =
    useState({ username: "", password: "" });
  const [message, setmessage] = useState("");


  useEffect(() => {
    if (message !== "") {
      setTimeout(() => {
        setmessage("");
      }, 3000);
    }
  }, [message]);

  const OnTextChange = (args) => {
    var copyOfcredentials = { ...credentials };
    copyOfcredentials[args.target.name] =
      args.target.value;
    setcredentials(copyOfcredentials);
  }

  const SignIn = () => {
    debugger;




    var helper = new XMLHttpRequest();

    helper.onreadystatechange = () => {
      if (helper.readyState === 4 &&
        helper.status === 200) {
        debugger;
        var responseReceived =
          JSON.parse(helper.responseText);
        if (responseReceived.isvalid
          === 'true') {
          sessionStorage.setItem("sessiontoken", responseReceived.token);
          sessionStorage.setItem("username", credentials.username);
          history.push("/");

        }
        else {
          setmessage("Credentials are invalid!");
          setcredentials({ username: "", password: "" });
        }
      }
    }
    helper.open("POST",
      "http://127.0.0.1:9999/login");

    helper.setRequestHeader("Content-Type", "application/json");

    // helper.send(JSON.stringify(credentials));

    var credentialsInString = JSON.stringify(credentials);

    var credentialsInEncoded = window.btoa(credentialsInString)

    var details = {
      "credentials":
        credentialsInEncoded
    }
    helper.send(JSON.stringify(details));
  }





  return (<>
    <center> <header><h1>Welcome</h1></header></center>

    <div className='row'>
      <div className='col'></div>
      <div className='col'></div>
      <div className='col'>
        <br /><br /><hr /><br /><br />
        <div className='form'>
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" value={credentials.username}
              onChange={OnTextChange} name='username' required />
            <input type="password" placeholder="Password" value={credentials.password}
              name='password'
              onChange={OnTextChange} required />
            <button onClick={SignIn} >Login</button>
            <hr></hr>
            {message}
          </form>
          <center><div>
            Don't have an account? <Link to="/register">Register</Link>
          </div></center>
        </div>
        <center> <footer><h6>Devloped by ProX</h6></footer></center>
      </div>
      <div className='col'></div>
      <div className='col'></div>



    </div>



  </>);
}

export default Login;


