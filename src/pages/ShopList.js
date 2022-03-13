import SearchNavBarImage from "../components/navbar/image/SearchNavBarImage";
import { Alert } from "react-bootstrap";

function ShopList() {
    return (
      <>
      <SearchNavBarImage/>

      <Alert variant="secondary" 
             className="mt-2 p-5 text-center">
        <Alert.Heading>Empty basket</Alert.Heading>
        <p>
          Your basket is still empty, discover everything we’ve got for you
        </p>
      </Alert>

      </>
    );
  }
  
export default ShopList;