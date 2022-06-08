import MenClothes from "../components/clothes/MenClothes";
import FiltersMen from "../components/filters/FiltersMen";
import FiltersContainer from "../components/filters/FiltersContainer";

function Men() {
    return (
        <>
            <FiltersContainer>
                <FiltersMen/>
            </FiltersContainer>
            <MenClothes/>
        </>
    );
}

export default Men;