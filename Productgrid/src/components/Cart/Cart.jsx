import clsx from 'clsx';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';
import Tooltip from '../ui/Tooltip';

const Cart = ({ quantity, decrement, increment, availableStock }) => {
    const disabledDecrement = quantity === 1;
    const disabledIncrement = quantity >= availableStock;

    return(
        <div>
            <button>
                <RiSubtractFill className="size-5 shrink-0 p-0.5" />
            </button>
            <span>{quantity}</span>
            <Tooltip>
                <button>
                    <RiAddFill className="size-5 shrink-0 p-0.5" />
                </button>
            </Tooltip>
        </div>
    )
}
export default Cart