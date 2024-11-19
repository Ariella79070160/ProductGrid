import clsx from "clsx";

import Star from "./Star";
import { useState } from "react";

const Rating = ({ value, max=5, onChange, selected, showHover }) => {
    const [hoverIndex, setHoverIndex] = useState(null)

    const readOnlyMode = !onChange

    return (
        <div className="star-rating group flex items-center gap-1"> 
            {Array.from({length: max}).map((_, index) => (
                <span
                    key={index}
                    tabIndex={readOnlyMode ? -1 : 0}
                    onMouseEnter={() => !readOnlyMode && setHoverIndex(index)}
                    onMouseLeave={() => !readOnlyMode && setHoverIndex(null)}
                    onClick={() => onChange?.(index+1)}
                    className={clsx(
                        !readOnlyMode && 'cursor-pointer',
                        selected ? 'text-yellow-500' : 'text-yellow-400',
                      )}>
                        <Star 
                            filled={
                                hoverIndex != null ? index <= hoverIndex : value >= index + 1 
                            }
                            halfFilled={
                                value < index + 1 && value > index
                            }
                            className={clsx(showHover && 'group-hover:stroke-indigo-200')}
                    />
                </span>
            ))}
        </div>
    )
}

export default Rating