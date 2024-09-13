import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contract {
  id: number;
  name: string;
  desc: string;
  technologies: string;
  location: string;
  ishhaqi: any;
  phone: string;
  email: string;
  telegram?: string;
  instagram: string;
}

interface ContractsState {
  contracts: Contract[];
}

const initialState: ContractsState = {
  contracts: [
    {
      id: 1,
      name: "Abdulaziz",
      desc: "",
      technologies: "React, Vite, Tailwend, Js , Ts,Bootstrap",
      location: "Toshkent shahar shayhon tohur tumani",
      ishhaqi: "200$",
      phone: "+998933115947",
      email: "abdulaziz@example.com",
      telegram: "@abdulaziz",
      instagram: "abdulaziz_official",
    },
    {
      id: 2,
      name: "Farid",
      desc: "",
      technologies: "React, Next.js, Styled Components, TypeScript",
      location: "Toshkent shahar shayhon tohur tumani",
      ishhaqi: "250$",
      phone: "+998933115948",
      email: "farid@example.com",
      telegram: "@farid",
      instagram: "farid_official",
    },
    {
      id: 3,
      name: "Yusaf",
      desc: "",
      technologies: "React, Next.js, Styled Components, TypeScript",
      location: "Toshkent shahar shayhon tohur tumani",
      ishhaqi: "300$",
      phone: "+998933115949",
      email: "yusaf@example.com",
      telegram: "@yusaf",
      instagram: "yusaf_official",
    },
    {
      id: 4,
      name: "Ruslan",
      desc: "",
      technologies: "React, Next.js, Styled Components, TypeScript",
      location: "Toshkent shahar shayhon tohur tumani",
      ishhaqi: "350$",
      phone: "+998933115950",
      email: "ruslan@example.com",
      telegram: "@ruslan",
      instagram: "ruslan_official",
    },
    {
      id: 5,
      name: "Said",
      desc: "",
      technologies: "React, Next.js, Styled Components, TypeScript",
      location: "Toshkent shahar shayhon tohur tumani",
      ishhaqi: "400$",
      phone: "+998933115951",
      email: "said@example.com",
      telegram: "@said",
      instagram: "said_official",
    },
  ],
};

const contractsSlice = createSlice({
  name: "contracts",
  initialState,
  reducers: {
    deleteContract: (state, action: PayloadAction<number>) => {
      state.contracts = state.contracts.filter(
        (contract) => contract.id !== action.payload
      );
    },
    editContract: (state, action: PayloadAction<Contract>) => {
      const index = state.contracts.findIndex(
        (contract) => contract.id === action.payload.id
      );
      if (index >= 0) {
        state.contracts[index] = action.payload;
      }
    },
    addContract: (state, action: PayloadAction<Contract>) => {
      state.contracts.push(action.payload);
    },
  },
});

export const { deleteContract, editContract, addContract } =
  contractsSlice.actions;
export default contractsSlice.reducer;
