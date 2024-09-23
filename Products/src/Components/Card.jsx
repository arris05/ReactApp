import { productsList } from "../productList"

function Card() {
    return (
        <>
            {productsList.map((product) => (
                <div className="w-[20rem] border shadow-xl rounded-lg" key={product.id}>
                    <img className="rounded-t-lg h-[16rem]" src={product.img} alt="Product Image" />
                    <h1 className="text-2xl font-bold p-3">{product.name}</h1>
                    <h2 className="text-xl font-thin pl-3">Ár: {product.price} Ft</h2>
                    {product.old_price && <h3 className="text-lg font-light pl-3 text-red-600 line-through">{product.old_price} Ft</h3>}
                </div>
            ))}
        </>
    )
}

export default Card