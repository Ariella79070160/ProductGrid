import clsx from 'clsx'
import { useState, useMemo } from 'react'

import { useProductDetailsContext } from '../components/ProductDetailsContext'
import { getSelectedColorImages } from '../../../utils'


const ProductImages = () => {
    const { product, selectedColor } = useProductDetailsContext()
    const [selectedPreview, setSelectedPreview] = useState(0)

    const images = useMemo(() => (
        getSelectedColorImages({ product, color: selectedColor })
    ), [selectedColor, product])

    return(
        <div className="flex flex-col gap-6">
            <img 
                src={images[selectedPreview].image_url}
                alt='selected preview'
                loading='lazy'
                className="h-[400px] w-full rounded-lg object-cover md:h-[800px]"
            />

            <div  className="flex gap-4 overflow-x-auto">
                {images.map((image, index) => (
                    <img 
                        key={image.image_url + index}
                        src={image.image_url}
                        alt={`Preview ${index+1}`}
                        loading='lazy'
                        onClick={()=>setSelectedPreview(index)}
                        className={clsx(
                            'block shrink-0 rounded-lg',
                            'h-[120px] w-20 object-cover md:h-[190px] md:w-[188px] lg:w-40',
                            'cursor-pointer',
                            index === selectedPreview && 'border-[3px] border-indigo-600',
                        )}
                    />
                ))}
            </div>
        </div>
    )
}
export default ProductImages