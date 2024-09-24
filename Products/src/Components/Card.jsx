import { productsList } from "../productList"
import { useEffect, useState } from "react"

function Card() {
    const [products, setProducts] = useState(productsList)
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        setFilteredProducts(products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())))
    }, [searchTerm])    

    return (
        <>
            <div className="flex justify-center p-6">
                <input 
                    className="border-2 rounded-md w-[20rem] p-2 focus:outline-none"
                    type="search" 
                    name="search" 
                    id="search"
                    placeholder="Keresés..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
            </div>
            <div className="grid grid-cols-1 w-[80%] mx-auto md:grid-cols-2 xl:grid-cols-3 gap-5 my-10">
                {filteredProducts.map((product) => (
                    <div className="w-[20rem] border shadow-xl rounded-lg" key={product.id}>
                        <img className="rounded-t-lg h-[16rem]" src={product.img} alt="Product Image" />
                        <h1 className="text-2xl font-bold p-3">{product.name}</h1>
                        <h2 className="text-xl font-thin pl-3">Ár: {product.price} Ft</h2>
                        {product.old_price && <h3 className="text-lg font-light pl-3 text-red-600 line-through">{product.old_price} Ft</h3>}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card