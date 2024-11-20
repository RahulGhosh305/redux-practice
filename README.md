# Redux Tutorial

#### Doc

[Redux Doc](https://redux.js.org/)

- Redux is a predictable state container for JS apps. Predictable, centralized, debuggable, flexible.
- We use redux - Avoid props drilling, the best case of rtk-query, not much use asynchronous fetching, direct deal with the state.
- The 3 pillars of the Redux Are - Store, Action(action-dispatch), and Reducer.

- What is React-Redux - Redux library to help connect with react and redux easily, do all work optimized. (Old Redux). Use Only Binding (useSelector, useDispatch)
- What is Redux Thunk - Use to Old Redux - A package of middleware. Handle API, Asynchronous behavior handler functions

- Redux-Toolkit - Modern Redux - Simple, opinionated, Powerful, effective.
- ContextAPI + useReducer = Alternative way of redux.

#### Redux workflow

- Action: Action taken by user. Each action has a corresponding reducer function.
- Dispatch: Sending the action object to the store. Dispatching an action triggers the coresponding reducer to update the state.
- Payload: Optional data attached to an action.it carries the addtional data that need to be sent along with the action to update the data.
- Reducer: A reducer is a pure function that takes the current state and action as inputs and returns a new state.
- Store: The store holds the state of the application.

![Workflow Image](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)
