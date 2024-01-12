import './index.css'
function Card(props) {
    const { price, brand, description, id, images } = props

    return <div className='cards'>
        <img className='api-imges' src={images[0]} />
            <h3 className='card-span'>$ {price}</h3>
            <h4 className='card-span'>{brand}</h4>
            <p className='card-span'>{description}</p>
    </div>

}
export default Card;