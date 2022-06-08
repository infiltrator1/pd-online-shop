import KidsClothes from "../components/clothes/KidsClothes";
import FiltersKids from "../components/filters/FiltersKids";
import FiltersContainer from "../components/filters/FiltersContainer";

function Kids() {
    return (
        <>
            <FiltersContainer>
                <FiltersKids/>
            </FiltersContainer>
            <KidsClothes/>
        </>
    );
}

export default Kids;