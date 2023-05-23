import * as React from 'react';
import WSPGallery from './WSPGallery';

export default function ActionAreaCard() {
  const galleryImages = [
    {
      img: 'https://img.freepik.com/free-photo/cup-of-aromatic-tea-and-dried-fruits-top-view_140725-5644.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais'
    },
    {
      img: "https://img.freepik.com/free-photo/top-view-of-adana-kebab-served-on-tandoor-bread-and-bulgur_140725-5084.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais"
    },
    {
      img: "https://img.freepik.com/premium-photo/a-set-of-oriental-dishes-in-plates-with-traditional-uzbek-ornaments-pilaf-with-lamb-manti-lagman-soup-vegetable-salad-tandoor-tortillas-salsa-sauces-and-spices_400928-733.jpg?size=626&ext=jpg&ga=GA1.1.2144432171.1680949334&semt=ais"
    },
    {
      img: "https://img.freepik.com/premium-photo/brazilian-feijoada-food-top-view-with-copy-space_70216-1361.jpg?size=626&ext=jpg&ga=GA1.1.2144432171.1680949334&semt=ais"
    },
    {
      img: "https://img.freepik.com/free-photo/lamb-with-rice-dry-fruits-chestnuts-prunes-spices-oil-top-view_141793-1790.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais"
    },
    {
      img: "https://img.freepik.com/free-photo/high-angle-delicious-pakistan-meal-arrangement-in-a-basket_23-2148821574.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais"
    },
    {
      img: 'https://img.freepik.com/free-photo/cup-of-aromatic-tea-and-dried-fruits-top-view_140725-5644.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais'
    },
    {
      img: "https://img.freepik.com/free-photo/top-view-of-adana-kebab-served-on-tandoor-bread-and-bulgur_140725-5084.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais"
    },
    {
      img: "https://img.freepik.com/premium-photo/a-set-of-oriental-dishes-in-plates-with-traditional-uzbek-ornaments-pilaf-with-lamb-manti-lagman-soup-vegetable-salad-tandoor-tortillas-salsa-sauces-and-spices_400928-733.jpg?size=626&ext=jpg&ga=GA1.1.2144432171.1680949334&semt=ais"
    },
    {
      img: "https://img.freepik.com/premium-photo/beshbarmak-is-a-national-kyrgyz-dish-square-pasta-with-boiled-meat-and-onions_114173-41.jpg?size=626&ext=jpg&ga=GA1.1.2144432171.1680949334&semt=sph"
    },
    {
      img: "https://img.freepik.com/free-photo/lamb-with-rice-dry-fruits-chestnuts-prunes-spices-oil-top-view_141793-1790.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais"
    },
    {
      img: "https://img.freepik.com/free-photo/high-angle-delicious-pakistan-meal-arrangement-in-a-basket_23-2148821574.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais"
    },
    {
      img: 'https://img.freepik.com/free-photo/cup-of-aromatic-tea-and-dried-fruits-top-view_140725-5644.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais'
    },
    {
      img: "https://img.freepik.com/free-photo/top-view-of-adana-kebab-served-on-tandoor-bread-and-bulgur_140725-5084.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais"
    },
    {
      img: "https://img.freepik.com/premium-photo/a-set-of-oriental-dishes-in-plates-with-traditional-uzbek-ornaments-pilaf-with-lamb-manti-lagman-soup-vegetable-salad-tandoor-tortillas-salsa-sauces-and-spices_400928-733.jpg?size=626&ext=jpg&ga=GA1.1.2144432171.1680949334&semt=ais"
    },
    {
      img: "https://img.freepik.com/premium-photo/brazilian-feijoada-food-top-view-with-copy-space_70216-1361.jpg?size=626&ext=jpg&ga=GA1.1.2144432171.1680949334&semt=ais"
    },
    {
      img: "https://img.freepik.com/free-photo/lamb-with-rice-dry-fruits-chestnuts-prunes-spices-oil-top-view_141793-1790.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais"
    },
    {
      img: "https://img.freepik.com/free-photo/high-angle-delicious-pakistan-meal-arrangement-in-a-basket_23-2148821574.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais"
    }, {
      img: 'https://img.freepik.com/free-photo/cup-of-aromatic-tea-and-dried-fruits-top-view_140725-5644.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais'
    },
    {
      img: "https://img.freepik.com/free-photo/top-view-of-adana-kebab-served-on-tandoor-bread-and-bulgur_140725-5084.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais"
    },
    {
      img: "https://img.freepik.com/premium-photo/a-set-of-oriental-dishes-in-plates-with-traditional-uzbek-ornaments-pilaf-with-lamb-manti-lagman-soup-vegetable-salad-tandoor-tortillas-salsa-sauces-and-spices_400928-733.jpg?size=626&ext=jpg&ga=GA1.1.2144432171.1680949334&semt=ais"
    },
    {
      img: "https://img.freepik.com/premium-photo/brazilian-feijoada-food-top-view-with-copy-space_70216-1361.jpg?size=626&ext=jpg&ga=GA1.1.2144432171.1680949334&semt=ais"
    },
    {
      img: "https://img.freepik.com/free-photo/lamb-with-rice-dry-fruits-chestnuts-prunes-spices-oil-top-view_141793-1790.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais"
    },
    {
      img: "https://img.freepik.com/free-photo/high-angle-delicious-pakistan-meal-arrangement-in-a-basket_23-2148821574.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais"
    }

  ]
  
  return (
    
    <div className="homePage">
         <WSPGallery
        galleryImages={galleryImages}
      />

    </div>
      
     

  );
}
