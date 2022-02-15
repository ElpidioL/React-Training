import {Link} from 'react-router-dom'
import classes from './MainNav.module.css'
import { useContext } from 'react'
import FavoritesContext from '../../store/favorites-context'

function MainNav(){
    let favoritesCtx = useContext(FavoritesContext);

    return(
        <header className={classes.header}>
            <div className={classes.logo}>React Training</div>
            <nav>
                <ul>
                    <li>
                    <Link to="/">All MeetUps</Link>
                    </li>
                    <li>
                    <Link to="/NewMeetUp">New MeetUps</Link>
                    </li>
                    <li>
                    <Link to="/Favorites">Favorites 
                    <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNav