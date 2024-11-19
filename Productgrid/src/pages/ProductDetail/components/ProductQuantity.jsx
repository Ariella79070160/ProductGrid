import Cart from "../../../components/Cart";
import { useProductDetailsContext } from "./ProductDetailsContext";

const ProductQuantity = ({ availableStock }) => {
    const { itemQuantity, incrementQuantity, decrementQuantity } =
    useProductDetailsContext();

    return(
        <fieldset>
            <legend>Quantity</legend>
            <div>
                <Cart 
                    quantity={itemQuantity}
                    decrement={decrementQuantity}
                    increment={incrementQuantity}
                    availableStock={availableStock}/>
            </div>
        </fieldset>
    )
}

export default ProductQuantity