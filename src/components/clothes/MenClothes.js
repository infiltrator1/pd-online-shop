import { Row, Container } from "react-bootstrap";
import Cloth from "./Cloth";
import { useGetClothes } from "../../graphql/useRequest";

function MenClothes() {
    

    //const { data, error, isLoading, isSuccess } = useGetClothes({type: "men", category: ["trousers"]});
    const { data } = useGetClothes({type: "men"});
   // console.log(data);
    return(
        <Container fluid>   
            <Row className="justify-content-center mt-2" xl={5}>
                    {data && data.clothes.map(cloth => <Cloth 
                                                key={cloth._id}
                                                id={cloth._id}
                                                name={cloth.name}
                                                image={cloth.image}
                                            // description={cloth.description}
                                                price={cloth.price}
                                            ></Cloth>)}
                </Row>
        </Container>
    )
}

export default MenClothes;