import userTypes from '../Types';
import { getAmadeusData } from "../../api/amadeus.api";
import axios from "axios"




const SearchAirport =  (search) => (dispatch) => {

    const {out, source} = getAmadeusData(search)
    
    out.then(res => {
      // If we send too many request to the api per second - we will get an error and app will break
      // Therefore we implemented simple check to prevent error on client side.
      if (!res.data.code) {
        // setDataSource(res.data); // dispatching data to components state
         dispatch({
            type: userTypes.SEARCH_AIRPORT,
            payload:  res.data
        })
      }
    }).catch(err => {
      axios.isCancel(err);

    });
    
}
  

export default SearchAirport

