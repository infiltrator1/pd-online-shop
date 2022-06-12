import {
    Link,
} from "react-router-dom";

import {Button} from "react-bootstrap";

import {useSelector, useDispatch} from 'react-redux'
import {useGetClothes} from "../../graphql/useRequest";

function OrderButton({cloth, buttonSize}) {
    function addToBasket() {
        console.log(cloth)
    }
    return (
        <Link to={`/order/${12345}`}>
        <Button variant="outline-success"
                size={buttonSize}
                onClick={addToBasket}>
            Add to cart
        </Button>
        </Link>
    )
}

export default OrderButton;