import { Catalog } from "./catalog.js/catalog"
import { Services } from "./services/services"
import { Offers } from "../../offers/offers"

export const CatalogContents = () => {
    return (
        <>
        <div style={{
            padding: "100px 0 150px",
            display: "flex",
            justifyContent: "center",
            background: "#E5E5E5"
        }}>
            <div style = {{width: "1110px"}}>
                <Catalog/>
                <Services/>
            </div>
        </div>
        <Offers/>
        </>
    )
}