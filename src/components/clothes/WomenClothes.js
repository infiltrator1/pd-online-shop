import { CardGroup } from "react-bootstrap";
import Cloth from "./Cloth";

function WomenClothes() {

    const womenClothes = [
        {
            image: "https://static.bershka.net/4/photos2/2022/V/0/1/p/0023/335/428/0023335428_2_3_3.jpg?t=1646315121233",
            description: "Ripped wide-leg '90s jeans",
            price: "49,95$", 
        },
        {
            image: "https://static.bershka.net/4/photos2/2022/V/0/1/p/5738/619/800/5738619800_2_3_3.jpg?t=1644512497312",
            description: "Satin shirt dress with belt",
            price: "49,95$", 
        },
        {
            image: "https://static.bershka.net/4/photos2/2022/V/0/1/p/5048/665/621/5048665621_2_3_3.jpg?t=1643297437581",
            description: "Slim comfort fit mom jeans",
            price: "39,95$", 
        },
        {
            image: "https://static.bershka.net/4/photos2/2022/V/0/1/p/0890/187/925/0890187925_2_3_3.jpg?t=1645694753628",
            description: " Long sleeve pleated mini dress with belt",
            price: "49,95$", 
        },
    ]

    return(
        <CardGroup className="mt-2">
            {womenClothes.map((womenCloth) => (
                    Cloth(womenCloth)                
            ))}
        </CardGroup>
    )
}

export default WomenClothes;