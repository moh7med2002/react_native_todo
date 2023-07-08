import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notes: [],
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    addNodte: (state,action) => {
      const note = {title:action.payload.title , id :Math.random().toString() , deleted:false , createdAt:new Date().toISOString()};
        state.notes = [note , ...state.notes]
    },
    updateNote:(state,action)=>{
      const {id,title} = action.payload;
      state.notes = state.notes.map(no=>no.id===id?{...no , title}:no);
    },
    softDeleteNote:(state,action)=>{
      const {id} = action.payload;
      const newNotes = (state.notes.map(no=>no.id===id?{...no , deleted:true}:no));
      state.notes = newNotes;
    },
    undoAll:(state)=>{
      const newNotes = state.notes.map(no=>{
        return {...no , deleted:false}
      });
      state.notes = newNotes;
    },
    emptyAll:(state)=>{
      const newNotes = state.notes.filter(no=>no.deleted===false);
      state.notes = newNotes;
    },
    hardDeleteNote:(state,action)=>{
      const {id} = action.payload;
      const newNotes = state.notes.filter(no=>no.id!==id);
      state.notes = newNotes;
    },
    undoNote:(state,action)=>{
      const {id} = action.payload;
      const newNotes = (state.notes.map(no=>no.id===id?{...no , deleted:false}:no));
      state.notes = newNotes;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNodte , updateNote , softDeleteNote , undoAll , emptyAll , undoNote , hardDeleteNote} = noteSlice.actions

export default noteSlice.reducer