import { useState } from 'react'

import Auth from 'layouts/Auth.js'
import visibility from 'assets/img/visibility.png'
import download from 'assets/img/download.png'
import edit from 'assets/img/edit.png'



const Profile = () =>
{

  //useStates
  const [country, setCountry] = useState('1')
  const [language, setLanguage] = useState('1')
  const [nav, setNav] = useState('profile')
  const [modalShow, setModalShow] = useState(false)
  const [modalType, setModalType] = useState('')
  const [modalContent, setModalContent] = useState('')
  const [currentPwd, setCurrentPwd] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [newPwd, setNewPwd] = useState('')
  const [message, setMessage] = useState(false)
  const [letter, setLetter] = useState(false)
  const [capital, setCapital] = useState(false)
  const [number, setNumber] = useState(false)
  const [length, setLength] = useState(false)
  const [noti1, setNoti1] = useState(false)
  const [noti2, setNoti2] = useState(false)
  const [noti3, setNoti3] = useState(false)
  const [noti4, setNoti4] = useState(false)
  const [noti5, setNoti5] = useState(true)
  const [noti6, setNoti6] = useState(true)
  const [currentPwdView, setCurrentPwdView] = useState(false)
  const [newPwdView, setNewPwdView] = useState(false)
  const [confirmPwdView, setConfirmPwdView] = useState(false)
  const [editBillingStatus, setEditBillingStatus] = useState(false)
  const [company, setCompany] = useState(false)
  const [companyName, setCompanyName] = useState('')
  const [vatNumber, setVatNumber] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [addres1, setAddres1] = useState('')
  const [addres2, setAddres2] = useState('')
  const [city, setCity] = useState('')
  const [location, setLocation] = useState('')
  const [zip, setZip] = useState('')

  //variables
  const billings = [
    {
      date: '20.05.2021'
    },
    {
      date: '20.05.2021'
    },
    {
      date: '20.05.2021'
    },
    {
      date: '20.05.2021'
    },
    {
      date: '20.05.2021'
    },
    {
      date: '20.05.2021'
    },
    {
      date: '20.05.2021'
    },
    {
      date: '20.05.2021'
    },
    {
      date: '20.05.2021'
    },
    {
      date: '20.05.2021'
    },
    {
      date: '20.05.2021'
    },
  ]

  //functions
  const navClick = (nav) =>
  {
    setNav(nav)
  }

  const modalOpen = (type) =>
  {
    console.log('object')
    setModalShow(true)
    setModalType(type)
    switch (type)
    {
      case 'upgrade':
        setModalContent(`When you click on upgrade, you will be directed to checkout page.`)
        break;
      case 'downgrade':
        setModalContent(`Are you sure you want to downgrade your account? \n
          You can upgrade it back any moment you want`)
        break;
      case 'delete':
        setModalContent(`Once you delete your account, this action can not be cancelled.  \n All account information will be deleted. \n
        You can change your plan instead of deleting your account.`)
        break;

      default:
        break;
    }
  }

  const inputChange = (e) =>
  {
    let value = e.target.value
    switch (e.target.name)
    {
      case 'currentPwd':
        setCurrentPwd(value)
        break
      case 'newPwd':
        setNewPwd(value)
        break
      case 'confirmPwd':
        setConfirmPwd(value)
        break
      case 'noti1':
        setNoti1(e.target.checked)
        break
      case 'noti2':
        setNoti2(e.target.checked)
        break
      case 'noti3':
        setNoti3(e.target.checked)
        break
      case 'noti4':
        setNoti4(e.target.checked)
        break
      case 'noti5':
        setNoti5(e.target.checked)
        break
      case 'noti6':
        setNoti6(e.target.checked)
        break
      case 'company':
        console.log(e.target.checked)
        setCompany(e.target.checked)
        break
      case 'vatNumber':
        setVatNumber(value)
        break
      case 'companyName':
        setCompanyName(value)
        break
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      case 'addres1':
        setAddres1(value)
        break
      case 'addres2':
        setAddres2(value)
        break
      case 'city':
        setCity(value)
        break
      case 'location':
        setLocation(value)
        break
      case 'zip':
        setZip(value)
        break

      default:
        break
    }
  }

  const messageShow = (param) =>
  {
    setMessage(param)
  }

  const validatePwd = (e) =>
  {
    let value = e.target.value
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    console.log(lowerCaseLetters.test(value))
    if (lowerCaseLetters.test(value))
    {
      setLetter(true)
    } else
    {
      setLetter(false)
    }
    if (upperCaseLetters.test(value))
    {
      setCapital(true)
    } else
    {
      setCapital(false)
    }
    if (numbers.test(value))
    {
      setNumber(true)
    } else
    {
      setNumber(false)
    }
    if (value.length >= 8)
    {
      setLength(true)
    } else
    {
      setLength(false)
    }
  }

  const changPwd = () =>
  {
    console.log('change Password')
  }

  const viewPwd = (pwd) =>
  {
    switch (pwd)
    {
      case 'currentPwd':
        setCurrentPwdView(!currentPwdView)
        break
      case 'newPwd':
        setNewPwdView(!newPwdView)
        break
      case 'confirmPwd':
        setConfirmPwdView(!confirmPwdView)
        break

      default:
        break
    }
  }

  const editBilling = () =>
  {
    setEditBillingStatus(true)
  }

  const saveChange = () =>
  {
    console.log('Save changed!')
    setEditBillingStatus(false)
  }

  return (
    <div className="profile">
      <section id="sectionx" style={{ minHeight: 'calc(100vh - 147px)' }}>
        <div className="container" id="sectionqqq">
          <div className="row gutters-sm">
            <div className="col-md-4 d-none d-md-block">
              <div className="card">
                <div className="card-body">
                  <nav className="nav flex-column nav-pills nav-gap-y-1">
                    <div className={"nav-item nav-link has-icon nav-link-faded " + (nav === 'profile' ? 'active' : '')} onClick={() => navClick('profile')}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-user mr-2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>Profile Information
                    </div>
                    <div className={"nav-item nav-link has-icon nav-link-faded " + (nav === 'account' ? 'active' : '')} onClick={() => navClick('account')}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-settings mr-2">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                          d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                        </path>
                      </svg>Account Settings
                    </div>
                    <div className={"nav-item nav-link has-icon nav-link-faded " + (nav === 'security' ? 'active' : '')} onClick={() => navClick('security')}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-shield mr-2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>Security
                    </div>
                    <div className={"nav-item nav-link has-icon nav-link-faded " + (nav === 'notification' ? 'active' : '')} onClick={() => navClick('notification')}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-bell mr-2">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>Notification
                    </div>
                    <div className={"nav-item nav-link has-icon nav-link-faded " + (nav === 'billing' ? 'active' : '')} onClick={() => navClick('billing')}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-credit-card mr-2">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                      </svg>Billing
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header border-bottom mb-3 d-flex d-md-none">
                  <ul className="nav nav-tabs card-header-tabs nav-gap-x-1" role="tablist">
                    <li className="nav-item">
                      <a href="#profile" className="nav-link has-icon active"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-user">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg></a>
                    </li>
                    <li className="nav-item">
                      <a href="#account" className="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path
                          d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                        </path>
                      </svg></a>
                    </li>
                    <li className="nav-item">
                      <a href="#security" className="nav-link has-icon"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-shield">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg></a>
                    </li>
                    <li className="nav-item">
                      <a href="#notification" className="nav-link has-icon"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-bell">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg></a>
                    </li>
                    <li className="nav-item">
                      <a href="#billing" className="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" className="feather feather-credit-card">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                        <line x1="1" y1="10" x2="23" y2="10"></line>
                      </svg></a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  {
                    nav === 'profile' ? (
                      <div className="tab-pane" id="profile">
                        <h6 style={{ fontWeight: "600" }}>PROFILE INFORMATION</h6>
                        <hr />
                        <form>
                          <div className="form-group marginbot1rem">
                            <input type="text" className="form-control" id="fullName" aria-describedby="fullNameHelp" readOnly
                              placeholder="Nima Matini" />
                          </div>
                          <div className="form-group marginbot1rem">
                            <input type="text" className="form-control" id="fullName" aria-describedby="fullNameHelp" readOnly
                              placeholder="Ai Gorithmus OÜ" />
                          </div>
                          <div className="form-group marginbot1rem">
                            <select className="form-select" aria-label="Default select example" value={country}>
                              <option value="0">Select Country</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                          <div className="form-group marginbot1rem">
                            <select className="form-select" aria-label="Default select example" value={language}>
                              <option value="0" >Select Language</option>
                              <option value="1">English</option>
                              <option value="2">German</option>
                            </select>
                          </div>
                          <div className="text-right">
                            <button type="button" className="btn btn-primary"
                              style={{ background: '#466393', borderColor: '#466393' }}>Update Profile</button>
                          </div>
                        </form>
                      </div>
                    ) : null
                  }

                  {
                    nav === 'account' ? (
                      <div className="tab-pane" id="account">
                        <h6 style={{ fontWeight: '600' }}>ACCOUNT SETTINGS</h6>
                        <hr />
                        <section id="pricing" className="pricing section-bg" style={{ backgroundColor: 'white', padding: '0px 0' }}>
                          <div className="container" style={{ backgroundColor: "white" }}>
                            <div className="row">
                              <div className="col-lg-4 col-md-12 col-sm-12"
                                style={{ backgroundColor: "white" }}>
                                <div className="box" style={{ border: "1px solid rgba(0,0,0,.125)" }}>
                                  <h3>Free</h3>
                                  <h4><sup>$</sup>0<span> / month</span></h4>
                                  <ul>
                                    <li>Log-in required</li>
                                    <li>40 Keywords</li>
                                    <li>Unlimited search</li>
                                    <li className="na">Pharetra massa</li>
                                    <li className="na">Massa ultricies mi</li>
                                  </ul>
                                  <div style={{ height: '73px' }}>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="box featured" style={{ border: "1px solid rgba(0,0,0,.125)" }}>
                                  <h3>Business</h3>
                                  <h4><sup>$</sup>19<span> / month</span></h4>
                                  <ul>
                                    <li>Log-in required</li>
                                    <li>Unlimited keywords</li>
                                    <li>Unlimited search</li>
                                    <li>Cancel anytime</li>
                                    <li>Multiple Search</li>
                                  </ul>
                                  <div className="btn-wrap" style={{ marginLeft: '-50px', marginRight: '-50px' }}>
                                    <a href="#" className="btn-buy">Yours</a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-12 col-sm-12"
                                style={{ backgroundColor: 'white' }}>
                                <div className="box" style={{ border: "1px solid rgba(0,0,0,.125)" }}>
                                  <h3>Yearly Plan</h3>
                                  <h4><sup>$</sup>29<span> / Yearly</span></h4>
                                  <ul>
                                    <li>Log-in required</li>
                                    <li>Unlimited keywords</li>
                                    <li>Unlimited search</li>
                                    <li>Cancel anytime</li>
                                    <li>Multiple Search</li>
                                  </ul>
                                  <div className="btn-wrap" style={{ marginLeft: '-50px', marginRight: '-50px' }}>
                                    <div className="btn-buy" onClick={() => modalOpen('upgrade')}>Upgrade</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <hr />
                        <div className="row">
                          <div className="col" style={{ paddingLeft: "36px;" }}>
                            <a className="btn btn-outline-secondary"
                              style={{ color: '#ccc', borderColor: '#ccc', fontSize: '12px', padding: '3px', fontWeight: "100!important" }} onClick={() => modalOpen('downgrade')}>&nbsp;&nbsp;&nbsp;Downgrade&nbsp;&nbsp;&nbsp;</a>
                            <a className="btn btn-outline-secondary"
                              style={{ color: '#ccc', borderColor: '#ccc', fontSize: '12px', padding: '3px', fontWeight: "100!important" }} onClick={() => modalOpen('delete')}>Delete Account</a>
                          </div>
                        </div>
                      </div>
                    ) : null
                  }
                  {
                    nav === 'security' ? (
                      <div className="tab-pane" id="security">
                        <h6 style={{ fontWeight: '600' }}>SECURITY SETTINGS</h6>
                        <hr />
                        <div className="form-group">
                          <input type="text" className="form-control" id="fullName" aria-describedby="fullNameHelp" readOnly
                            placeholder="aaa@aigorithmus.com" />
                        </div>
                        <hr />
                        <form>
                          <div className="form-group">
                            <label className="d-block mb-3" style={{ fontWeight: '600', fontSize: '.92rem' }}>Change Password</label>
                            <div className="input-group flex-nowrap mb-3">
                              <input
                                type={currentPwdView ? "text" : "password"}
                                className="form-control"
                                placeholder="Old password"
                                id="oldpassword"
                                name="currentPwd"
                                style={{ borderRight: "none" }}
                                onChange={inputChange}
                                value={currentPwd}
                              />
                              <span className="input-group-text" id="addon-wrapping"
                                style={{ padding: '3px', background: 'white', paddingRight: '.75rem' }} onclick="showhidepass()">
                                <img src={visibility} className="cursor-pointer" onClick={() => viewPwd('currentPwd')} height="15" id="eyeimg" />
                              </span>
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                              <input
                                type={newPwdView ? "text" : "password"}
                                className="form-control "
                                name="newPwd"
                                id="password"
                                placeholder="Password"
                                required="required"
                                style={{ borderRight: "none", borderColor: `${newPwd === '' ? '' : (newPwd === confirmPwd) ? 'green' : 'red'}` }}
                                onChange={inputChange}
                                value={newPwd}
                                onFocus={() => messageShow(true)}
                                onBlur={() => messageShow(false)}
                                onKeyUp={validatePwd}
                              />
                              <span className="input-group-text" id="addon-wrapping2"
                                style={{ padding: '3px', background: 'white', paddingRight: '.75rem', borderColor: `${newPwd === '' ? '' : (newPwd === confirmPwd) ? 'green' : 'red'}` }} onclick="showhidepass()">
                                <img src={visibility} className="cursor-pointer" onClick={() => viewPwd('newPwd')} height="15" id="eyeimg2" />
                              </span>
                            </div>
                            {
                              message ? (
                                <div id="message" style={{
                                  fontSize: ".8rem", fontWeight: "600",
                                  whiteSpace: "nowrap", transition: "0.3s", display: "block"
                                }}>
                                  <p id="letter" className={"mb-0 " + (letter ? 'valid' : 'invalid')}>A <b>lowercase</b> letter</p>
                                  <p id="capital" className={"mb-0 " + (capital ? 'valid' : 'invalid')}>A <b>capital (uppercase)</b> letter</p>
                                  <p id="number" className={"mb-0 " + (number ? 'valid' : 'invalid')}>A <b>number</b></p>
                                  <p id="length" className={"mb-0 " + (length ? 'valid' : 'invalid')}>Minimum <b>8 characters</b></p>
                                </div>
                              ) : null
                            }

                            <div className="input-group flex-nowrap mb-3">
                              <input
                                type={confirmPwdView ? "text" : "password"}
                                className="form-control"
                                name="confirmPwd"
                                id="confirm_password"
                                placeholder="Confirm Password"
                                required="required"
                                onkeyup="passtest()"
                                style={{ borderRight: "none", borderColor: `${confirmPwd === '' ? '' : (newPwd === confirmPwd) ? 'green' : 'red'}` }}
                                onChange={inputChange}
                                value={confirmPwd}
                              />
                              <span className="input-group-text" id="addon-wrapping1"
                                style={{ padding: '3px', background: 'white', paddingRight: '.75rem', borderColor: `${confirmPwd === '' ? '' : (newPwd === confirmPwd) ? 'green' : 'red'}` }} onclick="showhidepass()">
                                <img src={visibility} className="cursor-pointer" onClick={() => viewPwd('confirmPwd')} height="15" id="eyeimg3" />
                              </span>
                            </div>
                            <div className="text-right">
                              <button type="button" className="btn btn-primary"
                                style={{ background: '#466393', borderColor: '#466393', marginTop: '4px' }}
                                onClick={changPwd}>Change Password</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    ) : null
                  }
                  {
                    nav === 'notification' ? (
                      <div className="tab-pane" id="notification">
                        <h6 style={{ fontWeight: '600' }}>NOTIFICATION SETTINGS</h6>
                        <hr />
                        <form style={{ fontSize: '.8rem!important' }}>
                          <div className="form-group mb-3">
                            <label className="d-block mb-3 text-gray" style={{ fontWeight: '600', fontSize: '.92rem' }}>General
                              Notifications</label>
                            <ul className="list-group list-group-sm">
                              <li className="list-group-item has-icon">
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="Monthlykeywordsearchresults"
                                    name="noti1"
                                    onChange={inputChange}
                                    checked={noti1}
                                  />
                                  <label className="form-check-label text-gray" htmlFor="Monthlykeywordsearchresults">Monthly keyword search
                                    results</label>
                                </div>
                              </li>
                              <li className="list-group-item has-icon">
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckDefaultx"
                                    name="noti2"
                                    onChange={inputChange}
                                    checked={noti2}
                                  />
                                  <label className="form-check-label text-gray" htmlFor="flexSwitchCheckDefaultx">xx</label>
                                </div>
                              </li>
                              <li className="list-group-item has-icon">
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckDefaultq"
                                    name="noti3"
                                    onChange={inputChange}
                                    checked={noti3}
                                  />
                                  <label className="form-check-label text-gray" htmlFor="flexSwitchCheckDefaultq">qq</label>
                                </div>
                              </li>
                              <li className="list-group-item has-icon">
                                <div className="form-check form-switch">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckDefaults"
                                    name="noti4"
                                    onChange={inputChange}
                                    checked={noti4}
                                  />
                                  <label className="form-check-label text-gray" htmlFor="flexSwitchCheckDefaults">ss</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="form-group">
                            <label className="d-block mb-3 text-gray" style={{ fontWeight: '600', fontSize: '.92rem' }}>Security Alerts</label>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefaults"
                                name="noti5"
                                onChange={inputChange}
                                checked={noti5}
                              />
                              <label className="form-check-label text-gray" htmlFor="flexSwitchCheckDefaults">Email each time a vulnerability is
                                found</label>
                            </div>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefaults"
                                name="noti6"
                                onChange={inputChange}
                                checked={noti6}
                              />
                              <label className="form-check-label text-gray" htmlFor="flexSwitchCheckDefaults">Email a digest summary of
                                vulnerability</label>
                            </div>
                          </div>
                          <div className="text-right">
                            <button type="button" className="btn btn-primary"
                              style={{ background: '#466393', borderColor: "#466393" }}>Apply Changes</button>
                          </div>
                        </form>
                      </div>
                    ) : null
                  }
                  {
                    nav === 'billing' ? (
                      <div className="tab-pane" id="billing" style={{ marginBottom: "-1rem" }}>
                        <h6>BILLING SETTINGS</h6>
                        <hr />
                        {
                          !editBillingStatus ? (
                            <div className="row" id="billingcard">
                              <div className="col-md-8 col-sm-12 oldbillingarea" id="style-8">
                                {billings.map((billing, i) => (
                                  <div className="row small text-muted oldbilling" key={i}>
                                    <div className="col-8 oldbilling8">
                                      {billing.date}
                                    </div>
                                    <div className="col-2 oldbilling2">
                                      <center><img src={visibility} className="cursor-pointer" height="13" /></center>
                                    </div>
                                    <div className="col-2 oldbilling2">
                                      <center><img src={download} className="cursor-pointer" height="12" /></center>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="col-md-4 col-sm-12">
                                <div className="small text-muted billingaddress">
                                  <div className="row">
                                    <div className="col form-group mb-0">
                                      <label className="d-block" style={{ fontWeight: "600" }}>Billing Address</label>
                                    </div>
                                    <div className="col text-right">
                                      <img src={edit} height="20" className="cursor-pointer" onClick={editBilling} />
                                    </div>
                                  </div>
                                  <hr />
                                  <div className="row">
                                    <div className="col">
                                      aaaaabr <br />
                                      aaaasdasd
                                      aaaaabr <br />
                                      aaaasdasd
                                      aaaaabr <br />
                                      aaaasdasd
                                      aaaaabr <br />
                                      aaaasdasd
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : null
                        }
                        {
                          editBillingStatus ? (
                            <div className="row" id="billingform">
                              <form>
                                <div className="form-check form-switch" style={{ paddingLeft: '2rem', fontSize: ".81rem" }}
                                  onclick="billingcompany()">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="areyoucomp"
                                    name="company"
                                    onChange={inputChange}
                                    checked={company}
                                  />
                                  <label className="form-check-label small text-muted" htmlFor="areyoucomp">Are you a company?</label>
                                </div>
                                <div id="billingcompany">
                                  {
                                    company ? (
                                      <>
                                        <div className="mb-3">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Companyt Name"
                                            name="companyName"
                                            onChange={inputChange}
                                            value={companyName}
                                          />
                                        </div>
                                        <div className="mb-3">
                                          <input
                                            type="text"
                                            className="form-control"
                                            placeholder="VAT Number"
                                            name="vatNumber"
                                            onChange={inputChange}
                                            value={vatNumber}
                                          />
                                        </div>
                                      </>
                                    ) : null
                                  }
                                </div>
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="fullName"
                                    aria-describedby="fullNameHelp"
                                    placeholder="First Name"
                                    name="firstName"
                                    onChange={inputChange}
                                    value={firstName}
                                  />
                                </div>
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last Name"
                                    name="lastName"
                                    onChange={inputChange}
                                    value={lastName}
                                  />
                                </div>
                                <div className="mb-3">
                                  <select className="form-select" aria-label="Default select example" value={country}>
                                    <option value="0">Select Country</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address Line 1"
                                    name="addres1"
                                    onChange={inputChange}
                                    value={addres1}
                                  />
                                </div>
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address Line 2"
                                    name="addres2"
                                    onChange={inputChange}
                                    value={addres2}
                                  />
                                </div>
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="City"
                                    name="city"
                                    onChange={inputChange}
                                    value={city}
                                  />
                                </div>
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Province / Region"
                                    name="location"
                                    onChange={inputChange}
                                    value={location}
                                  />
                                </div>
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Zip / Postal Code"
                                    name="zip"
                                    onChange={inputChange}
                                    value={zip}
                                  />
                                </div>
                                <div className="mb-3 small text-muted" style={{ fontSize: ".74rem" }}>
                                  You can change your billing address again at any time. This information cannot be shared anywhere.
                                </div>
                                <div className="row">
                                  <div className="col-md-4 col-sm-12">
                                    <button type="button" className="btn btn-outline-danger mb-1"
                                      onClick={() => { setEditBillingStatus(false) }}
                                      style={{ width: "100%" }}>Cancel</button>
                                  </div>
                                  <div className="col-md-4 col-sm-0">

                                  </div>
                                  <div className="col-md-4 col-sm-12 text-right">
                                    <button type="button" className="btn btn-primary"
                                      style={{ background: '#466393', borderColor: '#466393', width: '100%', marginBottom: "1rem" }}
                                      onClick={saveChange}>Apply Changes</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          ) : null
                        }


                      </div>
                    ) : null
                  }



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      {modalShow ? (
        <div className="modal fade" id="downgrademodal" style={{ display: 'block', opacity: '1', background: '#3a39399e' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel"><b>Are Your Sure?</b></h5>
                <button type="button" style={{ width: '20px' }} className="btn-close" onClick={() => { setModalShow(false) }}></button>
              </div>
              <div className="modal-body" style={{ padding: '20px' }}>
                <a id="modalerrora" style={{ fontFamily: '"Krub", sans-serif', fontSize: '17px', fontWeight: '600', color: '#2d405f' }}>
                  {modalContent}
                </a>
                <br />
                {
                  modalType === 'downgrade' ? (
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                      <label className="form-check-label" for="flexCheckDefault2">
                        Downgrade Plan
                      </label>
                    </div>
                  ) : null
                }
                {
                  modalType === 'delete' ? (
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                      <label className="form-check-label" for="flexCheckDefault2">
                        Delete my Account
                      </label>
                    </div>
                  ) : null
                }

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={() => { setModalShow(false) }}>Close</button>
                {
                  modalType === 'upgrade' ? (<button type="button" className="btn btn-success">Upgrade</button>) : (modalType === 'downgrade' ? (<button type="button" className="btn btn-success">Downgrade</button>) : (<button type="button" className="btn btn-success">Delete</button>))
                }

              </div>
            </div>
          </div>
        </div>
      ) : null}

    </div >
  )
}

Profile.layout = ({ children }) => <Auth breadCrumbStatus={true} breadCrumb='Profile'>{children}</Auth>

export default Profile