import './index.css'
function Card(props) {
    const { brand , imageURL , price , title } = props.item

    return <div className='cards'>
        <img className='api-imges' src={imageURL} />    
            <h3 className='card-span'>$ {price}</h3>
            <h4 className='card-span'>$ {brand}</h4>
            <h4 className='card-span'>{title}</h4>
            {/* <p className='card-span'>{description}</p> */}
    </div>

}
export default Card;