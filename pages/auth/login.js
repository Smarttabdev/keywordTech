import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCurrentUser } from 'hooks/index'
import visibility from 'assets/img/visibility.png'
import axios from "axios"





import Auth from "layouts/Auth.js"

const Login = () =>
{
  //usestates
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [user, { mutate }] = useCurrentUser()
  const [eyeinp, setEyeinp] = useState(false)


  //useEffects
  useEffect(() =>
  {
    // redirect to home if user is authenticated
    if (user) router.push('/')
  }, [user])

  const inputChange = (e) =>
  {
    let value = e.target.value
    switch (e.target.name)
    {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        break
    }
  }

  const showhidepass = () =>
  {
    setEyeinp(!eyeinp)
  }

  const login = async () =>
  {
    const userinfo = await axios.get('https://geolocation-db.com/json/')
    console.log(userinfo.data.IPv4);
    let macAddress = ''
    macAddress = unescape(macAddress)
    console.log(macAddress)
    const body = {
      email,
      password,
      ip: userinfo.data.IPv4,
      macAddress
    }
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (res.status === 200)
    {
      const userObj = await res.json()
      mutate(userObj)
    } else
    {
      setErrorMsg('Incorrect username or password. Try again!')
    }
  }

  return (
    <section className="inner-page">
      <div className="container">
        <div className="signup-form">
          <div className="form-div">
            <h2>Login</h2>
            <hr />
            <div className="form-group">
              {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required="required"
                onChange={inputChange}
                value={email}
              />
            </div>
            <div className="form-group input-group flex-nowrap">
              <input
                type={eyeinp ? 'text' : 'password'}
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
                onChange={inputChange}
                value={password}
              />
              <span className="input-group-text cursor-pointer" id="addon-wrapping" style={{ padding: '3px', background: 'white', borderColor: '#9da7fc' }} onClick={showhidepass}>
                <img src={visibility} height="20" id="eyeimg" />
              </span>
            </div>
            <div className="form-group form-check form-switch">
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{ fontSize: ".8rem", marginTop: "-2px" }}>Remember me</label>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" style={{ marginTop: "5px" }} />
            </div>
            <div className="form-group">
              <center><button type="submit" className="btn btn-primary btn-lg" style={{
                background: "#466393",
                borderColor: "#466393"
              }} onClick={login}>Sign In</button></center>
            </div>
          </div>
          <div className="hint-text">Don't have an account?&nbsp&nbsp<a href="/auth/register">Register here</a></div>
        </div>
      </div>
    </section>
  )
}

Login.layout = ({ children }) => <Auth breadCrumb='Login' breadCrumbStatus={true}>{children}</Auth>

export default Login