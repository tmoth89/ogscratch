import React, { useState } from 'react';
import { useSpring, animated as a} from 'react-spring';

const Login = (props) => {

    
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1:0,
        transform: `perspective(600px) rotateX(${flipped ? 180: 0 }deg)`,
        config: { mass:5, tension:500, friction: 80}
    })

    return (
        <div className="sign-in" >
        <a.div className="login-front" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} onClick = {() => set(state => !state)}>
          <h3>Welcome you to dive into the art collective world!</h3>
          <h3>Click to Enjoy the World!</h3>
        </a.div>
        <a.div className="login-back" style ={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`)}}>
          <h3>Please Login</h3>
          <label htmlFor="username">Username: </label>
          <input className="login-but" type="text" onChange={(e) => props.loginUsername(e)} id="username" placeholder="username"></input>
          <br></br>
          <label htmlFor="password">Password: </label>
          <input className="login-but" type="password" onChange={(e) => props.loginPassword(e)} id="password" placeholder="password"></input>
          <br></br>
          <button className="login-but" onClick={(e) => { e.preventDefault(); props.verifyLogin(props.username, props.password)}}>Login</button>
          <br></br>
          <button className="signup-but" onClick={(e) => { e.preventDefault(); props.signup()}}>Signup</button>
        </a.div>
      </div>
    )
}

export default Login;