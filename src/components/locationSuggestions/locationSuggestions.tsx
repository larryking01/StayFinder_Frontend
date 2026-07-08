import styles from './locationSuggestions.module.scss'
import { MapPin } from 'lucide-react'







const LocationSuggestions = () => {



    return (
        <main className={ styles.locationSuggestions }>
            <section className={ styles.locationSuggestions__locationItem }>
                <MapPin size={ 20 }  className={ styles.icon }/>
                <div className={ styles.location }>
                    <h3>Square One Shopping Center</h3>
                    <p>Toronto, Ontario, Canada</p>
                </div>
            </section>

            <section className={ styles.locationSuggestions__locationItem }>
                <MapPin size={ 20 }  className={ styles.icon }/>
                <div className={ styles.location }>
                    <h3>Square One Shopping Center</h3>
                    <p>Toronto, Ontario, Canada</p>
                </div>
            </section>

            <section className={ styles.locationSuggestions__locationItem }>
                <MapPin size={ 20 }  className={ styles.icon }/>
                <div className={ styles.location }>
                    <h3>Square One Shopping Center</h3>
                    <p>Toronto, Ontario, Canada</p>
                </div>
            </section>

            <section className={ styles.locationSuggestions__locationItem }>
                <MapPin size={ 20 }  className={ styles.icon }/>
                <div className={ styles.location }>
                    <h3>Square One Shopping Center</h3>
                    <p>Toronto, Ontario, Canada</p>
                </div>
            </section>

            <section className={ styles.locationSuggestions__locationItem }>
                <MapPin size={ 20 }  className={ styles.icon }/>
                <div className={ styles.location }>
                    <h3>Square One Shopping Center</h3>
                    <p>Toronto, Ontario, Canada</p>
                </div>
            </section>

            <section className={ styles.locationSuggestions__locationItem }>
                <MapPin size={ 20 }  className={ styles.icon }/>
                <div className={ styles.location }>
                    <h3>Square One Shopping Center</h3>
                    <p>Toronto, Ontario, Canada</p>
                </div>
            </section>

            <section className={ styles.locationSuggestions__locationItem }>
                <MapPin size={ 20 }  className={ styles.icon }/>
                <div className={ styles.location }>
                    <h3>Square One Shopping Center</h3>
                    <p>Toronto, Ontario, Canada</p>
                </div>
            </section>

            <section className={ styles.locationSuggestions__locationItem }>
                <MapPin size={ 20 }  className={ styles.icon }/>
                <div className={ styles.location }>
                    <h3>Square One Shopping Center</h3>
                    <p>Toronto, Ontario, Canada</p>
                </div>
            </section>



        </main>
    )
}





export default LocationSuggestions