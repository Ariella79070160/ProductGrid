import clsx from 'clsx';
import Button from '../../components/ui/Button'
import ProductDetailsContextProvider from './components/ProductDetailsContext'
import ProductDetailSection from './components/ProductDetailSection'

const ProductDetailPage = () => {
    return (
      <ProductDetailsContextProvider>
        <>
            <Button 
                    label='Return to Home'
                    variant='link'
                    href='/'/>
                <ProductDetailSection />
            </>
            <div
            className={clsx(
                'w-full',
                'px-4 py-12 md:py-16 lg:p-24',
                'grid grid-cols-4 gap-x-4 gap-y-12 md:grid-cols-6 md:gap-x-8 lg:grid-cols-12',
            )}>
                
            </div>
      </ProductDetailsContextProvider>
    );
  };
  
  export default ProductDetailPage;


