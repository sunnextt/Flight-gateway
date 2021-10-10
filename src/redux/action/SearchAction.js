import userTypes from '../Types';
import { getAmadeusData } from "../../api/amadeus.api";
import axios from "axios"




const SearchAirport =  (search) => (dispatch) => {

    const {out, source} = getAmadeusData(search)
    
    out.then(res => {
      if (!res.data.code) {
         dispatch({
            type: userTypes.SEARCH_AIRPORT,
            payload:  res.source
        })
      }
    }).catch(err => {
      axios.isCancel(err);

    });

    dispatch({
        type: userTypes.SEARCH_AIRPORT_SOURCE,
        payload: source
    })
    
}
  

export default SearchAirport

