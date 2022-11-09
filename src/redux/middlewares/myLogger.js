import rootReducer from "../rootReducer";

const myLogger = (store) => (next) => (action) => {
    console.log(`action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);

    const upcommingState = [action].reduce(rootReducer, store.getState());

    console.log(`Upcomming State: ${JSON.stringify(upcommingState)}`);

    //pass action
    return next(action);
}

export default myLogger;