import React from "react";
import { Formik } from "formik";
import { schema } from "./formvalidation";
import {  FormGroup, Table, Input } from "reactstrap";

let HomeComponent = (props) => {
  let ServerdatafromContainer = props.Serverdata;
  console.log(props.selectedarray);

  return (
    <div>
      {/* {ServerdatafromContainer.name}
      {ServerdatafromContainer.sys?ServerdatafromContainer.sys.country:""} */}
      <Formik
        initialValues={{
          placeName: "",
        }}
        onSubmit={(values, actions) => {
          props.selectedCity(values)
          console.log(values);
        }}
        validationSchema={schema}
      >
        {({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          setFieldValue,
          isSubmitting,
        }) => (
          <div>
            <div>
              <FormGroup>
                <Input
                  type="search"
                  name="placeName"
                  id="exampleSearch"
                  placeholder="search placeholder"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.placeName && errors.placeName && (
                  <span
                    className="text-danger col-md-12 text-left mb-2"
                    style={{ fontSize: 12 }}
                  >
                    {errors.placeName}
                  </span>
                )}
                <button type="button" onClick={handleSubmit}>
                  SEARCH
                </button>
              </FormGroup>
            </div>
            <div>
              <div>
                <h1>Today's Weather</h1>
              </div>
              <div>
                <h3>
                  Mostly
                  {ServerdatafromContainer.weather
                    ? ServerdatafromContainer.weather[0].main
                    : ""}
                </h3>
              </div>
              <div>
          
                <h3>
                  {ServerdatafromContainer.name},
                  {ServerdatafromContainer.sys
                    ? ServerdatafromContainer.sys.country
                    : ""}
                </h3>
              </div>
             {props.selectedarray.map((arg,index) => {
                  return( 
                    <img key={index} src={arg?arg.img:""} alt=""/>
                  )
                })} 
              
            
              <div>
                <h4>
                  {" "}
                  {(
                    parseFloat(
                      ServerdatafromContainer.main
                        ? ServerdatafromContainer.main.temp
                        : ""
                    ) - 273.15
                  ).toFixed(2)}{" "}
                  <sup>o</sup>C
                </h4>
              </div>
              <div>
                {" "}
                <h5>
                  Feel Like:{props.dataConverter.feellike} <sup>o</sup>C
                </h5>
              </div>
            </div>
            <div>
              <Table>
                <thead>
                  <tr>
                    <th>SunRise</th>
                    <th>SunSet</th>
                    <th>Humidity</th>
                    <th>Pressure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h5>
                        {" "}
                        {props.dataConverter.sunrise.getHours()}:
                        {props.dataConverter.sunrise.getMinutes()} AM
                      </h5>
                    </td>
                    <td>
                      <h5>
                        {" "}
                        {props.dataConverter.sunset.getHours()}:
                        {props.dataConverter.sunset.getMinutes()} PM
                      </h5>
                    </td>
                    <td>
                      <h5>
                        {ServerdatafromContainer.main
                          ? ServerdatafromContainer.main.humidity
                          : ""}
                        %
                      </h5>
                    </td>
                    <td>
                      <h5>
                        {ServerdatafromContainer.main
                          ? ServerdatafromContainer.main.pressure
                          : ""}
                        hPa
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default HomeComponent;
