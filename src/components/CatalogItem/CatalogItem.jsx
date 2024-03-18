import css from './CatalogItem.module.css'
export const CatalogItem = ({data}) =>{
    return <li className={css.card}>
        <ul className={css.techlist}>
                        <li className={css.techItem}>{data.location}</li>
                        <li className={css.techItem}>Rating: {data.rating}</li>
                        <li className={css.techItem}>Price / 1 hour: {data.price_per_hour}</li>
                    </ul>
        <div className={css.imgWrapper}>
            <img className={css.avatar} src={data.avatar_url} alt="avatar" />
        </div>
        <div>
            <div className={css.nameWrapper}>
                <p>Nanny</p>
                <h2>{data.name}</h2>
            </div>
            <ul className={css.infoWrapper}>
                <li className={css.infoItem}>Age:</li>
                <li className={css.infoItem}>Experience: {data.experience}</li> 
                <li className={css.infoItem}>Kids Age: {data.kids_age}</li>
                <li className={css.infoItem}>Education: {data.education}</li>  
            </ul>
            <p>{data.about}</p>
        </div>
    </li>
}