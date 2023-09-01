import {ALL_CODIGO} from './types'

const initialState = {
  codigo:[],
  compilado:[],
  };

const reducer = (state = initialState, {type, payload}) => { //destructuring de action {type,payload}
  
  switch (type) {
    
    case ALL_CODIGO:
      return{
        ...state,
        codigo:payload
      }; 

    default:
      return { 
        ...state 
      };
  }
};

export default reducer;
