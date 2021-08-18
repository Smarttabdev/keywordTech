import Auth from 'layouts/Auth.js'
import term from 'variables/terms_de.js'

const Policy = () =>
{
  return (
    <div className="mt-5">
      {term.policy}
    </div>
  )
}

Policy.layout = ({ children }) => <Auth breadCrumbStatus={true} breadCrumb='Datenschutz-Bestimmungen
' >{children}</Auth>
export default Policy