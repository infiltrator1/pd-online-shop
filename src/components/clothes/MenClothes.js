import { CardGroup } from "react-bootstrap";
import Cloth from "./Cloth";

function MenClothes() {
    
    const menClothes = [
        {
            image: "https://static.bershka.net/4/photos2/2022/V/0/2/p/0526/335/428/0526335428_2_3_3.jpg?t=1643288948072",
            description: "Wide-leg '90s jeans",
            price: "49,95$", 
        },
        {
            image: "https://static.bershka.net/4/photos2/2022/V/0/2/p/0678/478/621/0678478621_2_3_3.jpg?t=1643022748899",
            description: "Wide-leg piqué trousers",
            price: "59,95$", 
        },
        {
            image: "https://static.bershka.net/4/photos2/2022/V/0/2/p/0618/019/800/0618019800_2_3_3.jpg?t=1640105351049",
            description: "Wide-leg-5-pocket utility trousers",
            price: "49,95$", 
        },
        {
            image: "https://static.bershka.net/4/photos2/2022/V/0/2/p/0608/019/505/0608019505_2_3_3.jpg?t=1643816542983",
            description: " Wide-leg cotton carpenter trousers",
            price: "49,95$", 
        },
    ]

    return(
        <CardGroup className="mt-2">
            {menClothes.map((menCloth) => (
                    Cloth(menCloth)                
            ))}
        </CardGroup>
    )
}

export default MenClothes;