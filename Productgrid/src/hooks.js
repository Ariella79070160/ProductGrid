import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    // 初始状态
    setMatches(mediaQuery.matches);

    // 事件监听器
    const handleChange = (event) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // 清理函数
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
};


export const useProductFilters = () => {
   const { search } = useLocation()
   const isMounted = useRef(false)

   const query = new URLSearchParams(search)
   const collectionId = query.get('collectionId')

   const [selectedCollections, setSelectedCollections] = useState(
      collectionId ? new Set().add(collectionId) : new Set()
   )
   const [selectedCategory, setSelectedCategory] = useState(new Set())
   const [selectedColors, setSelectedColors] = useState(new Set())
   const [selectedRating, setSelectedRating] = useState(new Set())
   const [selectedSort, setSelectedSort] = useState({
      value: 'created',
      direction: 'desc'
   })

   const typeMap = {
    collections: [selectedCollections, setSelectedCollections],
    category: [selectedCategory, setSelectedCategory],
    colors: [selectedColors, setSelectedColors],
    rating: [selectedRating, setSelectedRating],
  };

  const onSelect = (type, value) => {
    const [currentSet, setCurrentSet] = typeMap[type];
    if (!currentSet || !setCurrentSet) return; 
  
    const newSelectedItems = new Set(currentSet);
    newSelectedItems.has(value)
      ? newSelectedItems.delete(value)
      : newSelectedItems.add(value);
  
    setCurrentSet(newSelectedItems);
  };

  const resetFilters = () => {
    setSelectedCollections(new Set());
    setSelectedCategory(new Set());
    setSelectedColors(new Set());
    setSelectedRating(new Set());
  };

  const filterCount =
    selectedCollections.size +
    selectedCategory.size +
    selectedColors.size +
    selectedRating.size;

  useEffect(() => {
    if (isMounted.current) {
      if (collectionId) {
        resetFilters();
        setSelectedCollections(new Set().add(collectionId));
      }
    }
    isMounted.current = true;
  }, [collectionId]);

  return {
    selectedCollections,
    selectedCategory,
    selectedColors,
    selectedRating,
    selectedSort,
    filterCount,
    onSelect,
    resetFilters,
    onSortChange: setSelectedSort,
  };
}

