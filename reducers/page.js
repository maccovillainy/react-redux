const initialState  = {
    year: 2016,
    photos: []
}
export  default function  page(state  = initialState) {
    switch  (action.type) {
        case  'SET_YEAR':
            return  { ...state, year: action.payload  }
        default:
            return  state;
    }
}