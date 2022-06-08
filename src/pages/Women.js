import WomenClothes from "../components/clothes/WomenClothes";
import FiltersWomen from "../components/filters/FiltersWomen";
import FiltersContainer from "../components/filters/FiltersContainer";

function Women() {
    return (
        <>
            <FiltersContainer>
                <FiltersWomen/>
            </FiltersContainer>
            <WomenClothes/>
        </>
    );
}

export default Women;