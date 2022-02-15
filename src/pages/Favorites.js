import {useContext} from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/Meetups/MeetupList';

function FavoritesPages(){
    const favoritesCtx = useContext(FavoritesContext)

    let content
    if(favoritesCtx.totalFavorites === 0){
        content = 'You dont have favorites, maybe add some?'
    }else{
        console.log(favoritesCtx.favorites)
        content = <MeetupList meetups={favoritesCtx.favorites} />
    }

    return<section>
            <h1>My Favorites</h1>
            <div>
                {content}
            </div>
        </section>
    
}
export default FavoritesPages;