import { Link } from 'react-router-dom'
import style from './NotFound.module.css'

export const NotFound = () => {
    return (
        <div className={style.notFound}>
            <h1>404</h1>
            <p>Page not found.</p>
            <Link to="/" className={style.backBtn}>Go Home</Link>
        </div>
    )
}

