
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import Link from 'next/link'
import { useRouter } from "next/router"
import { useCurrentUser } from 'hooks/index';



const Header = ({
  breadCrumbStatus,
  breadCrumb,
  homeStatus,
  buttonStatus
}) =>
{
  const router = useRouter()
  const [user, { mutate }] = useCurrentUser();


  const logout = async () =>
  {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    mutate(null)
  }

  return (
    <>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo"><a href="/">KeywordAmazon</a></h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link href={homeStatus ? "#hero" : "/"}><a className="nav-link scrollto ">Home</a></Link></li>
              {
                homeStatus ? (
                  <>
                    <li><Link href="#about"><a className="nav-link scrollto">About</a></Link></li>
                    <li><Link href="#services"><a className="nav-link scrollto">Services</a></Link></li>
                    <li><Link href="#testimonials"><a className="nav-link scrollto">Testimonials</a></Link></li>
                    <li><Link href="#pricing"><a className="nav-link scrollto">Pricing</a></Link></li>
                    <li><Link href="#faq"><a className="nav-link scrollto">FAQ</a></Link></li>
                    <li><Link href="#contact"><a className="nav-link scrollto">Contact</a></Link></li>
                  </>
                ) : null
              }
              <li className="dropdown"><a href="/user/profile"><span>Profile</span> <KeyboardArrowDownIcon /></a>
                <ul>
                  <li><a href="/user/profile">Settings</a></li>
                  <li><a className="cursor-pointer" onClick={logout}>Logout</a></li>
                </ul>
              </li>
              {buttonStatus ? (
                <>
                  <li><Link href="/auth/login"><a className={"getstarted" + (router.pathname == "/auth/login" ? " active" : "")}>Log-in</a></Link></li>
                  <li><Link href="/auth/register"><a className={"getstarted" + (router.pathname == "/auth/register" ? " active" : "")}>Register</a></Link></li>
                </>
              ) : null
              }

            </ul>
            {/* <ReorderOutlinedIcon className="mobile-nav-toggle" /> */}
          </nav>
        </div>
      </header>
      {
        breadCrumbStatus ? (
          <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">
              <ol>
                <li><a href="index.html">Home</a></li>
                <li>{breadCrumb}</li>
              </ol>
            </div>
          </section>
        ) : ''
      }

    </>
  )
}

export default Header