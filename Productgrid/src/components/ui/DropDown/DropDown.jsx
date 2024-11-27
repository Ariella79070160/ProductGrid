import clsx from 'clsx';
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import Button from '../Button';

const DropDownContext = createContext()

const DropDownItem = ({ children, isSelected, onSelect }) => {
    const { isOpen, setIsOpen } = useContext(DropDownContext)
    const handleOptionClick = () => {
        setIsOpen(false)
        if(onSelect){
            onSelect()
        }
    }
    return(
        <div
            onClick={handleOptionClick}>
            {children}
        </div>
    )
}

const DropDown = ({ children }) => {
    const id = useId()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
                <Button 
                     type="button"
                     label="Sort by"
                     onClick={() => setIsOpen(!isOpen)}
                     id={id}
                     aria-expanded="true"
                     aria-haspopup="true"
                     variant="secondary"
                     endIcon={RiArrowDownSLine}
                />
            </div>
            <div
            className={clsx(
                'z-dropdown max-h-50 absolute right-0 mt-2 w-56 origin-top-right',
                'border border-[#e6e6e6]',
                'rounded-lg bg-white shadow-lg',
                'origin-top transform transition duration-300 ease-in-out',
                isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0',
            )}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby={id}
            tabIndex={-1}>
                <div className="flex flex-col gap-2 p-2" role="none">
                    <DropDownContext.Provider value={{ isOpen, setIsOpen }}>
                        {children}
                    </DropDownContext.Provider>
                </div>
            </div>
        </div>
    )
}

export { DropDown, DropDownItem };