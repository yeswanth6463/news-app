import image from '../assets/News.jpg' 

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-2 my-3 py-2 px-2" style={{maxWidth:"345px"}}>
    <img src={src?src:image} style={{height:"200px",width:"325px"}}className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):"know more about this pls click the read more lots information about this headline "}</p>
      <a href={url} className="btn btn-primary">Read more</a>
    </div>
  </div>
  )
}

export default NewsItem