import React from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Textfield from "./FormUI/Textfield/index";
import DateTimePicker from "./FormUI/DateTimePicker/index";
import SelectWrapper from "./FormUI/Select/index";
import CheckboxWrapper from "./FormUI/CheckBox/index";
import passenger from "../../../data/passenger.json";
import age from "../../../data/age.json";
import classOfService from "../../../data/classOfService.json";
import ButtonWrapper from './FormUI/Button';

const options =["One way", "Return"]



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
    marginTop: "1ch",
    color: "white",
    backgroundColor: "rgba(40, 127, 199, 0.900)",
  },
  formWrapper: {
    // marginLeft: theme.spacing(15),
    // marginRight: theme.spacing(15),
  },
  margin: {
    margin: 0,
    padding:  0
  },
  textField: {
    margin: theme.spacing(1),
    width: "25ch",
    marginLeft: "10px",
    marginBottom: "16px",
    color: "white",
  },
  select: {
    margin: theme.spacing(1),
    width: "19ch",
    marginLeft: "10px",
    marginBottom: "16px",
    color: "white",
  },
  radio: {
    marginLeft: "10px",
  },
  search: {
    // marginBottom: theme.spacing(2),
    // margintop: theme.spacing(2),
    margin: "1rem auto"
  },
  searchbtn: {
    display: "inline-block",
    verticalAlign: "middle",
    textTransform: "uppercase",
    letterSpacing: "o.oemem",
    fontsize: "20px",
    lineHeight: "1.5",
    fontWeight: 900,
    borderRadius: 0,
    boxShadow: "0 2px 10px 0 rgb(0 0 0 / 23%)",
    border: "none",
    padding: "20px 45px",
    cursor: "pointer",
    backgroundColor: "#c62a82",
    background: "linear-gradient(0deg, #ad146a 0%, #c62a82 100%)",
  }
}));


const INITIAL_FORM_STATE ={
flyingFrom: "",
flyingTo: "",
departureDate: "",
returnDate: "",
classOfService: "",
passenger: "",
age: "",
flightType: ""
}


const FORM_VALIDATION = Yup.object().shape({

});

const SearchForm = () => {
const classes = useStyles();

    return (
      <Grid item xs={12} className={classes.margin}>
        <Container maxWidth="lg" className={classes.margin}>
          <div>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form >
                <Grid className={classes.root}>
                  <Grid className={classes.radio}>
                    <Field
                      name="flightType"
                      options={options}
                      component={CheckboxWrapper }
                    />
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={5} md={3}className={classes.textField}>
                      <Textfield name="flyingFrom" label="Flying From" />
                    </Grid>
                    <Grid item xs={12} sm={5} md={3} className={classes.textField}>
                      <Textfield name="flyingTo" label="Flying To" />
                    </Grid>
                    <Grid item xs={12} sm={5} md={2} className={classes.select}>
                      <DateTimePicker
                        name="departureDate"
                        label="Departure Date"
                      />
                    </Grid>
                    <Grid item xs={12} sm={5} md={2} className={classes.select}>
                      <DateTimePicker name="returnDate" label="REturn Date" />
                    </Grid>
                    <Grid item xs={5} sm={3} className={classes.select}>
                      <SelectWrapper
                        name="classOfService"
                        label="Class Of Service"
                        options={classOfService}
                      />
                    </Grid>
                    <Grid item xs={5} sm={3} className={classes.textField}>
                      <SelectWrapper
                        name="passenger"
                        label="Passenger"
                        options={passenger}
                      />
                    </Grid>
                    <Grid item xs={3}  className={classes.select}>
                      <SelectWrapper name="age" label="Age" options={age} />
                    </Grid>
                    {/* <div className="button_div">
                      <a href="#/" className="search_button">
                        SEARCH
                      </a>
                    </div> */}
                    <Grid item xs={12} sm={6} className={classes.search}>
                      <ButtonWrapper  color="secondary" className={classes.searchbtn}>
                        SEARCH FLIGHT
                      </ButtonWrapper>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    );
}

export default SearchForm
