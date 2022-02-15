import { useContext } from 'react'
import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoritesContext from '../../store/favorites-context';

function MeetupItem (props){
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);   

    function toggleFavoriteStatusHandler(){
        if(itemIsFavorite){
            favoritesCtx.removeFavorite(props.id);
        }
        else {
            favoritesCtx.addFavorite({
                key: props.key,
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            })
        }
    }
    function removeItem(){
        console.log(props.id)
        fetch(`https://react-training-e2ac1-default-rtdb.firebaseio.com/meetups/${props.id}.json`,{
            method: 'DELETE',
        }) 
        window.location.reload();
      
    }

    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>

            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>

            <div className={classes.actions}>
                <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                <button onClick={removeItem}>Remove Item</button>
          
            </div>
        </Card>

    </li>
}

export default MeetupItem