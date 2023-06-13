import * as Styled from './styled'
import delivery from '../../../img/catalog/delivery.png'
import design from '../../../img/catalog/design.png'
import fitting from '../../../img/catalog/fitting.png'
import Group from '../../../img/catalog/Group.png'

export const Services = () => {
    return(
        <div style = {{paddingTop: "150px", display: "flex", justifyContent: "space-around"}}>
            <div style = {{width: "540px"}}>
                <Styled.ServicesInfoText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem eu commodo porttitor erat.
                Amet mauris cursus bibendum in egestas. Nulla porttitor amet quam elit, mauris. Tortor egestas
                dignissim augue suspendisse rutrum pretium lobortis dolor. Commodo sagittis at amet faucibus 
                faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut
                vitae at ornare sed.
                Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque 
                et augue. Sed dignissim amet ut vitae at ornare sed.
                </Styled.ServicesInfoText>
                <Styled.ReadMoreButton>читать полностью</Styled.ReadMoreButton>
            </div>
            <div>
                <div style={{display: 'flex', alignItems: "end", marginBottom: "31px"}}>
                    <Styled.ServicesTypes style={{marginRight: "60px"}}>
                        <img src={delivery}/>
                        <div className='ServicesTypesText'>Бесплатная <br/> доставка</div>
                    </Styled.ServicesTypes>
                    <Styled.ServicesTypes>
                        <img src={design}/>
                        <div className='ServicesTypesText'>Индивидуальный <br/> дизайн</div>
                    </Styled.ServicesTypes>
                </div>

                <div style={{display: 'flex', alignItems: "end"}}>
                    <Styled.ServicesTypes style={{marginRight: "60px"}}>
                        <img src={fitting}/>
                        <div className='ServicesTypesText'>Бесплатная <br/> примерка</div>
                    </Styled.ServicesTypes>
                    <Styled.ServicesTypes>
                        <img src={Group}/>
                        <div className='ServicesTypesText'>Личный <br/> подход</div>
                    </Styled.ServicesTypes>
                </div>
            </div>
        </div>
    )
}