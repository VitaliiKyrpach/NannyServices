import { CatalogItem } from "../CatalogItem/CatalogItem"
import css from './CatalogList.module.css'

export const CatalogList = ({data}) =>{
    return <ul className={css.list}>
        {data.map((item, index)=> <CatalogItem key={index} data={item}/>)}
    </ul>
}