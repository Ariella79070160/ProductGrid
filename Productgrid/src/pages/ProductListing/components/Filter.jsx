import clsx from 'clsx';
import { RiFilterLine } from 'react-icons/ri';
import { useState } from 'react';

import Button from '../../../components/ui/Button';
import Rating from '../../../components/ui/Rating';
import CheckBox from '../../../components/ui/CheckBox'
import ColorSwatches from '../../../components/ui/ColorSwatches'
import SlideOut from '../../../components/ui/SlideOut';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../components/Accordion'

import { useProductListingContext } from './ProductListingContext';
import{
    COLORS_OPTIONS,
    COLLECTIONS_OPTIONS,
    RATING_OPTIONS,
    CATEGORY_OPTIONS,
} from '../../../constants'

const Filter = () => {
    const {
        selectedCategory,
        selectedCollections,
        selectedColors,
        selectedRating,
        filterCount,
        onSelect,
        resetFilters,
      } = useProductListingContext();
      const [isFilterOpen, setIsFilterOpen] = useState(false);

      const filterItems = (
        <div className="flex flex-col items-center">
          <Accordion>
            <AccordionItem id={COLLECTIONS_OPTIONS.key}>
              <AccordionTrigger>{COLLECTIONS_OPTIONS.title}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 lg:gap-6">
                  {COLLECTIONS_OPTIONS.items.map(({ name, value }) => (
                    <CheckBox
                      label={name}
                      key={value}
                      value={selectedCollections.has(value)}
                      onChange={() => onSelect(COLLECTIONS_OPTIONS.key, value)}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
    
            <AccordionItem id={CATEGORY_OPTIONS.key}>
              <AccordionTrigger>{CATEGORY_OPTIONS.title}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4">
                  {CATEGORY_OPTIONS.items.map(({ name, value }) => (
                    <CheckBox
                      label={name}
                      key={value}
                      value={selectedCategory.has(value)}
                      onChange={() => onSelect(CATEGORY_OPTIONS.key, value)}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
    
            <AccordionItem id={COLORS_OPTIONS.key}>
              <AccordionTrigger>{COLORS_OPTIONS.title}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-2">
                  {COLORS_OPTIONS.items.map(({ color, value }) => (
                    <ColorSwatches
                      key={value}
                      type="checkbox"
                      color={color}
                      selected={selectedColors.has(value)}
                      onClick={() => onSelect(COLORS_OPTIONS.key, value)}
                      size="sm"
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
    
            <AccordionItem id={RATING_OPTIONS.key}>
              <AccordionTrigger>{RATING_OPTIONS.title}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col items-start gap-4 lg:gap-6">
                  {RATING_OPTIONS.items.map(({ value }) => (
                    <button
                      key={value}
                      type="button"
                      className={clsx(
                        'rounded',
                        'focus:outline-none focus:ring-indigo-600/[.12] focus:ring-offset-0 focus-visible:ring-2',
                      )}
                      onClick={() => onSelect(RATING_OPTIONS.key, value)}>
                      <Rating
                        value={value}
                        selected={selectedRating.has(value)}
                        showHover
                      />
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {filterCount > 0 && (
            <Button
              onClick={() => {
                resetFilters();
                setIsFilterOpen(false);
              }}
              label={`Clear All (${filterCount})`}
              variant="link"
              size="lg"
            />
          )}
        </div>
    );
    
    return (
        <div>
            <div className="sticky top-10 hidden lg:block">{filterItems}</div>
            <div className="block lg:hidden">
                <SlideOut 
                    isShown={isFilterOpen}
                    title={<span className="text-xl text-neutral-900">Filter</span>}
                    onClose={()=>setIsFilterOpen(false)}
                    trigger={
                        <Button 
                            label='Filter'
                            variant='secondary'
                            startIcon={RiFilterLine}
                            onClick={()=>setIsFilterOpen(!isFilterOpen)}/>
                    }>
                    {filterItems}
                </SlideOut>
            </div>
        </div>
    )
}
export default Filter