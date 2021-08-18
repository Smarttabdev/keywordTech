
const Keystep = ({
  number,
  title,
  description,
  delay
}) =>
{
  return (
    <div className="col-lg-4 col-md-6 content-item padr40 padl40" data-aos="fade-up" data-aos-delay={delay * 100}>
      <span>{number}</span>
      <h4>{title}</h4>
      <p>
        {description}
      </p>
    </div>
  )
}

export default Keystep