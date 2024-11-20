import clsx from 'clsx';
import { useState, useRef, createContext, useContext } from 'react';
import { RiAddCircleLine, RiIndeterminateCircleLine } from 'react-icons/ri';

const AccordinItemContext = createContext()

const AccordinItem = ({ children, id }) => {
    const [isOpen, setIsOpen] = useState(true)

    return(
        <div>
            <AccordinItemContext.Provider value={{ id, isOpen, setIsOpen}}>
                { children }
            </AccordinItemContext.Provider>
        </div>
    )
}

const AccordinTrigger = ({ children }) => {
    const { id, isOpen, setIsOpen } = useContext(AccordinItemContext)
    const Icon = isOpen ? RiIndeterminateCircleLine : RiAddCircleLine

    return(
        <button
            className={clsx(
                'w-full',
                'flex items-center justify-between gap-6',
                'focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]',
                'text-left text-lg font-medium text-neutral-900',
            )}
            aria-expanded={isOpen}
            aria-controls={`accordion-content-${id}`}
            id={`accordion-header-${id}`}
            onClick={()=>setIsOpen(!isOpen)}>
            <span>{children}</span>
            <Icon className="size-6 text-neutral-400"/>
        </button>
    )
}

const AccordinContent = ({ children }) => {
    const contentRef = useRef(null)
    const { id, isOpen } = useContext(AccordinItemContext)

    return(
        <div
            id={`accordion-content-${id}`}
            role="region"
            aria-labelledby={`accordion-header-${id}`}
            className={clsx(
                'transition-max-height overflow-hidden duration-300',
                'pr-12',
                isOpen && 'mt-2',
            )}
            style={{
                maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0'
            }}
            ref={contentRef}
            >
            {children}
        </div>
    )
}

const Accordin = ({ children }) => {
    return(
        <div className="w-full">
            {children.map((item, index) => (
                <div
                    key={item.props.id}>
                    {item}
                    {index !== children.length - 1 && (
                        <div className="mb-[23px] mt-8 h-[1px] bg-neutral-200" />
                    )}
                </div>
            ))}
        </div>
    )
}

export { Accordin, AccordinItem, AccordinTrigger, AccordinContent }