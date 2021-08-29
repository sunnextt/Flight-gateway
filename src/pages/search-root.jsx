import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import SearchTable from "../components/search-table";
import SearchAutocomplete from "../components/search-autocomplete";
import { getAmadeusData } from "../api/amadeus.api";
import axios from "axios"
import SearchCheckboxes from "../components/search-checkboxes";
import  SearchAirport from "../redux/action/SearchAction"
import { Grid } from "@material-ui/core";


// Main component 
const SearchRoot = () => {
  
  const [search, setSearch] = React.useState({
    keyword: "a",
    city: true,
    airport: true,
    page: 0
  });
  
  const [dataSource, setDataSource] = React.useState({
    meta: { count: 0 },
    data: []
  });

  console.log(dataSource);

  // const mapState = ({ search }) => ({
  //   airport: search.airport,
  // });
  // const  data = useSelector(mapState)
  // console.log(data);
  // setDataSource(data)
  
  const [loading, setLoading] = React.useState(false)
  // const dispatch = useDispatch()


  React.useEffect(() => {
    setLoading(true)
    // dispatch(SearchAirport(search))


    const { out, source } = getAmadeusData(search);

    out.then(res => {
      // If we send too many request to the api per second - we will get an error and app will break
      // Therefore we implemented simple check to prevent error on client side.
      if (!res.data.code) {
        setDataSource(res.data); // dispatching data to components state
      }
      setLoading(false)
    }).catch(err => {
      axios.isCancel(err);
      setLoading(false)
    });

    // If we returning function from *useEffect* - then this func will execute, when component will unmount
    return () => {
      source.cancel()
    };
  }, [search]);

  return (
    <Grid container className="container">
      <Grid item xs={12} sm={12} md={12} style={{margin: "2rem 0"}}>
        <div className="search-panel">
          <SearchAutocomplete search={search} setSearch={setSearch} />
          <SearchCheckboxes search={search} setSearch={setSearch} />
        </div>
        <SearchTable dataSource={dataSource} search={search} setSearch={setSearch} loading={loading} />
      </Grid>
    </Grid>
  );
};

export default SearchRoot;
