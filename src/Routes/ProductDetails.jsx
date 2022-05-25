let ProductDetails = (props)=>{
    if(props.Data.id != 0)
    {
        return(
            <>
            <h3 className='h-3 my-3 title'>Details</h3>
            <ul id="details">
                <li><strong>Name</strong> {props.Data.name}</li>
                <li><strong>Description</strong> {props.Data.productDesc}</li>
                <li>
                    <img src={`images/${props.Data.productImg}`}  
                    style={{
                        width: 100
                    }} />
                </li>
            </ul>
            </>
        )
    }
}

export default ProductDetails;

