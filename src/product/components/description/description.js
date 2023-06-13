import * as Styled from './styled'

export const ProductDescription = () => {
    return (
        <div>
        <div style={{border: "1px solid #D6D6D6", padding: "10px"}}>
            <Styled.DescriptionCard>
                <Styled.DescriptionTitle>Подвеска Dolce & Gabbara</Styled.DescriptionTitle>
                <div style = {{borderBottom: "1px solid #D6D6D6", paddingBottom: "30px", display: 'flex'}}>
                    <Styled.productHashtags>Категория:</Styled.productHashtags>
                    <Styled.productHashtags>Подвески</Styled.productHashtags>
                    <Styled.productHashtags>Бренд:</Styled.productHashtags>
                    <Styled.productHashtags>Dolce & Gabbara</Styled.productHashtags>
                </div>
                <Styled.DescriptionText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio
                    nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus.
                    Tincidunt est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci est,
                    fames sit luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac
                    varius at amet viverra feugiat non massa.
                    Vel vel in urna, sodales urna ac sed felis. Tellus augue et senectus malesuada faucibus
                    sollicitudin ornare. Sit non et sit enim in ornare velit. Ac imperdiet vitae, orci, nec
                    scelerisque enim sit enim risus. 
                    Et nulla sit convallis orci est, fames sit luctus lacus. 
                </Styled.DescriptionText>
                <Styled.Price>200 000 ₽ </Styled.Price>
                <div>
                    <Styled.BuyButton>купить</Styled.BuyButton>
                    <Styled.AddCartButton>добавить в корзину</Styled.AddCartButton>
                </div>
            </Styled.DescriptionCard>
        </div>
        </div>
    )
}