import { createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
const defaultObj = {
    count:0,
    menu:{
        toggle:false,
    },
    tab:'112233',
}
const reducer = (state = defaultObj,action) => {
    switch (action.type) {
        case 'add':
            state.count += 1;
        case 'del':
            state.count -= 1;
        case 'changeToggle':
            state.menu.toggle = !state.menu.toggle;
        case 'asyncCount':
            state.count = Date.now();
        case 'setTab':
            console.log('action')
            console.log(action)
            state.tab =  action.data
        default:
            state = state;
    }
    return Object.assign({}, state) 
}

const store = createStore(reducer);
// const store = createStore(reducer, applyMiddleware(thunk));
export default store;