import Auth from 'layouts/Auth.js'
import term from 'variables/terms_de.js'


const LegalNotice = () =>
{
  return (
    <div className="mt-5">
      {term.legal}
    </div>
  )
}

LegalNotice.layout = ({ children }) => <Auth breadCrumbStatus={true} breadCrumb='Impressum
' >{children}</Auth>
export default LegalNotice