import { CardGroup, Card } from "react-bootstrap";

function WomenClothes() {
    
    return(   
        <CardGroup className="mt-2">
            <Card className="mx-1">
                <Card.Img variant="top" 
                        src="https://static.bershka.net/4/photos2/2022/V/0/1/p/0023/335/428/0023335428_2_3_3.jpg?t=1646315121233" />
                    <Card.Body>
                        <div>
                            Ripped wide-leg '90s jeans
                        <h6>49,95$</h6>
                        </div>
                    </Card.Body>
            </Card>
            <Card className="mx-1">
                <Card.Img variant="top" 
                          src="https://static.bershka.net/4/photos2/2022/V/0/1/p/5738/619/800/5738619800_2_3_3.jpg?t=1644512497312" />
                    <Card.Body>
                        <div>
                            Satin shirt dress with belt
                        <h6>45,95$</h6>
                        </div>
                    </Card.Body>
            </Card>
            <Card className="mx-1">
                <Card.Img variant="top" 
                          src="https://static.bershka.net/4/photos2/2022/V/0/1/p/5048/665/621/5048665621_2_3_3.jpg?t=1643297437581" />
                    <Card.Body>
                        <div>
                            Slim comfort fit mom jeans
                            <h6>39,95$</h6>
                        </div>
                    </Card.Body>
            </Card>
            <Card className="mx-1">
                <Card.Img variant="top" 
                          src="https://static.bershka.net/4/photos2/2022/V/0/1/p/0890/187/925/0890187925_2_3_3.jpg?t=1645694753628" />
                    <Card.Body>
                        <div>
                            Long sleeve pleated mini dress with belt
                        <h6>49,95$</h6>
                        </div>
                    </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default WomenClothes;