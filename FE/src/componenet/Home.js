import React, { useState } from 'react'


const images = [
  "img/picture1.jpg",
  "img/picture2.jpg",
  "img/picture3.jpg",
];
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };
  return (
    <div>
      <div>


        <div style={styles.carouselContainer}>
          {/* Flèche gauche */}
          <button onClick={goToPrevious} style={styles.arrowLeft}>&#10094;</button>

          {/* Image actuelle */}
          <img src={images[currentIndex]} alt="carousel" style={styles.image} />

          {/* Flèche droite */}
          <button onClick={goToNext} style={styles.arrowRight}>&#10095;</button>
        </div>


        <div className="content">
          <div className="thumb-box1">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8 wow fadeInUp">
                  <p className="title">Helping you hear better </p>
                  <p>We have earned a reputation for being able to provide patients with nearly all types of hearing loss instruments and services at a reasonable price. If you don't find the exact hearing loss product that you are looking for, let us know and we will do everything that we can to satisfy your needs.</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.2s">
                  <a href="#" className="btn-default btn1">More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="thumb-box2">
            <div className="container">
              <p className="title wow fadeInLeft">Our professional advice</p>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp">
                  <div className="thumb-pad1">
                    <div className="thumbnail">
                      <strong><img src="img/page1_icon1.png" alt /></strong>
                      <div className="caption">
                        <p className="description">reprehenderit in voluptate</p>
                        <p>Dolor sit amet, consectetur adipisicing elit sed dobe eiusmod tempor incididuntut labore et dolore magna aliquautenim massa ipsum.</p>
                        <a href="#" className="btn-default btn2">read more <i /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="thumb-pad1">
                    <div className="thumbnail">
                      <strong><img src="img/page1_icon1.png" alt /></strong>
                      <div className="caption">
                        <p className="description">labore et dolore magna</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed dobe eiusmod tempor incidut labore et dolore magna aliquautenad minim veniam, quis nostrud.</p>
                        <a href="#" className="btn-default btn2">read more <i /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="thumb-pad1">
                    <div className="thumbnail">
                      <strong><img src="img/page1_icon1.png" alt /></strong>
                      <div className="caption">
                        <p className="description">Duis aute irure dolor</p>
                        <p>Epsum dolor sit amet, consectetur adipisicing elit sed ut labore et dolore magna aliquautenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                        <a href="#" className="btn-default btn2">read more <i /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="thumb-box3">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInLeft" data-wow-delay="0.2s">
                  <div className="thumb-pad2 maxheight">
                    <div className="thumbnail">
                      <figure><img src="img/page1_pic1.jpg" alt /></figure>
                      <div className="caption">
                        <p className="title">lorem ipsum</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <a href="#"><img src="img/more_arrow1.png" alt /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInLeft" data-wow-delay="0.1s">
                  <div className="thumb-pad2 maxheight">
                    <div className="thumbnail">
                      <figure><img src="img/page1_pic2.jpg" alt /></figure>
                      <div className="caption">
                        <p className="title">consequatur</p>
                        <p>Massa dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore est. </p>
                        <a href="#"><img src="/img/more_arrow1.png" alt /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInLeft">
                  <div className="thumb-pad2 maxheight">
                    <div className="thumbnail">
                      <figure><img src="img/page1_pic3.jpg" alt /></figure>
                      <div className="caption">
                        <p className="title">laboriosam</p>
                        <p>Ed dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut </p>
                        <a href="#"><img src="img/more_arrow1.png" alt /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="thumb-box4">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-6 wow fadeInUp">
                  <p className="title"><img src="img/title_icon1.png" alt />Our Mission</p>
                  <h3>Quis autem vel eum iure reprehenderit</h3>
                  <p>Dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                  <a href="#" className="btn-default btn2">read more <i /></a>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-6 col-lg-offset-1 wow fadeInUp" data-wow-delay="0.1s">
                  <p className="title"><img src="img/title_icon2.png" alt />consultation</p>
                  <h3>Ut enim ad minim veniam</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                  <a href="#" className="btn-default btn2">read more <i /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="thumb-box5">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8 wow fadeInUp">
                  <p className="title">Hearing loss prevention</p>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum.</p>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.1s">
                  <a href="#" className="btn-default btn1">More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="thumb-box6">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 wow fadeInUp" data-wow-delay="0.2s">
                  <figure><a href="#"><img src="img/page1_logo1.png" alt /></a></figure>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 wow fadeInUp" data-wow-delay="0.3s">
                  <figure><a href="#"><img src="img/page1_logo2.png" alt /></a></figure>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 wow fadeInUp" data-wow-delay="0.4s">
                  <figure><a href="#"><img src="img/page1_logo3.png" alt /></a></figure>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 wow fadeInUp" data-wow-delay="0.5s">
                  <figure><a href="#"><img src="img/page1_logo4.png" alt /></a></figure>
                </div>
              </div>
            </div>
          </div>
          <div className="thumb-box7">
            <div className="container">
              <p className="title wow fadeInLeft">quick Contact</p>
              <div className="contactForm2">
                <form id="contact-form">
                  <div className="contact-form-loader" />
                  <div className="row">
                    <fieldset>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <label className="message form-div-4">
                          <textarea name="message" placeholder="Your Message" data-constraints="@Required @Length(min=20,max=999999)" defaultValue={""} />
                          <span className="empty-message">*This field is required.</span>
                          <span className="error-message">*The message is too short.</span>
                        </label>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="box">
                          <label className="name form-div-1">
                            <input type="text" name="name" placeholder="Your Name" defaultValue data-constraints="@Required @JustLetters" />
                            <span className="empty-message">*This field is required.</span>
                            <span className="error-message">*This is not a valid name.</span>
                          </label>
                          <label className="email form-div-2">
                            <input type="text" name="email" placeholder="Your Email" defaultValue data-constraints="@Required @Email" />
                            <span className="empty-message">*This field is required.</span>
                            <span className="error-message">*This is not a valid email.</span>
                          </label>
                          <div className="btns">
                            <a href="#" data-type="submit" className="btn-default btn3">Submit the form</a>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal fade response-message">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                          <h4 className="modal-title">Modal title</h4>
                        </div>
                        <div className="modal-body">
                          You message has been sent! We will be in touch soon.
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="thumb-box8">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp">
                  <div className="thumb-pad3-1">
                    <div className="thumbnail">
                      <div className="box clearfix">
                        <div>
                          <strong>23</strong>
                          <span>august</span>
                        </div>
                        <hr />
                        <a href="#">Ut enim ad minim veniamquis nostrud ullamco reprehenderit in volup.</a>
                      </div>
                      <div className="caption">
                        <p>Tempore, cum soluta nobis est eligendi opticumque nihil impedit quo minus id quod maxime placeat facerepossimus, omnis voluptas assumenda est omnidolor repellendusemporibus...</p>
                      </div>
                      <a href="#" className="btn-default btn2">read more <i /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="thumb-pad3-1">
                    <div className="thumbnail">
                      <div className="box clearfix">
                        <div>
                          <strong>14</strong>
                          <span>august</span>
                        </div>
                        <hr />
                        <a href="#">Massa ad minim veniamquis nostrud exercitation estullamco.</a>
                      </div>
                      <div className="caption">
                        <p>Nam libero tempore, cum soluta nobis est eligendi opticumque nihil impedit quo minus id quod maxime placeat facerepossimus, omnis voluptas assumenda est omnisdolor repellendus...</p>
                      </div>
                      <a href="#" className="btn-default btn2">read more <i /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 logo-box wow fadeInUp" data-wow-delay="0.2s">
                  <figure><a href="#"><img src="img/logo2.png" alt /></a></figure>
                  <p>9870 St Vincent Place,<br />Glasgow, DC 45 Fr 45.<br /><a href="#">contactdemolink.org</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
const styles = {
  carouselContainer: {
    position: "relative",
    width: "1300px",
    height: "400px",
    margin: "auto",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  arrowLeft: {
    position: "absolute",
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "10px",
    background: "rgba(0, 0, 0, 0.5)",
    border: "none",
    cursor: "pointer",
    color: "white",
    padding: "10px",
    borderRadius: "50%",
    height: "30px"
  },
  arrowRight: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "10px",
    background: "rgba(0, 0, 0, 0.5)",
    border: "none",
    cursor: "pointer",
    color: "white",
    padding: "10px",
    borderRadius: "50%",
    height: "30px"
  },
};
