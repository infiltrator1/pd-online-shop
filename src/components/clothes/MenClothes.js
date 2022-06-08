import {Row, Container} from "react-bootstrap";
import Cloth from "./Cloth";
import {useGetClothes} from "../../graphql/useRequest";
import {useEffect} from "react";
import {queryClient} from "../../index";

function MenClothes() {

    useEffect(() => {
        queryClient.removeQueries('getClothes')
    }, [])
    //const { data, error, isLoading, isSuccess } = useGetClothes({type: "men", category: ["trousers"]});
    const {data} = useGetClothes({type: "men"});
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

export default MenClothes;