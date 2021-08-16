import userTypes from '../Types';
import { getAmadeusData } from "../../api/amadeus.api";




const SearchAirport =  (search) => async (dispatch) => {

    const {source, out} = await getAmadeusData(search)
    console.log(source, out);

      dispatch({
    type: userTypes.SEARCH_AIRPORT,
    payload:  source
  })
    
}
  

export default SearchAirport

