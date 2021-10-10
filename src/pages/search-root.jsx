import React from "react";
import SearchTable from "../components/search-table";
import SearchAutocomplete from "../components/search-autocomplete";
import { getAmadeusData } from "../api/amadeus.api";
import axios from "axios"
import SearchCheckboxes from "../components/search-checkboxes";
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
  
  const [loading, setLoading] = React.useState(false)


  React.useEffect(() => {
    setLoading(true)


    const { out, source } = getAmadeusData(search);

    out.then(res => {
      if (!res.data.code) {
        setDataSource(res.data); // dispatching data to components state
      }
      setLoading(false)
    }).catch(err => {
      axios.isCancel(err);
      setLoading(false)
    });

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
