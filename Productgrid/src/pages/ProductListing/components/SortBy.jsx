import { DropDown, DropDownItem } from "../../../components/ui/DropDown"
import { useProductListingContext } from "./ProductListingContext"
import { SORT_OPTIONS } from '../../../constants'

const SortBy = () => {
    const { onSortChange, selectedSort } = useProductListingContext()
    return(
        <DropDown>
            {SORT_OPTIONS.map((option) => (
                <DropDownItem
                    key={option.value + option.direction}
                    isSelected={
                        option.value === selectedSort.value &&
                        option.direction === selectedSort.direction
                    }
                    onSelect={() => 
                        onSortChange({ value: option.value, direction: option.direction})
                    }>
                    {option.name}
                </DropDownItem>
            ))}
        </DropDown>
    )
}
export default SortBy