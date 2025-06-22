const Book = (props) => {
    const { author, title, image, addToCartBtn,} = props;
    const displayTitle = () => {
        console.log(title);
    }
    return (
        <article className="book">
            <div className="img-container">
            <img src={image} alt={title} />
            </div>
            <h2 className="bookTitle">{title}</h2>
            <h4 className="author">{author}</h4>
            <button className="addToCart" type="button" onClick={() => { addToCartBtn(); displayTitle(); }}>Add to cart</button>
        </article>
    )
}
export default Book;