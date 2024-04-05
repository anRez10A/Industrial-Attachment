export interface Recipe {
    _id?: string;
    recipeName?: string;
    ingredients?: string;    
    description?: string;
    category?: 'Desert' | 'Spicy' | 'Drinks' | 'FastFood';
    //status?: 'Updated' | 'Added';
  }