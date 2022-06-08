import {Row, Container} from "react-bootstrap";
import Cloth from "./Cloth";
import {useGetClothes} from "../../graphql/useRequest";
import {queryClient} from "../../index";
import {useEffect} from "react";

function WomenClothes() {
    //const { data, error, isLoading, isSuccess } = useGetClothes({type: "men", category: ["trousers"]});
    useEffect(() => {
        queryClient.removeQueries('getClothes')
    }, [])

    const {data} = useGetClothes({type: "women"});
    // console.log(data);
    return (
        <Container>
            <Row className="mt-1 mb-5">
                {data && data.clothes.map(cloth => <Cloth
                    key={cloth._id}
                    cloth={cloth}
                ></Cloth>)}
            </Row>
        </Container>


    )
}

export default WomenClothes;