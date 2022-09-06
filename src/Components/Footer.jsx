

function Footer() {
    return(
        <footer id="footer" className="page-footer fixed-bottom">
            <div className="container-bg">
                <div className="container"> 
                    <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-6">
                            <i class="fa-solid fa-address-book"><h5>Contact Us</h5>
                                <ul class="list-unstyled">
                                    <i class="fa-solid fa-phone"></i><li>phone #</li>
                                    <i class="fa-solid fa-envelope"></i><li>email address</li>
                                    <li>jhgfv</li>
                                    <li>fjkhvhirfg</li>   
                                </ul>
                            </i>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <i class="fa-solid fa-map-location-dot"><h5>Address</h5>
                                <ul class="list-unstyled">
                                    <li>1221 Madison Hill Rd</li>
                                    <li>Rahway, NJ 07065</li>
                                    <li>USA</li>
                                </ul>
                            </i>
                        </div>

                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <i class="fa-solid fa-business-time"><h5>Business Hours</h5>
                                <table itemplo10="openingHours" background-color="#33475b">
                                    <tbody>
                                        {/* MUST ADD PADDING OF 8 TO SEPERATE TABLE MORE!!! */}
                                        <tr><th class="x2TOCf">Mon: </th><td class="o0m3Qb p-5 bg-primary">6:00 AM – 6:00 PM</td></tr>
                                        <tr><th class="x2TOCf">Tue: </th><td class="o0m3Qb pl-10">6:00 AM – 6:00 PM</td></tr>
                                        <tr><th class="x2TOCf">Wed: </th><td class="o0m3Qb pl-10">6:00 AM – 6:00 PM</td></tr>
                                        <tr><th class="x2TOCf">Thu: </th><td class="o0m3Qb pl-10">6:00 AM – 6:00 PM</td></tr>
                                        <tr><th class="x2TOCf">Fri: </th><td class="o0m3Qb pl-10">6:00 AM – 6:00 PM</td></tr>
                                        <tr><th class="x2TOCf">Sat: </th><td class="o0m3Qb pl-10">Closed</td></tr>
                                        <tr><th class="x2TOCf">Sun: </th><td class="o0m3Qb pl-10">Closed</td></tr>
                                    </tbody>
                                </table>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright col-md-12 text-center">
                    Copyright Company Name © 2022. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer;