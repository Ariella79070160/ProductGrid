import clsx from "clsx";

import Star from "./Star";
import { useState } from "react";

const Rating = ({ value, max=5, onChange, selected, showHover }) => {
    const [hoverIndex, setHoverIndex] = useState(null)

    const readOnlyMode = !onChange

    return (
        <div>
            {Array.from({length: max}).map((_, index) => (
                <span
                    key={index}
                    tabIndex={readOnlyMode ? -1 : 0}
                    onMouseEnter={() => !readOnlyMode && setHoverIndex(index)}
                    onMouseLeave={() => !readOnlyMode && setHoverIndex(null)}
                    onClick={() => onChange?.(index+1)}>
                        <Star 
                            filled={
                                hoverIndex != null ? index <= hoverIndex : value >= index + 1 
                            }
                            halfFilled={
                                value < index + 1 && value > index
                            }/>
                </span>
            ))}
        </div>
    )
}

export default Rating