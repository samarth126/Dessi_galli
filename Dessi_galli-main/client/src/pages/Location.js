import React from 'react'
import Top from "../components/Top"
import { Link } from 'react-router-dom'

const Location = () => {
    return (
        <div class="ress">
            <Top />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-center">
                              
                                <h2>VISIT US</h2>

                                
                                Life is a combination of love and some masala pav <br></br>
                                so find the heritage of India’s flavors at Desi galli find the galli to Desi galli!

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                       
                            <div class="white"> It's not
                                TOO DIFFICULT TO LOOK OUT FOR US! <br></br>

                                <br>
                                </br>
                                ADDRESS
                                <br>
                                </br>
                                C. de Villarroel, 60, local b, 08011 Barcelona
                                C. de Villarroel, 60, local b, 08011 Barcelona
                            <br>
                            </br>
                            <br>
                            </br>
                                <h1 class="white">
                                    BOOk a Table

                                </h1>
                                <br>
                                </br>
                            <li class="button_user">

                           





                                <Link class="button" to="reservation">
                                    <strong class="white"> Reservation <i class="fa-solid fa-mug-hot"></i></strong>
                                   
                                </Link>

                            </li>
                            <br>
                            </br>
                            <br>
                            </br>
                            <br>
                            </br>
                            <br>
                            </br>
                            <br>
                                </br>
                            </div>
                            

                    </div>
                    <div class="col-md-9">
                     
                        
                        
                        {/* <iframe class="responsive-iframe" width="539" height="717" frameborder="2" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=639&amp;height=517&amp;hl=en&amp;q=C.%20de%20Villarroel,%2060,%20local%20b%20Barcelona+(BELCHICA)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=1fa25775c889b00838edf245075b86d493270be1'></script> */}
                            <iframe class="responsive-iframe" width="520" height="551" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=551&amp;hl=en&amp;q=Desi%20galli%20%20Barcelona+(Desi%20Galli)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=b464fc39ce2d4f7280ac7af94eb767d7141bc1ab'></script>
                    </div>
                    

                </div>

                </div>
            </div>
        </div>
  )
}

export default Location