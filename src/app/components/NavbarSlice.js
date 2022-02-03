import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: 'navbar',
    initialState: {
      notifications: [
          {
              id:1,
              msg:'there is new message for you !'
          }, 
          {
            id:2,
            msg:'there is brand new message for you !'
          }
      ]
    },
    reducers: {
      increment: state => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      reducers: {
          addNotification:(state,action)=>
            state.notifications.push(action.payload)
      }
      
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount } = counterSlice.actions
  
  export default counterSlice.reducer