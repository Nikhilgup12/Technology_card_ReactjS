import './index.css'
const CardItem = props => {
  const {carditem} = props
  const {className, title, description, imgUrl} = carditem
  return (
    <li className={className}>
      <h1 className="card-heading"> {title} </h1>
      <p className="card-para"> {description} </p>
      <div className="card-image-container">
        <img src={imgUrl} className="avatar" alt="avatar" />
      </div>
    </li>
  )
}
export default CardItem
