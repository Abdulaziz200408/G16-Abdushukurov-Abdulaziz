import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Brand {
  id: number;
  name: string;
  image: string;
  desc?: string;
  website?: string;
}

interface BrandsState {
  brands: Brand[];
}

const initialState: BrandsState = {
  brands: [
    {
      id: 1,
      name: "Tesla",
      image:
        "https://www.beev.co/wp-content/uploads/2022/11/tesla-logo-1-300x300.png",
      desc: " Frontend dasturchi kerak   React, next js  va jsavascrptni bilsh kerak",
      website: "https://www.tesla.com/",
    },
    {
      id: 1,
      name: "Avetos",
      image:
        "https://pbs.twimg.com/profile_images/1625472951071174656/s43p20gm_400x400.jpg",
      desc: "Baccend dasturchi kerak  ish tajribasi 2 yil",
      website: "https://www.avetos.uz/",
    },
    {
      id: 1,
      name: "google",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_YnVNrap_7DYgpO6xWPax4ZGoG9aKWLRHw&s",
      desc: "Veb dasturlash amaliyotchi sifatida nufuzli kompaniyamizga qo'shiling",
      website: "https://www.google.uz/",
    },
  ],
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    deleteBrand: (state, action: PayloadAction<number>) => {
      state.brands = state.brands.filter(
        (brand) => brand.id !== action.payload
      );
    },
    editBrand: (state, action: PayloadAction<Brand>) => {
      const index = state.brands.findIndex(
        (brand) => brand.id === action.payload.id
      );
      if (index !== -1) {
        state.brands[index] = action.payload;
      }
    },
    addBrand: (state, action: PayloadAction<Brand>) => {
      state.brands.push(action.payload);
    },
  },
});

export const { deleteBrand, editBrand, addBrand } = brandsSlice.actions;
export default brandsSlice.reducer;
