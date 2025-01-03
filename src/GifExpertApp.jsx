import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'/* , 'The simpsons' */]);

  function categoryExists(newCategory) {
    let exists = false;

    categories.forEach(cat => {
      if (cat.toLowerCase() === newCategory.toLowerCase()) {
        exists = true;

        return;
      }
    });

    return exists;
  }

  const onAddCategory = (newCategory) => {
    if (!categoryExists(newCategory)) {
      setCategories([newCategory, ...categories]);
    } else {
      console.log(`Categoria ${newCategory} repetida`);
    }

    //setCategories(cat => [...categories, category]);
  };

  //console.log(categories);

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory
        setCategories={setCategories}
        onAddCategory={onAddCategory}
      />

      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category} />
        ))
      }
    </>
  )
}
