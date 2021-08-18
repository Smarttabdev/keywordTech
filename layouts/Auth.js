import React from "react"
import Header from 'components/Common/Header.js'
import Footer from "../components/Common/Footer"
import { useCurrentUser } from 'hooks/index';

let ps;

export default function Auth({ children, breadCrumb, breadCrumbStatus, homeStatus, ...rest })
{
  const [user, { mutate }] = useCurrentUser();

  return (
    <div>
      <Header
        breadCrumb={breadCrumb}
        breadCrumbStatus={breadCrumbStatus}
        homeStatus={homeStatus}
        buttonStatus={user ? false : true}
      />
      {children}
      <Footer />
    </div>
  );
}
