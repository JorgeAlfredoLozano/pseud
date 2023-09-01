import axios from 'axios';
import {ALL_CODIGO} from './types'

export const getCodigo = (code)=>{
   
  return async (dispatch) => {
    try {
      return dispatch({
        type: 'ALL_CODIGO',
        payload: code,
      });
    } catch (error) {
      throw 'Ha ocurrido un error al obtener los datos del usuario';
    }
  };
};
