import { ProductImage } from "./components/productImage/productImage"
import { Offers } from "../offers/offers"
import { ProductDescription } from "./components/description/description"
import { Services } from "./components/services/services"
import { ProductsYouLike } from "./components/productsYouLike/productsYouLike"

export const Product = () => {
    return(
        <>
        <div style={{
            padding: "100px 0 150px",
            display: "flex",
            justifyContent: "center",
            background: "#E5E5E5"
        }}>
            <div style = {{width: "1110px"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <ProductImage/>
                    <ProductDescription/>
                </div>
                <Services/>
                <ProductsYouLike/>
            </div>
        </div>
        <Offers/>
        </>
    )
}