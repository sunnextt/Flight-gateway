import React from "react"
import "./style.css"


const Footer = ()=>{
  return(
      <footer class="container-fluid bg-grey py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6 ">
                        <div class="logo-part">
                            <h3>Ocean Flight</h3>
                            <p>Lekki, Lagos. Nigeria</p>
                            <p>Use this tool as test data for an automated system or find your next pen</p>
                        </div>
                        </div>
                        <div class="col-md-6 px-4">
                        <h6> About Company</h6>
                        <p>Ocean Flight is a travel search engine which instantly searches all available flight, bus and train prices on an exhaustive number of travel sites such as online travel agencies, major and low-cost airlines and tour-operators. We also compare hotel rooms and car rental deals. </p>
                        <a href="#" class="btn-footer"> More Info </a><br />
                        <a href="#" class="btn-footer"> Contact Us</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-md-6 px-4">
                        <h6> Help us</h6>
                        <div class="row ">
                            <div class="col-md-6">
                                <ul>
                                    <li> <a href="#"> Home</a> </li>
                                    <li> <a href="#"> About</a> </li>
                                    <li> <a href="#"> Service</a> </li>
                                    <li> <a href="#"> Team</a> </li>
                                    <li> <a href="#"> Help</a> </li>
                                    <li> <a href="#"> Contact</a> </li>
                                </ul>
                            </div>
                            <div class="col-md-6 px-4">
                                <ul>
                                    <li> <a href="#"> Cab Faciliy</a> </li>
                                    <li> <a href="#"> Fax</a> </li>
                                    <li> <a href="#"> Terms</a> </li>
                                    <li> <a href="#"> Policy</a> </li>
                                    <li> <a href="#"> Refunds</a> </li>
                                    <li> <a href="#"> Paypal</a> </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6 ">
                        <h6> Newsletter</h6>
                        <div class="social">
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        </div>
                        <form class="form-footer my-3">
                            <input type="text"  placeholder="search here...." name="search"/>
                            <input type="button" value="Go" />
                        </form>
                        <p>That's technology limitation of LCD monitors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
export default Footer;