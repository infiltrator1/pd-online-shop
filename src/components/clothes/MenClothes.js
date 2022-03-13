import { CardGroup, Card } from "react-bootstrap";

function MenClothes() {
    
    return(
        <CardGroup className="mt-2">
            <Card className="mx-1">
                <Card.Img variant="top" 
                          src="https://static.bershka.net/4/photos2/2022/V/0/2/p/0526/335/428/0526335428_2_3_3.jpg?t=1643288948072"/>
                    <Card.Body>
                        <div>
                            Wide-leg '90s jeans
                        <h6>49,95$</h6>
                        </div>
                    </Card.Body>
            </Card>
            <Card className="mx-1">
                <Card.Img variant="top" 
                          src="https://static.bershka.net/4/photos2/2022/V/0/2/p/0678/478/621/0678478621_2_3_3.jpg?t=1643022748899" />
                    <Card.Body>
                        <div>
                            Wide-leg piqué trousers
                        <h6>59,95$</h6>
                        </div>
                    </Card.Body>
            </Card>
            <Card className="mx-1">
                <Card.Img variant="top" 
                          src="https://static.bershka.net/4/photos2/2022/V/0/2/p/0618/019/800/0618019800_2_3_3.jpg?t=1640105351049" />
                    <Card.Body>
                        <div>
                            Wide-leg-5-pocket utility trousers
                        <h6>49,95$</h6>
                        </div>
                    </Card.Body>
            </Card>
            <Card className="mx-1">
                <Card.Img variant="top" 
                          src="https://static.bershka.net/4/photos2/2022/V/0/2/p/0608/019/505/0608019505_2_3_3.jpg?t=1643816542983" />
                    <Card.Body>
                        <div>
                            Wide-leg cotton carpenter trousers
                        <h6>49,95$</h6>
                        </div>
                    </Card.Body>
            </Card>
        </CardGroup>
    )
}

export default MenClothes;