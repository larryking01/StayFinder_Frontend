import styles from './roomCard.module.scss'

import cover1 from '../../assets/images/hero_2.jpg'
import { CircleSmall } from 'lucide-react'










const RoomCard = () => {



    return (
        <article className={ styles.roomItem }>
            <section className={ styles.coverImage }>
                <img src={ cover1 } />
            </section>


            <section className={ styles.roomInfo }>
                <h3>Room, 1 King Bed (High Floor)</h3>
                {/* <ReviewSummary /> */}
                <h4>Features</h4>
                <p className={ styles.flexParagraph }> 
                    <CircleSmall size={ 15 } className={ styles.icon }/> 
                    14 sqm
                </p>
                <p className={ styles.flexParagraph }> 
                    <CircleSmall size={ 15 } className={ styles.icon }/>
                        1 bedroom
                </p>
                <p className={ styles.flexParagraph }> 
                    <CircleSmall size={ 15 } className={ styles.icon }/> 
                    Sleeps 2
                </p>
                <p className={ styles.flexParagraph }> 
                    <CircleSmall size={ 15 } className={ styles.icon }/> 
                    1 King bed
                </p>
                <p className={ styles.flexParagraph }> 
                    <CircleSmall size={ 15 } className={ styles.icon }/> 
                    Free wifi
                </p>
            </section>
    

            <section className={ styles.roomInfo }>
                <h3>Cancellation Policy</h3>
                <p className={ styles.flexParagraph }> 
                    <CircleSmall size={ 15 } className={ styles.icon }/>
                    More details on all policy options
                </p>

                <p className={ styles.flexParagraph }>
                    <CircleSmall size={ 15 } className={ styles.icon }/>
                    Free cancellation before July 19, 2026
                </p>

                <p className={ styles.flexParagraph }>
                    <CircleSmall size={ 15 } className={ styles.icon }/>
                    No prepayment needed – pay at the property
                </p>
            </section>


            <section className={ styles.roomInfo }>
                <h3>Extras</h3>
                <div className={ styles.extraItem }>
                    <div className={ styles.extraSelection }>
                        <input type='checkbox' />
                        <p className={ styles.flexParagraph }>No Extras</p>
                    </div>
                    <p className={ styles.priceIndicator }>+ $0</p>
                </div>

                <div className={ styles.extraItem }>
                    <div className={ styles.extraSelection }>
                        <input type='checkbox' />
                        <p className={ styles.flexParagraph }>Breakfast for 2</p>
                    </div>
                    <p className={ styles.priceIndicator }>+ $30</p>
                </div>

                <div className={ styles.extraItem }>
                    <div className={ styles.extraSelection }>
                        <input type='checkbox' />
                        <p className={ styles.flexParagraph }>Breakfast for 2</p>
                    </div>
                    <p className={ styles.priceIndicator }>+ $30</p>
                </div>

                <div className={ styles.extraItem }>
                    <div className={ styles.extraSelection }>
                        <input type='checkbox' />
                        <p className={ styles.flexParagraph }>Breakfast for 2</p>
                    </div>
                    <p className={ styles.priceIndicator }>+ $30</p>
                </div>
            </section>


            <section className={ styles.roomInfo }>
                <h3>Pricing</h3>
                <div className={ styles.pricingItem }>
                    <p className={ styles.flexParagraph }>1 room × 16 nights incl. taxes & fees</p>
                    <p className={ styles.priceIndicator }>$181</p>
                </div>

                <div className={ styles.pricingItem }>
                    <p className={ styles.flexParagraph }>Extras</p>
                    <p className={ styles.priceIndicator }>+ $35</p>
                </div>

                <div className={ styles.pricingItem }>
                    <p className={ styles.flexParagraph }>Total</p>
                    <p className={ styles.priceTotal }>$3500</p>
                </div>

                <div className={ styles.pricingItem }>
                    <p className={ styles.remaningRoomsTtext }>We have 5 left!</p>
                </div>

                <button className={ styles.reserveBtn }>Reserve</button>
                <p className={ styles.notChargedText }>You will not be charged yet</p>
            </section>
        </article>
    )

}




export default RoomCard