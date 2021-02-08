import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import Textfield from "./FormUI/Textfield/index"
import DateTimePicker from "./FormUI/DateTimePicker/index";
import SelectWrapper from "./FormUI/Select/index";
import passenger from "../../../data/passenger.json";
import age from "../../../data/age.json";
import classOfService from "../../../data/classOfService.json";



const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginLeft: theme.spacing(15),
    marginRight: theme.spacing(15),
  },
}));

const INITIAL_FORM_STATE ={
flyingFrom: "",
flyingTo: "",
departureDate: "",
returnDate: "",
classOfService: "",
passenger: "",
age: "",
}


const FORM_VALIDATION = Yup.object().shape({

});

const SearchForm = () => {
const classes = useStyles();

    return (
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container space={12}>
                  <Grid xs={3}>
                    <Textfield name="flyingFrom" label="Flying From" />
                  </Grid>
                  <Grid xs={3}>
                    <Textfield name="flyingTo" label="Flying To" />
                  </Grid>
                  <Grid xs={2}>
                    <DateTimePicker
                      name="departureDate"
                      label="Departure Date"
                    />
                  </Grid>
                  <Grid xs={2}>
                    <DateTimePicker name="returnDate" label="REturn Date" />
                  </Grid>
                  <Grid xs={2}>
                    <SelectWrapper
                      name="classOfService"
                      label="Class Of Service"
                      options={classOfService}
                    />
                  </Grid>
                  <Grid xs={3}>
                    <SelectWrapper
                      name="passenger"
                      label="Passenger"
                      options={passenger}
                    />
                  </Grid>
                  <Grid xs={2}>
                    <SelectWrapper name="age" label="Age" options={age} />
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
