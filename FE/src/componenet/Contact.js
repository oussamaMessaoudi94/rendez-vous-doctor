import React from 'react'

export default function Contact() {
  return (
<div>
  <div className="content indent">
    <div className="container">
      <h2>Contact Us</h2>
    </div>
    <div className="thumb-box15">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <h2>Addresses</h2>
            <div className="info">
              <h5>Address 1:</h5>
              <p>9870 St Vincent Place, Glasgow, DC 45 Fr 45. </p>
              <h5>Phones:</h5>
              <p>+1 800 559 6580<br />+1 800 603 6035</p>
              <h5>Address 2:</h5>
              <p>9863 - 9867 Mill Road, Cambridge, MG09 99HT.</p>
              <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3188.824367126418!2d10.169700999999998!3d36.942364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stn!4v1740601990608!5m2!1sen!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
          className='w-100'
          height='400'
          loading='lazy'
        ></iframe>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8">
            <h2>Contact form</h2>
            <form id="contact-form">
              <div className="contact-form-loader" />
              <fieldset>
                <label className="name form-div-1">
                  <input type="text" name="name" placeholder="* Your full name here:" defaultValue data-constraints="@Required @JustLetters" />
                  <span className="empty-message">*This field is required.</span>
                  <span className="error-message">*This is not a valid name.</span>
                </label>
                <label className="email form-div-2">
                  <input type="text" name="email" placeholder="* Enter your e-mail:" defaultValue data-constraints="@Required @Email" />
                  <span className="empty-message">*This field is required.</span>
                  <span className="error-message">*This is not a valid email.</span>
                </label>
                <label className="phone form-div-3">
                  <input type="text" name="phone" placeholder="Your telephone here:" defaultValue data-constraints="@Required @JustNumbers" />
                  <span className="empty-message">*This field is required.</span>
                  <span className="error-message">*This is not a valid phone.</span>
                </label>
                <label className="message form-div-4">
                  <textarea name="message" placeholder="* Your comments & questions:" data-constraints="@Required @Length(min=20,max=999999)" defaultValue={""} />
                  <span className="empty-message">*This field is required.</span>
                  <span className="error-message">*The message is too short.</span>
                </label>
                {/* <label class="recaptcha"><span class="empty-message">*This field is required.</span></label> */}
                <div className="btns">
                  <a href="#" data-type="submit" className="btn-default btn3">Submit</a>
                  <p>* Required Fields</p>
                </div>
              </fieldset> 
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
    </div>
  </div>
</div>

  )
}
