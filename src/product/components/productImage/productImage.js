import * as Styled from './styled'
import img from '../../../img/catalog/gabanna.png'

export const ProductImage = () => {
    return (
        <div style={{width: "540px"}}>
            <Styled.MainImage src={img}/>
            <div style={{display: "flex", justifyContent: "space-between", padding: "30px 0"}}>
                <Styled.Image src={img}/>
                <Styled.Image src={img}/>
                <Styled.Image src={img}/>
            </div>
        </div>
    )
}