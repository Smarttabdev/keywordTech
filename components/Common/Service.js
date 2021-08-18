
const Service = ({
  icon,
  title,
  description,
  delay
}) =>
{
  return (
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-3" data-aos="fade-up" data-aos-delay={delay * 100}>
      <div className="icon-box">
        <div className="icon"><i className={"fa " + icon}></i></div>
        <h4 className="title"><a href="">{title}</a></h4>
        <p className="description">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Service