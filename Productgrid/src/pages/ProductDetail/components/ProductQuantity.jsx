import Cart from "../../../components/Cart";
import { useProductDetailsContext } from "./ProductDetailsContext";

const ProductQuantity = ({ availableStock }) => {
    const { itemQuantity, incrementQuantity, decrementQuantity } =
    useProductDetailsContext();

    return(
        <fieldset aria-label="Choose a color">
            <legend className="text-sm text-neutral-500">Quantity</legend>
            <div className="mt-4">
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