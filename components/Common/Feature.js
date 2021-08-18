
const Feature = ({
  image,
  title,
  description,
  details,
  leftPosition
}) =>
{
  return (
    <div className="row content">
      <div className={"col-md-5 " + (!leftPosition ? 'order-1 order-md-2' : '')} data-aos={leftPosition ? "fade-right" : 'fade-left'} data-aos-delay="100">
        <img src={image} className="img-fluid" alt="" />
      </div>
      <div className="col-md-7 pt-4" data-aos={leftPosition ? "fade-left" : 'fade-right'} data-aos-delay="100">
        <h3>
          {title}
        </h3>
        <p className="fst-italic">
          {description}
        </p>
        <ul>
          {
            details.map((detail) => <li key={detail}>
              <i className="fa fa-check fs-6"></i> {detail}
            </li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default Feature