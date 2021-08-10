import React from "react"

// import footerLogo from "../img/footer-logo.png"
const Footer = ()=>{
  return(
    <footer className="footer">
        <div className="row lg-menu">
            <div className="container">
                {/* <div className="col-md-4 col-sm-4"><img src={footerLogo} className="img-responsive" alt=""/>
                </div> */}
                <div className="col-md-8 co-sm-8 pull-right">
                    <ul>
                        <li><a href="index-2.html" title="">Home</a></li>
                        <li><a href="blog.html" title="">Blog</a></li>
                        <li><a href="404.html" title="">404</a></li>
                        <li><a href="faq.html" title="">FAQ</a></li>
                        <li><a href="contact.html" title="">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row no-padding">
            <div className="container">
                <div className="col-md-3 col-sm-12">
                    <div className="footer-widget">
                        <h3 className="widgettitle widget-title">About Job Stock</h3>

                        <div className="textwidget">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>

                            <p>7860 North Park Place<br />San Francisco, CA 94120</p>

                            <p><strong>Email:</strong> Support@careerdesk</p>

                            <p><strong>Call:</strong> <a href="tel:+15555555555">555-555-1234</a></p>
                            <ul className="footer-social">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4">
                    <div className="footer-widget">
                        <h3 className="widgettitle widget-title">All Navigation</h3>

                        <div className="textwidget">
                            <div className="textwidget">
                                <ul className="footer-navigation">
                                    <li><a href="manage-company.html" title="">Front-end Design</a></li>
                                    <li><a href="manage-company.html" title="">Android Developer</a></li>
                                    <li><a href="manage-company.html" title="">CMS Development</a></li>
                                    <li><a href="manage-company.html" title="">PHP Development</a></li>
                                    <li><a href="manage-company.html" title="">IOS Developer</a></li>
                                    <li><a href="manage-company.html" title="">Iphone Developer</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4">
                    <div className="footer-widget">
                        <h3 className="widgettitle widget-title">All Categories</h3>

                        <div className="textwidget">
                            <ul className="footer-navigation">
                                <li><a href="manage-company.html" title="">Front-end Design</a></li>
                                <li><a href="manage-company.html" title="">Android Developer</a></li>
                                <li><a href="manage-company.html" title="">CMS Development</a></li>
                                <li><a href="manage-company.html" title="">PHP Development</a></li>
                                <li><a href="manage-company.html" title="">IOS Developer</a></li>
                                <li><a href="manage-company.html" title="">Iphone Developer</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4">
                    <div className="footer-widget">
                        <h3 className="widgettitle widget-title">Connect Us</h3>

                        <div className="textwidget">
                            <form className="footer-form"><input type="text" className="form-control" placeholder="Your Name" />
                                <input type="text" className="form-control" placeholder="Email" /><textarea
                                        className="form-control" placeholder="Message"></textarea>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row copyright">
            <div className="container">
                <p><a target="_blank" href="https://www.templateshub.net">Ocean Flight 2020</a></p>
            </div>
        </div>
    </footer>
  )
}
export default Footer;