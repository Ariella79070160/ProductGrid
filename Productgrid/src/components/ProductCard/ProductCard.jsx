import clsx from 'clsx';
import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import ColorSwatches from "../ui/ColorSwatches"
import Link from "../ui/Link"

import { COLORS } from "../../constants"
import { getUnavailableColors } from '../../utils'

const ProductCard = ({product}) => {
    const navigate = useNavigate();
    const { images, name, colors, inventory } = product
    const { color, list_price, sale_price, discount_percentage } = inventory[0]

    const hasDiscount = discount_percentage || list_price === sale_price

    const unavailableColors = useMemo(
        () => getUnavailableColors(product),
        [product],
    )

    const redirectUrl = `/products/${product.product_id}`;
    const handleKeyDown = useCallback(
        (event) => {
          if (event.key === 'Enter') {
            navigate(redirectUrl);
          }
        },
        [navigate, redirectUrl],
    );

    return (
        <div
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className={clsx(
                'relative w-full',
                'group',
                'flex flex-col gap-4',
                'rounded-lg',
                'outline-none',
                'focus:ring-4 focus:ring-indigo-600/[.12]',
        )}>
            <img
                src={images[0].image_url}
                alt={`${name}'s product preview`}
                loading="lazy"
                className={clsx(
                    'h-[225px] w-full rounded-lg object-cover md:h-[300px]',
                )}
            />
            <div className={clsx('flex flex-col','gap-3 self-stretch h-[168px] py-4', 'min-h-[152px]')}>
                <span className="mb-0.5 text-xs text-neutral-600">
                    {COLORS[color]?.label}
                </span>
                <Link
                    to={redirectUrl}
                    tabIndex={-1}
                    variant="unstyled"
                    className={clsx(
                        'text-lg font-medium text-neutral-900',
                        'group-hover:text-indigo-700',
                )}>
                    <span aria-hidden={true} className="absolute inset-0"/>
                        {name}
                </Link>
                <div className="mt-3 flex items-center gap-2">
                    <span className="text-lg text-neutral-500">
                        ${hasDiscount ? sale_price : list_price}
                    </span>
                    {hasDiscount && (
                        <span className="text-xs text-neutral-600 line-through">
                            ${list_price}
                        </span>
                    )}
                </div>
                <div className="mt-3 flex flex-wrap gap-1">
                    {colors.map((color) => (
                        <ColorSwatches
                            key={color}
                            color={COLORS[color].value}
                            size="sm"
                            outOfStock={unavailableColors.includes(color)}
                        />
                        ))}
                </div>
            </div>
      </div>
    )
}

export default ProductCard