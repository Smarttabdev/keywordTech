import { React, useState, useEffect } from 'react'
import NumberFormat from 'react-number-format'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { loadStripe } from "@stripe/stripe-js";
import
{
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import PaypalExpressBtn from 'react-paypal-express-checkout';


import Auth from "layouts/Auth.js"
import terms from 'variables/terms.js'
import { CARD_OPTIONS } from "constants/stripe.js";

import paypal from "assets/img/paypal2.png"
import card from "assets/img/kk.png"
import visibility from 'assets/img/visibility.png'

import { useCurrentUser } from 'hooks/index'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Regist = () =>
{
  //useEffects
  useEffect(() =>
  {
    if (user) router.replace('/');
  }, [])
  //useStates
  const router = useRouter();
  const [user, { mutate }] = useCurrentUser();
  const [registerStep, setRegisterStep] = useState('firstbtn')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setconfirmEmail] = useState('')
  const [validateEmail, setValidateEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [message, setMessage] = useState(false)
  const [letter, setLetter] = useState(false)
  const [capital, setCapital] = useState(false)
  const [number, setNumber] = useState(false)
  const [length, setLength] = useState(false)
  const [accept, setAccept] = useState(false)
  const [modalContent, setModalContent] = useState()
  const [modalStatus, setModalStatus] = useState(false)
  const [term, setTerm] = useState(false)
  const [modalTitle, setModalTitle] = useState()
  const [company, setCompany] = useState(false)
  const [addres1, setAddres1] = useState('')
  const [addres2, setAddres2] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [zip, setZip] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [vatNumber, setVatNumberber] = useState('')
  const [paypalCheck, setPaypalCheck] = useState(true)
  const [cardCheck, setCardCheck] = useState(false)
  const [paypalMail, setPaypalMail] = useState('')
  const [paypalPwd, setPaypalPwd] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [kkmonth, setkkMonth] = useState('')
  const [kkyear, setkkYear] = useState('')
  const [cvc, setCvc] = useState('')
  const [payment, setPayment] = useState(false)
  const [eyeinp, setEyeinp] = useState(false)
  const [eyeinp1, setEyeinp1] = useState(false)
  const [eyeinp2, setEyeinp2] = useState(false)
  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
  // const [stripe, setStripe] = useState();
  // const [elements, setElements] = useState({});
  const stripe = useStripe();
  const elements = useElements();
  //variables 
  const client = {
    sandbox: process.env.PAYPAL_SANDBOX_CLIENT_ID,
    production: process.env.PAYPAL_SANDBOX_CLIENT_SECRET
  }

  useEffect(() =>
  {
    if (!elements) return;
    const cardElement = elements.getElement('card')
    if (registerStep == "thirdbtn" || cardCheck)
      cardElement.focus();
  }, [registerStep, cardCheck])

  //functions
  const inputChange = (e) =>
  {
    let value = e.target.value
    switch (e.target.name)
    {
      case 'first_name':
        setFirstName(value)
        break
      case 'last_name':
        setLastName(value)
        break
      case 'email':
        setEmail(value)
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setValidateEmail(re.test(email));
        break
      case 'confirm_email':
        setconfirmEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      case 'confirm_password':
        setConfirmPwd(value)
        break
      case 'accept_check':
        setAccept(e.target.checked)
        break
      case 'company':
        setCompany(e.target.checked)
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
      case 'country':
        setCountry(value)
        break
      case 'zip':
        setZip(value)
        break
      case 'company_Name':
        setCompanyName(value)
        break
      case 'VAT_Number':
        setVatNumberber(value)
        break
      case 'paypalmail':
        setPaypalMail(value)
        break
      case 'paypalpwd':
        setPaypalPwd(value)
        break
      case 'cardnumber':
        setCardNumber(value)
        break
      case 'kkmonth':
        setkkMonth(value)
        break
      case 'kkyear':
        setkkYear(value)
        break
      case 'cvc':
        setCvc(value)
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

  const firstStep = () =>
  {
    setTerm(false)
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (password.match(lowerCaseLetters) && password.match(upperCaseLetters) && password.match(numbers) && password.length >= 8)
    {
      if (email == null || email == "")
      {
        modalShow()
        setModalContent('Please Fill Email')
      } else if (confirmEmail == null || confirmEmail == "")
      {
        modalShow()
        setModalContent('Please Fill Email Confirm')
      } else if (lastName == null || lastName == "")
      {
        modalShow()
        setModalContent('Please Fill Last Name')
      }
      else if (firstName == null || firstName == "")
      {
        modalShow()
        setModalContent('Please Fill First Name')
      } else if (password == null || password == "")
      {
        modalShow()
        setModalContent('Please Fill Password')
      }
      else if (confirmPwd == null || confirmPwd == "")
      {
        modalShow()
        setModalContent('Please Fill Confirm Password')
      } else if (email != confirmEmail)
      {
        modalShow()
        setModalContent('Emails do not Match!')
      } else if (password != confirmPwd)
      {
        modalShow()
        setModalContent('Passwords do not Match!')
      } else if (!accept)
      {
        modalShow()
        setModalContent('You must accept the Terms of Use and Privacy Policy!')
      } else if (re.test(email))
      {
        console.log('object')
        setRegisterStep('secondbtn')
      } else
      {
        modalShow()
        setModalContent('Email not corrected!')
      }
    }
    else
    {
      modalShow()
      setModalContent('Password is not Corrected')
    }
  }

  const termModal = () =>
  {
    setModalStatus(true)
    setTerm(true)
    setModalTitle('Terms of Use')
    setModalContent(terms.legal)
  }

  const policyModal = () =>
  {
    setModalStatus(true)
    setTerm(true)
    setModalTitle('Privacy Policy')
    setModalContent(terms.policy)
  }

  const accepted = () =>
  {
    setModalStatus(false)
    setAccept(true)
  }

  const secondStepPrev = () =>
  {
    setRegisterStep('firstbtn')
  }

  let modalShow = () =>
  {
    setModalStatus(true)
    setModalTitle('Error!')
  }

  const secondSetpNext = () =>
  {
    if (company)
    {
      if (addres1 == null || addres1 == "")
      {
        modalShow()
        setModalContent('Please Fill Addres1')
      }
      else if (city == null || city == "")
      {
        modalShow()
        setModalContent('Please Fill City')
      } else if (zip == null || zip == "")
      {
        modalShow()
        setModalContent('Please Fill Zip')
      }
      else if (country == null || country == "")
      {
        modalShow()
        setModalContent('Please Fill Country')
      } else if (vatNumberber == null || vatNumber == "")
      {
        modalShow()
        setModalContent('Please Fill VAT_Number')
      }
      else if (companyName == null || companyName == "")
      {
        modalShow()
        setModalContent('Please Fill Company Name')
      } else
      {
        setRegisterStep('thirdbtn')
      }
    } else
    {
      if (addres1 == null || addres1 == "")
      {
        modalShow()
        setModalContent('Please Fill Addres1')
      }
      else if (city == null || city == "")
      {
        modalShow()
        setModalContent('Please Fill City')
      } else if (zip == null || zip == "")
      {
        modalShow()
        setModalContent('Please Fill Zip')
      }
      else if (country == null || country == "")
      {
        modalShow()
        setModalContent('Please Fill Country')
      } else
      {
        setRegisterStep('thirdbtn')
      }
    }
  }

  const paypalinfo = () =>
  {
    setPaypalCheck(true)
    setCardCheck(false)
  }

  const cardInfo = () =>
  {
    setCardCheck(true)
    setPaypalCheck(false)
  }


  const thirdPrev = () =>
  {
    setRegisterStep('secondbtn')
  }

  const thirdPageNext = () =>
  {

    if (paypalCheck)
    {
      if (paypalPwd == null || paypalPwd == "")
      {
        modalShow()
        setModalContent('Please Fill Password')
      } else if (paypalMail == null || paypalMail == "")
      {
        modalShow()
        setModalContent('Please Fill Email')
      } else
      {
        setRegisterStep('overbtn')
      }
    } else
    {
      setRegisterStep('overbtn')
    }
  }

  const overprev = () =>
  {
    setRegisterStep('thirdbtn')
    setPayment(false)
  }

  const showhidepass = () =>
  {
    setEyeinp(!eyeinp)
  }

  const showhidepass1 = () =>
  {
    setEyeinp1(!eyeinp1)
  }

  const showhidepass2 = () =>
  {
    setEyeinp2(!eyeinp2)
  }

  const paymentComplete = () =>
  {
    setModalStatus(true)
    setModalTitle('Confirm')
    setPayment(true)
  }


  const Complete = async () =>
  {
    console.log('Final')
    if (paypalCheck)
    {
      //paypal
    } else
    {
      // if (!stripe || !elements)
      // {
      //   return;
      // }


      setProcessingTo(true);
      const price = 118;
      console.log(elements, 'real')
      try
      {
        console.log('Strip')
        let clientSecret = ''
        const cardElement = elements.getElement('card')
        console.log(elements, '-------')

        const res = await fetch('/api/stripe-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount: price }),
        });

        clientSecret = await res.text()

        const paymentMethodReq = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: {
            name: null,
            email: email,
            address: {
              city: city,
              line1: addres1,
              state: null,
              postal_code: zip
            }
          }
        });

        console.log('aa', paymentMethodReq);

        if (paymentMethodReq.error)
        {
          setCheckoutError(paymentMethodReq.error.message);
          setProcessingTo(false);
          return;
        }

        const { error } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethodReq.paymentMethod.id
        });

        if (error)
        {
          setCheckoutError(error.message);
          setProcessingTo(false);
          console.log(error.message)

          return;
        }

        // On successful payment, redirect to thank you page.
        await saveUser()
      } catch (err)
      {
        setCheckoutError(err.message);
        console.log(err.message)
      }
    }


  }
  const saveUser = async () =>
  {
    const body = {
      firstName,
      lastName,
      email,
      password,
      company,
      companyName,
      vatNumber,
      addres1,
      addres2,
      city,
      country,
      zip,
      payment,
      paypalMail,
      paypalPwd,
      cardNumber,
      kkmonth,
      kkyear,
      cvc
    }
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 201)
    {
      const userObj = await res.json()
      console.log(userObj)
      mutate(userObj);
      setModalStatus(false)
      await setTimeout(() =>
      {
        setModalStatus(true)
        setModalTitle('Success')
        setPayment(false)
        setModalContent('Success!')
      }, 1000);
      if (!modalStatus)
        await router.push("/")
    } else
    {
      setModalStatus(false)
      const text = await res.text()
      console.log(text)
      await setTimeout(() =>
      {
        modalShow()
        setPayment(false)
        setModalContent(text)
      }, 1000);
    }
  }

  //paypal checkout
  const onSuccess = (payment) =>
  {
    console.log("The payment was succeeded!", payment);
    saveUser()
  }

  const onCancel = (data) =>
  {
    console.log('The payment was cancelled!', data);
  }

  const onError = (err) =>
  {
    console.log("Error!", err);

  }


  return (
    <>
      <div className="content">
        <div className="content__inner">
          <div className="container overflow-hidden">
            <div className="multisteps-form">
              <div className="row">
                <div className="col-12 col-lg-8 ml-auto mr-auto mb-4 m-auto mt-5">
                  <div className="multisteps-form__progress">
                    <button className={"multisteps-form__progress-btn " + ((registerStep == 'firstbtn' || registerStep == 'secondbtn' || registerStep == 'thirdbtn' || registerStep == 'overbtn') ? 'js-active' : '')} id="firstbtn">User Info</button>
                    <button className={'multisteps-form__progress-btn ' + ((registerStep == 'secondbtn' || registerStep == 'thirdbtn' || registerStep == 'overbtn') ? 'js-active' : '')} id="secondbtn">Billing Address</button>
                    <button className={'multisteps-form__progress-btn ' + ((registerStep == 'thirdbtn' || registerStep == 'overbtn') ? 'js-active' : '')} id="thirdbtn">Payment</button>
                    <button className={'multisteps-form__progress-btn ' + (registerStep == 'overbtn' ? 'js-active' : '')} id="overbtn">Overview</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-8 m-auto">
                  <div className="multisteps-form__form">
                    {registerStep === 'firstbtn' ?
                      (
                        <motion.div initial="hidden" animate="visible" variants={{
                          hidden: {
                            scale: .8,
                            opacity: 0
                          },
                          visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                              delay: .1
                            }
                          },
                        }}>
                          <div className="multisteps-form__panel shadow p-4 rounded bg-white  js-active" data-animation="scaleIn" style={{ transition: 'background .4s,border-color .4s,color .4s' }} id="firstpage" >
                            <h3 className="multisteps-form__title">User Info</h3>
                            <div className="">
                              <div className="form-group">
                                <div className="row">
                                  <div className="col-md-6 col-sm-12 mb-4">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="first_name"
                                      placeholder="First Name"
                                      required="required"
                                      id="first_name"
                                      style={{ width: "100%", border: "1px solid #ced4da" }}
                                      onChange={inputChange}
                                      value={firstName}
                                    />
                                  </div>
                                  <div className="col-md-6 col-sm-12 mb-4">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="last_name"
                                      name="last_name"
                                      placeholder="Last Name"
                                      required="required"
                                      style={{ width: "100%", border: "1px solid #ced4da" }}
                                      onChange={inputChange}
                                      value={lastName}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <div className="row">
                                  <div className="col-md-6 col-sm-12 mb-4">
                                    <input
                                      style={{ width: "100%", border: "1px solid #ced4da", borderColor: `${email === '' ? '' : (email === confirmEmail && validateEmail) ? 'green' : 'red'}` }}
                                      type="email"
                                      className="form-control"
                                      name="email"
                                      id="email"
                                      placeholder="Email"
                                      required="required"
                                      value={email}
                                      onChange={inputChange}
                                    />

                                  </div>
                                  <div className="col-md-6 col-sm-12 mb-4">
                                    <input
                                      style={{ width: "100%", border: "1px solid #ced4da", borderColor: `${confirmEmail === '' ? '' : (email === confirmEmail && validateEmail) ? 'green' : 'red'}` }}
                                      type="email"
                                      className="form-control"
                                      name="confirm_email"
                                      id="confirm_email"
                                      placeholder="Confirm Email"
                                      required="required"
                                      value={confirmEmail}
                                      onChange={inputChange}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group mb-0">
                                <div className="row">
                                  <div className="col-md-6 col-sm-12 mb-4 input-group flex-nowrap w-50">
                                    <input
                                      style={{ width: "100%", border: "1px solid #ced4da", borderColor: `${password === '' ? '' : (password === confirmPwd) ? 'green' : 'red'}` }}
                                      type={eyeinp1 ? 'text' : 'password'}
                                      className="form-control"
                                      name="password"
                                      id="password"
                                      placeholder="Password"
                                      required="required"
                                      value={password}
                                      onChange={inputChange}
                                      onFocus={() => messageShow(true)}
                                      onBlur={() => messageShow(false)}
                                      onKeyUp={validatePwd}
                                    />
                                    <span className="input-group-text cursor-pointer" id="addon-wrapping" style={{ padding: '3px', background: 'white', borderColor: '#9da7fc' }} onClick={showhidepass1}>
                                      <img src={visibility} height="20" id="eyeimg" />
                                    </span>
                                  </div>
                                  <div className="col-md-6 col-sm-12 mb-4 input-group flex-nowrap w-50">
                                    <input
                                      style={{ width: "100%", border: "1px solid #ced4da", borderColor: `${confirmPwd === '' ? '' : (password === confirmPwd) ? 'green' : 'red'}` }}
                                      type={eyeinp2 ? 'text' : 'password'}
                                      className="form-control"
                                      name="confirm_password"
                                      id="confirm_password"
                                      placeholder="Confirm Password"
                                      required="required"
                                      value={confirmPwd}
                                      onChange={inputChange}
                                    />
                                    <span className="input-group-text cursor-pointer" id="addon-wrapping" style={{ padding: '3px', background: 'white', borderColor: '#9da7fc' }} onClick={showhidepass2}>
                                      <img src={visibility} height="20" id="eyeimg" />
                                    </span>
                                  </div>
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
                                  ) : ''
                                }
                              </div>
                              <div className="form-group mb-0">
                                <input
                                  type="checkbox"
                                  required="required"
                                  id="acceptcheck"
                                  style={{ marginRight: '10px' }}
                                  name="accept_check"
                                  onChange={inputChange}
                                  checked={accept}
                                />
                                <label className="form-check-label">
                                  <label htmlFor="acceptcheck">I accept the</label>
                                  <a data-bs-target="#staticBackdrop" className="text-decoration-underline cursor-pointer" onClick={termModal}> Terms of Use </a>
                                  &amp;
                                  <a data-bs-target="#staticBackdrop2" className="text-decoration-underline cursor-pointer" onClick={policyModal}> Privacy Policy</a>
                                </label>
                              </div>
                            </div>
                            <div className="button-row d-flex justify-content-end mt-2">
                              <button className="btn btn-primary js-btn-next ml-auto" type="button" title="Next" style={{ background: "#466393", borderColor: "#466393" }} onClick={firstStep}>Next</button>
                            </div>

                          </div>
                        </motion.div>
                      ) : null
                    }
                    {registerStep === 'secondbtn' ? (
                      <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                          scale: .8,
                          opacity: 0
                        },
                        visible: {
                          scale: 1,
                          opacity: 1,
                          transition: {
                            delay: .1
                          }
                        },
                      }}>
                        <div className="multisteps-form__panel shadow p-4 rounded bg-white js-active mt-1" data-animation="scaleIn" style={{ transition: 'background .4s, border- color .4s,color .4s' }} id="secondpage" style={{ marginTop: "-2.5rem" }}>
                          <h3 className="multisteps-form__title">Billing Address</h3>
                          <div className="">
                            <div className="form-group form-check form-switch">
                              <label className="form-check-label text-body" htmlFor="flexSwitchCheckChecked" style={{ fontSize: ".8rem", marginTop: "-2px" }}>Are you a company?</label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                name="company"
                                onChange={inputChange}
                                checked={company}
                              />
                            </div>
                            {company ? (
                              <div className="form-group" >
                                <div className="row" id="company">
                                  <div className="col-md-6 col-sm-12 mb-4">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="company_Name"
                                      id="N"
                                      placeholder="Company Name"
                                      required="required"
                                      style={{ width: "100%", border: "1px solid #ced4da" }}
                                      onChange={inputChange}
                                      value={companyName}
                                    />
                                  </div>
                                  <div className="col-md-6 col-sm-12 mb-4">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="VAT_Number"
                                      id="VAT_Number"
                                      placeholder="VAT Number"
                                      required="required"
                                      style={{ width: "100%", border: "1px solid #ced4da" }}
                                      onChange={inputChange}
                                      value={vatNumber}
                                    />
                                  </div>
                                </div>
                              </div>
                            ) : null
                            }
                            <div className="form-group mb-4">
                              <input
                                type="text"
                                className="form-control"
                                name="addres1"
                                placeholder="Addres1"
                                required="required"
                                id="Addres1"
                                onChange={inputChange}
                                value={addres1}
                              />
                            </div>
                            <div className="form-group mb-4">
                              <input
                                type="text"
                                className="form-control"
                                name="addres2"
                                placeholder="Addres2"
                                required="required"
                                id="Addres2"
                                onChange={inputChange}
                                value={addres2}
                              />
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <div className="col-md-6 col-sm-12 mb-4">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    placeholder="City"
                                    required="required"
                                    style={{ width: "100%", border: "1px solid #ced4da" }}
                                    id="City"
                                    onChange={inputChange}
                                    value={city}
                                  />
                                </div>
                                <div className="col-md-3 col-sm-12 mb-4">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="country"
                                    placeholder="Country"
                                    required="required"
                                    style={{ width: "100%", border: "1px solid #ced4da" }}
                                    id="Country"
                                    onChange={inputChange}
                                    value={country}
                                  />
                                </div>
                                <div className="col-md-3 col-sm-12 mb-4">
                                  <input
                                    type="tel"
                                    className="form-control"
                                    name="zip"
                                    pattern="[0-9]{3}"
                                    placeholder="Zip"
                                    required="required"
                                    style={{ width: "100%", border: "1px solid #ced4da" }}
                                    id="Zip"
                                    maxLength="5"
                                    onChange={inputChange}
                                    value={zip}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="button-row d-flex mt-0">
                            <button className="btn btn-outline-primary js-btn-prev" type="button" title="Prev" onClick={secondStepPrev}>Prev</button>
                            <button className="btn btn-primary js-btn-next" type="button" title="Next" style={{ marginLeft: "auto", background: "#466393", borderColor: "#466393" }} onClick={secondSetpNext}>Next</button>
                          </div>
                        </div>
                      </motion.div>
                    ) : null
                    }
                    {/* {registerStep === 'thirdbtn'
                      ? (
                        
                      ) : null
                    } */}

                    <div className={registerStep === 'thirdbtn' ? 'fadein' : ''} style={{ display: registerStep === 'thirdbtn' ? "" : "none" }}>
                      <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                          scale: .8,
                          opacity: 0
                        },
                        visible: {
                          scale: 1,
                          opacity: 1,
                          transition: {
                            delay: .1
                          }
                        },
                      }}>
                        <div className="multisteps-form__panel shadow p-4 rounded js-active mt-1 bg-white" data-animation="scaleIn" style={{ transition: 'background .4s, border-color .4s,color .4s' }} id="thirdpage" style={{ marginTop: "-2.5rem" }}>
                          <h3 className="multisteps-form__title">Payments</h3>
                          <div className="wrapper">
                            <input
                              type="radio"
                              name="paypal"
                              id="option-1"
                              onChange={inputChange}
                              checked={paypalCheck}
                            />
                            <input
                              type="radio"
                              name="card"
                              id="option-2"
                              onChange={inputChange}
                              checked={cardCheck}
                            />
                            <label htmlFor="option-1" className="option option-1" onClick={paypalinfo}>
                              <div className="dot"></div>
                              <img src={paypal} height="50" />
                            </label>
                            <label htmlFor="option-2" className="option option-2" onClick={cardInfo}>
                              <div className="dot"></div>
                              <img src={card} height="50" />
                            </label>
                          </div>
                          {
                            paypalCheck ? (
                              <div id="paypalinfo">
                                <div className="form-row mt-4">
                                  <div className="col-12">
                                    <input
                                      className="multisteps-form__input form-control mb-4"
                                      id="paypalmail"
                                      name="paypalmail"
                                      type="Email"
                                      placeholder="Email*"
                                      style={{ width: "100%", border: "1px solid #ced4da" }}
                                      onChange={inputChange}
                                      value={paypalMail}
                                    />
                                  </div>
                                </div>
                                <div className="form-row mt-4">
                                  <div className="col-12">
                                    <input
                                      className="multisteps-form__input form-control mb-4"
                                      type="Password"
                                      id="paypalpass"
                                      name="paypalpwd"
                                      placeholder="Password*"
                                      style={{ width: "100%", border: "1px solid #ced4da" }}
                                      onChange={inputChange}
                                      value={paypalPwd}
                                    />
                                  </div>
                                </div>
                              </div>
                            ) : null
                          }
                          <div id="cardinfo" style={{ display: cardCheck ? "block" : "none" }}>
                            <div className="card-element">
                              <CardElement
                                options={CARD_OPTIONS}
                              />
                            </div>
                          </div>
                          <div className="button-row d-flex mt-0" >
                            <button className="btn btn-outline-primary js-btn-prev" type="button" title="Prev" onClick={thirdPrev}>Prev</button>
                            <button className="btn btn-primary js-btn-next" type="button" title="Next" style={{ marginLeft: "auto", background: "#466393", borderColor: "#466393" }} onClick={thirdPageNext}>Next</button>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    {
                      registerStep === 'overbtn' ? (
                        <motion.div initial="hidden" animate="visible" variants={{
                          hidden: {
                            scale: .8,
                            opacity: 0
                          },
                          visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                              delay: .1
                            }
                          },
                        }}>
                          <div className="mt-1 shadow p-4 rounded bg-white " data-animation="scaleIn" style={{ transition: 'background .4s, border- color .4s,color .4s' }} id="overpage" style={{ marginTop: "-2.5rem" }}>
                            <h3 className="multisteps-form__title">Overview</h3>
                            <p className="fw-bold fs-5 mb-2">User İnfo</p>
                            <div className="row">
                              <div className="col-md-6 col-sm-12">
                                <p className="fs-6 mb-0" style={{ fontWeight: "600" }}>First Name:</p>
                              </div>
                              <div className="col-md-6 col-sm-12">
                                <p className="fw-normal mb-0" id="Overview_first_name">{firstName}</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6 col-sm-12">
                                <p className="fs-6 mb-0" style={{ fontWeight: "600" }}>Last Name:</p>
                              </div>
                              <div className="col-md-6 col-sm-12">
                                <p className="fw-normal mb-0" id="Overview_last_name">{lastName}</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6 col-sm-12">
                                <p className="fs-6 mb-0" style={{ fontWeight: "600" }}>Email:</p>
                              </div>
                              <div className="col-md-6 col-sm-12">
                                <p className="fw-normal mb-0" id="Overview_email">{email}</p>
                              </div>
                            </div>
                            <hr style={{ height: "0.5px" }} />
                            <p className="fw-bold fs-5 mb-2">Billing Adress</p>
                            <div className="row">
                              <div className="col-md-6 col-sm-12">
                                <p className="fs-6 mb-0" style={{ fontWeight: "600" }}>Adress:</p>
                              </div>
                              <div className="col-md-6 col-sm-12">
                                <p className="fw-normal mb-0" id="Overview_Adress1">{addres1}</p>
                                <p className="fw-normal mb-0" id="Overview_Adress2">{addres2}</p>
                                <p className="fw-normal mb-0" id="Overview_Country">{country + ' , ' + city + ' , ' + zip}</p>
                              </div>
                            </div>
                            <hr />
                            <p className="fw-bold fs-5 mb-2">Payments</p>
                            <div className="row">
                              <div className="col">
                                <p className="fs-6 mb-0" style={{ fontWeight: "600" }}>Package Name:</p>
                              </div>
                              <div className="col">
                                <p className="fw-normal mb-0" id="Overview_Package_Name">Business</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <p className="fs-6 mb-0" style={{ fontWeight: "600" }}>Package Amount:</p>
                              </div>
                              <div className="col">
                                <p className="fw-normal mb-0" id="Overview_Package_Amount">100 €</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <p className="fs-6 mb-0" style={{ fontWeight: "600" }}>VAT:</p>
                              </div>
                              <div className="col">
                                <p className="fw-normal  mb-0" id="Overview_VATamount">18%</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <p className="fs-5 mb-0" style={{ fontWeight: "600" }}>Total:</p>
                              </div>
                              <div className="col">
                                <p className="fs-5 mb-0" id="Overview_Total">118 €</p>
                              </div>
                            </div>
                            <hr />
                            <div className="row">
                              <div className="col">
                                <p className="fs-6 mb-2" style={{ fontWeight: "600" }}>Payment Type:</p>
                              </div>
                              <div className="col">
                                <p className="fw-normal" id="Overview_Payment_Type">{paypalCheck ? 'Paypal' : 'Card'}</p>
                              </div>
                            </div>
                            <div className="button-row d-flex justify-content-between mt-4">
                              <button className="btn btn-outline-primary js-btn-prev" type="button" title="Prev" onClick={overprev}>Prev</button>
                              <button className="btn btn-success ml-auto float-end" type="button" onClick={paymentComplete}>Complete Payment</button>
                            </div>
                          </div>
                        </motion.div>
                      ) : null
                    }
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div >
      </div >
      {/* ErrorModal */}
      {
        modalStatus ? (
          <div className="modal fade show modal-open" style={{ display: 'block', background: '#1010108f' }} id="modalerror" aria-labelledby="exampleModalLabel">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel"><b className="text-danger">{modalTitle}</b></h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setModalStatus(false) }}></button>
                </div>
                <div className="modal-body">
                  {term ? (
                    modalContent
                  ) : (payment ? (
                    <div className="container">
                      <div className="row" style={{ marginBottom: '.5rem' }}>
                        <div className="col">
                          <span>Check your <b>Email</b> and <b>Password</b></span>
                        </div>
                      </div>
                      <div className="row" style={{ marginBottom: '.5rem' }}>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            style={{ width: "100%" }}
                            disabled
                            readOnly
                            id="CompleteEmail"
                            value={email}
                          />
                        </div>
                      </div>
                      <div className="row" style={{ marginBottom: '.5rem' }}>
                        <div className="col">
                          <div className="input-group flex-nowrap">
                            <input
                              type={eyeinp ? 'text' : 'password'}
                              className="form-control"
                              id="CompletePassword"
                              disabled
                              readOnly
                              style={{ borderRight: 'none' }}
                              value={password}
                            />
                            <span className="input-group-text cursor-pointer" id="addon-wrapping" style={{ padding: '3px', background: 'white', borderColor: '#9da7fc' }} onClick={showhidepass}>
                              <img src={visibility} height="20" id="eyeimg" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                              Default checkbox
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a id="modalerrora" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0 10px 10px', fontFamily: '"Krub", sans-serif', fontSize: '17px', fontWeight: '600', color: '#2d405f', whiteSpace: 'nowrap', transition: '0.3s', }}>{modalContent}</a>
                  ))}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { setModalStatus(false) }}>Close</button>
                  {
                    term ? (
                      <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={accepted}>Understood</button>
                    ) : null
                  }
                  {
                    payment ? (
                      paypalCheck ? (
                        <>
                          <PaypalExpressBtn env={'sandbox'} client={client} currency={'EUR'} total={180} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                        </>
                      ) : (
                        <>
                          <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => { console.log(elements, '===='); Complete() }}>{isProcessing ? "Processing..." : `Payment Complete`}</button>

                        </>)

                    ) : null
                  }
                  {checkoutError ? (<div className="text-sm my-4 text-danger">{checkoutError}</div>) : null}
                </div>
              </div>
            </div>
          </div>
        ) : ''
      }
      <br />
      <br />
    </>
  )
}

const Register = () => (
  <Elements stripe={stripePromise}>
    <Regist />
  </Elements>
)

Register.layout = ({ children }) => <Auth breadCrumb='Register' breadCrumbStatus={true}>{children}</Auth>

export default Register