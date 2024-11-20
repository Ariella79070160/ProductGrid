import clsx from "clsx"

import ProductListingContextProvider from "./components/ProductListingContext"
import ProductListingSection from "./components/ProductListingSection"

import Button from "../../components/ui/Button"

const ProductListing = () => {
    return(
        <ProductListingContextProvider>
            <div>
                <div>
                    <Button 
                        label='Return to Home'
                        variant="link"
                        href='#'/>
                </div>
                <div></div>
                <div>
                    <ProductListingSection />
                </div>
            </div>
        </ProductListingContextProvider>
    )
}
export default ProductListing