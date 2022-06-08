import {
    Link,
} from "react-router-dom";

import {Button} from "react-bootstrap";

import {useSelector, useDispatch} from 'react-redux'
import {useGetClothes} from "../../graphql/useRequest";

function OrderButton({productId, buttonSize}) {
    function addToBasket() {
        console.log(productId)
    }
    return (
        <Button variant="outline-success"
                size={buttonSize}
                onClick={addToBasket}>
            Add to cart
        </Button>
    )
}

export default OrderButton;