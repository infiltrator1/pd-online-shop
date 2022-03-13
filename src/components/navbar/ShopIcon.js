import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 

function ShopIcon() {

    return(
        <FontAwesomeIcon
            className="align-self-center ms-2"
            size="lg"
            icon={faCartShopping} />
    )
}

export default ShopIcon;