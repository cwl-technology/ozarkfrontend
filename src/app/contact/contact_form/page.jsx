import React from 'react'
export const metadata = {
   title: "Contact us || Ozark Company",
   description: "Created by CWL pvt. ltd.",
 };
function page() {
  return (
    <>
     <div id="content" className="site-content ">
	  <div className="page_header_default style_one ">
            <div className="parallax_cover">
               <div className="simpleParallax">
                  <img src="/assets/images/page-header-default.jpg" alt="bg_image" className="cover-parallax"/>
               </div>
            </div>
            <div className="page_header_content">
               <div className="auto-container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="banner_title_inner">
                           <div className="title_page">
                              Contact Us
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-12">
                        <div className="breadcrumbs creote">
                           <ul className="breadcrumb m-auto">
                              <li><a href="index-2.html">Home</a></li>
                              <li className="active">Contact Us</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
		
	  <section className="contact-section">
               <div className="pd_top_90"></div>
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-6 col-lg-6 mb-5 mb-lg-5 mb-xl-0">
                        <div className="contact_form_box_all type_one">
                           <div className="contact_form_box_inner">
                              <div className="contact_form_shortcode">
                                 <form id="contact-form" method="post" action="https://themepanthers.com/html/creote-html/contact.php" role="form" noValidate={true}>

                                    <div className="messages"></div>

                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                   <label> Your Name<br/></label>
                                                    <input type="text" name="name" placeholder="Your Name *" required="required" data-error="Enter Your Name"/>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                   <label> Your Email<br/></label>
                                                    <input type="text" name="email" required="required" placeholder="Email *" data-error="Enter Your Email Id"/>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                   <label> Your Subject<br/></label>
                                                    <input type="text" name="subject" required="required" placeholder=" Subject  (Optional)"/>
                                                </div>
                                            </div>
                                           
                                            
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                   <label> Your Message<br/></label>
                                                    <textarea name="message" placeholder="Additional Information... (Optional) " rows="3" required="required" data-error="Please, leave us a message."></textarea>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-sm-12">
                                                <div className="form-group mg_top apbtn">
                                                    <button className="theme_btn disabled" type="submit" style={{pointerEvents: "all", cursor: "pointer"}}>Appointment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 pd_left_30">
                        <div className="title_all_box style_one dark_color">
                           <div className="title_sections left">
                              <div className="before_title">Our Contact Info</div>
                              <h2>Get In Touch</h2>
                              <p>Let us know how we can help, we make a customer, not just a sale.</p>
                           </div>
                        </div>

                        <div className="contact_box_content style_one">
                           <div className="contact_box_inner icon_yes">
                              <div className="icon_bx">
                                 <span className=" icon-placeholder"></span>
                              </div>
                              <div className="contnet">
                                 <h3> Post Address </h3>
                                 <p>
                                    846/1, Ghitorni, Nr. Metro Pillar-115, Delhi-110030
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="pd_bottom_15"></div>
                        <div className="contact_box_content style_one">
                           <div className="contact_box_inner icon_yes">
                              <div className="icon_bx">
                                 <span className="icon-phone-call"></span>
                              </div>
                              <div className="contnet">
                                 <h3> General Enquires </h3>
                                
								  <p>
                                   Help & Support: <a href="tel:+918743877462">+91-8743877462</a>
                                 </p>
								  
								  <p>
                                   Sales: <a href="tel:+917982760010">+91-7982760010</a>
                                 </p>
								  <p>
                                   Email: <a href="mailto:info@theozarkco.com">info@theozarkco.com</a>
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="pd_bottom_15"></div>
                        <div className="contact_box_content style_one">
                           <div className="contact_box_inner icon_yes">
                              <div className="icon_bx">
                                 <span className="fa fa-clock-o"></span>
                              </div>
                              <div className="contnet">
                                 <h3> Operation Hours </h3>
                                 <p>
                                    Mon - Fri, 10:00 AM - 07:00 PM (IST)
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="pd_bottom_40"></div>
                        <div className="social_media_v_one style_two">
                           <ul>
                              <li>
                                 <a href="https://www.facebook.com/ozarkandco/"> <span className="fa fa-facebook"></span>
                                    <small>facebook</small>
                                 </a>
                              </li>
                              <li>
                                 <a href="https://in.linkedin.com/company/the-ozark-co?trk=public_profile_topcard-current-company"> <span className="fa fa-linkedin"></span>
                                    <small>linkedin</small>
                                 </a>
                              </li>
                            
                              <li>
                                 <a href="https://www.instagram.com/ozarkandco/"> <span className="fa fa-instagram"></span>
                                    <small>instagram</small>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="pd_top_70"></div>
            </section>
	</div>
    
    </>
  )
}

export default page