import { Program } from "@/src/features/programs/types/program.types";
import { createSlice } from "@reduxjs/toolkit";

interface ProgramData {
  program: Program | null;
}

const initialState: ProgramData = {
  program: null,
};

const selectedProgramSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
   setProgram: (state, action) => {
    state.program = action.payload
   }
  },
});

export const {
setProgram
} = selectedProgramSlice.actions;

export default selectedProgramSlice.reducer;