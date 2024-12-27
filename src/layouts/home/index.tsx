import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import useTranslation from 'next-translate/useTranslation';

import { useWindowResize } from '@/hooks';

import { Product } from './components/product';
import { ProductCarousel } from './components/productCarousel';
import { Products } from './components/products';
import { SideBar } from './components/sideBar';
import { productFilter } from './constants';
import { ProductsItemI } from './declare';

export const HomePage: PageProps = () => {
  const { t } = useTranslation('home');
  const { isMobileDevice } = useWindowResize();

  const productData = [
    {
      title: 'Mahjong Ways',
      description: '4TECH™ has just launched their very\nfirst Mahjong inspired slot machine gam…',
      imageUrl: '/images/product-01.webp',
      thumbnailUrl: '/images/thumbnail-01.webp'
    },
    {
      title: 'Wild Bandito',
      description: 'Águila which means ‘The Eagle’ is a three-\npeson Mexican bandit team that is activ…',
      imageUrl: '/images/product-02.webp',
      thumbnailUrl: '/images/thumbnail-02.webp'
    }
  ];

  const productsData: ProductsItemI[] = [
    {
      title: 'Music',
      description: 'Music makes everything\nbetter, and these games\nwill grove to it!',
      icon: 'music',
      className: 'bg-blue',
      imageUrl1: '/images/product-03.webp',
      imageUrl2: '/images/product-04.webp',
      imageUrl3: '/images/product-05.webp',
      imageUrl4: '/images/product-06.webp',
      imageUrl5: '/images/product-07.webp',
    },
    {
      title: 'Table Games',
      description: 'The classic table games\nfor the gentlemen and\nladies.',
      icon: 'poker',
      className: 'bg-green',
      imageUrl1: '/images/product-03.webp',
      imageUrl2: '/images/product-04.webp',
      imageUrl3: '/images/product-05.webp',
      imageUrl4: '/images/product-06.webp',
      imageUrl5: '/images/product-08.webp',
    }
  ];

  return (
    <div className="home-page">
      <div className="wrapper">
        <SideBar />
        <div className="content">
          <ProductCarousel
            title={t('hotGame.title')}
            filter={
              <Select
                size="small"
                value={1}
                options={productFilter}
                className="filter"
                suffixIcon={
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-[10px]">{'AZ'}</span>
                    <DownOutlined className="ml-1" />
                  </div>
                }
              />
            }
            className="sm:px-[25px]"
            childrenClassName="!grid !grid-cols-2 md:!grid-cols-1"
          >
            {productData.map((product, index) => (
              <Product
                key={index}
                title={product.title}
                description={product.description}
                image={product.imageUrl}
                thumbnail={product.thumbnailUrl}
              />
            ))}
          </ProductCarousel>

          <ProductCarousel
            title={t('hottestCategory.title')}
            titleClassName="sm:px-[25px]"
          >
            <Products products={productsData} />
          </ProductCarousel>
        </div>

        {isMobileDevice && (
          <Button
            type="default"
            size="large"
            icon={<PlusOutlined />}
            iconPosition="end"
            className="bg-gray4 h-[50px] mx-5 mt-5"
          >
            {t('hottestCategory.loadMore')}
          </Button>
        )}
      </div>
    </div>
  );
};
