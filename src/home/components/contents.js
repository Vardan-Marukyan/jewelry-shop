import { Products } from "./products/products";
import { Information } from "./information/information"; 
import { Blog } from "./blog/blog";
import { SocialNetwork } from "./socialNetwork/socialNetwork";
import { Offers } from "../../offers/offers";
import { HeaderInfo } from "./hiderInfo/headerInfo";

export const Contents = () => {
    return(
        <>
            <HeaderInfo/>
            <Products/>
            <Information/>
            <Blog/>
            <SocialNetwork/>
            <Offers/>
        </>
    )
} 