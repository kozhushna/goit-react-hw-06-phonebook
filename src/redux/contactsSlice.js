import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        const existen = state.contacts.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        );

        if (existen) {
          alert(`${action.payload.name} is already in contacts.`);
          return;
        }

        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },

    updateFilter(state, action) {
      console.log(action);

      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
