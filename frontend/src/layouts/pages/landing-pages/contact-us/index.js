/*
=========================================================
* Ecotrade React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Ecotrade React pages
import ContactUs from "pages/LandingPages/ContactUs";

// export default function ContactUsPage() {
//   return <ContactUs />;
// }

// import { useState } from "react";

// se descarga react developer tools es una extension que nos dara lsc omponentes en la consola

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

// Ecotrade React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import routes from "routes";
import React, {Fragment, useState} from "react";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// const Formulario = () =>{

// const [datos, setDatos] = useState({
//   nombre: '',
//   apellido: '',
//   email: '',
//   mensaje: '',

// })

// const handleInputChange = (event)=>{
// // console.log(event.target.value)
// // esto lo que hacia era mostar literalmente todos lo que se escribia en el input letra por letra
// setDatos({
//   ...datos,
//   [event.target.name]:event.target.value
// // el name es el name que le pusimos a los inputs hace la relacion
// })

// }

// const enviarDatos= (event) =>{
// event.preventDefault();
// console.log(datos.nombre+' '+datos.apellido+' '+datos.email+' '+datos.mensaje)

// }

//   return(
//     <Fragment>
//  <h1>Formulario</h1>
//    <form className="row" onSubmit={enviarDatos}>
//   <div className="col-md-3">
//   <input
//   placeholder="Ingrese Nombre"
//   className="form-control"
//   name="nombre"
//   onChange={handleInputChange}


//   ></input>
//   </div>
//   <div className="col-md-3">
//   <input
//     placeholder="Ingrese Apellido"
//     className="form-control"
//     name="apellido"
//   onChange={handleInputChange}
//   >
//   </input>
//   </div>
//   <div className="col-md-3">
//   <input
//     placeholder="Ingrese Email"
//     className="form-control"
//     name="email"
//     onChange={handleInputChange}
//   ></input>
//   </div>
//   <div className="col-md-3">

//   <input
//     placeholder="Ingrese Motivo de contacto"
//     className="form-control"
//     name="mensaje"
//     onChange={handleInputChange}
//   >

//   </input>
//   </div>
//   <div className="col-md-3">
//   <button className="btn btn-primary" type="submit" >Enviar</button>
//   </div>

  
//    </form>
//    <h3>{datos.nombre} - {datos.apellido} - {datos.email} - {datos.mensaje}</h3>
//   </Fragment>
//   );
// }

// export default Formulario;






const Formulario = () =>{

const [datos, setDatos] = useState({
  nombreEmpresa: '',
  telefono: '',
  direccion: '',
  servicio: '',
  email: '',
  tipoempresa: '',

})

const handleInputChange = (event)=>{
// console.log(event.target.value)
// esto lo que hacia era mostar literalmente todos lo que se escribia en el input letra por letra
setDatos({
  ...datos,
  [event.target.name]:event.target.value
// el name es el name que le pusimos a los inputs hace la relacion
})

}

const enviarDatos= (event) =>{
event.preventDefault();
console.log(datos.nombreEmpresa+' '+datos.telefono+' '+datos.direccion+' '+datos.servicio+' '+datos.email+' '+datos.tipoempresa)

}


  return (

    
    <Fragment>
         <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.creative-tim.com/product/material-kit-react",
        //   label: "free download",
        //   color: "info",
        // }}
    
      />
    <MKBox component="section" py={12} onSubmit={enviarDatos}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1}>
            Contact Us
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <MKBox width="100%" component="form" method="post" autocomplete="off" >
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Nombre de la empresa"  name="nombreEmpresa" onChange={handleInputChange} fullWidth 
/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Número de telefono" type="number"  name="telefono" onChange={handleInputChange} fullWidth />
                </Grid>
                  <Grid item xs={12} md={6}>
                  <MKInput variant="standard"  label="Dirección Regional"  name="direccion" onChange={handleInputChange} fullWidth />
                </Grid>
                   <Grid item xs={12} md={6}>
                  <MKInput variant="standard"  label="Servicio que ofrece"  name="servicio" onChange={handleInputChange} fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" type="email" label="Email Address"  name="email" onChange={handleInputChange} fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Tipo de empresa"   name="tipoempresa" onChange={handleInputChange} /*multiline*/ fullWidth /*rows={6}*/ />
                </Grid>
                <Grid item xs={12} alignItems="center" ml={-1}>
                  {/* <Switch checked={checked} onChange={handleChecked} /> */}
                  <MKTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    ml={-1}
                    sx={{ cursor: "pointer", userSelect: "none" }}
                    // onClick={handleChecked}
                    type="submit"
                  >
                    {/* &nbsp;&nbsp;I agree the&nbsp; */}
                  </MKTypography>
                  <MKTypography
                    component="a"
                    href="#"
                    variant="button"
                    fontWeight="regular"
                    color="dark"
                  >
                    {/* Terms and Conditions */}
                  </MKTypography>
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton type="submit" variant="gradient" color="dark" fullWidth>
                  Send Message
                </MKButton>
              </Grid>
           
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
      
   
</Fragment>
  
     
   
  );

    }
export default Formulario ;