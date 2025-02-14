import React, { useRef } from 'react';
import style from './Contact.module.css';
import { useSelector } from 'react-redux';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default function Contact() {
    const { content } = useSelector((state) => state.lang);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_270k8d8', 
            'template_a3ytv3h', 
            form.current,
            'dHTLa2_KOnTORa_MD' 
        )
        .then((result) => {
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Message sent successfully,Thank you for your message, !',
                timer: 1500,
              });
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: 'error',
                text: 'Failed to send the message, please try again.',
                timer: 1500,
              });
        });

        e.target.reset(); 
    };

    return (
        <>
            <div>
                <div className="row p-5 justify-content-center rounded-3 shadow-lg">
                    <div className="col-md-9 border border-1 border-warning p-5 rounded-3">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="fName" className="pb-2 fw-bolder">{content.firstName}</label>
                                    <input type="text" name="fName" className={`py-3 form-control ${style.contInput}`} id="fName" placeholder="Enter your first name" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lName" className="pb-2 fw-bolder">{content.lastName}</label>
                                    <input type="text" name="lName" className={`py-3 form-control ${style.contInput}`} id="lName" placeholder="Enter your last name" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email" className="pb-2 fw-bolder">{content.email}</label>
                                    <input type="email" name="email" className={`py-3 form-control ${style.contInput}`} id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="phone" className="pb-2 fw-bolder">{content.phone}</label>
                                    <input type="tel" name="phone" className={`py-3 form-control ${style.contInput}`} id="phone" placeholder="Enter your phone number" required />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="subject" className="pb-2 fw-bolder">{content.subject}</label>
                                    <input type="text" name="subject" className={`py-3 form-control ${style.contInput}`} id="subject" placeholder="Enter your subject" required />
                                </div>
                                <div className="col-12 my-3">
                                    <label htmlFor="message" className="pb-2 fw-bolder">{content.message}</label>
                                    <textarea name="message" id="message" placeholder="Enter your message here..." className="form-control py-3" required />
                                </div>
                                <button type="submit" className="btn py-3 text-white w-50 mb-md-3 mx-auto my-3" style={{ backgroundColor: "#ff9500" }}>{content.send}</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3">
                        <div className={`${style.contact} py-3 border border-1 rounded-3 shadow-sm text-center`}>
                            <i className="fa-regular fa-envelope p-3 rounded-3 fs-3"></i>
                            <p>Support@example.com</p>
                        </div>
                        <div className={`${style.contact} my-5 py-3 border border-1 rounded-3 shadow-sm text-center`}>
                            <i className={`fa-solid fa-phone p-3 rounded-3 fs-3`}></i>
                            <p>1234567890</p>
                        </div>
                        <div className={`${style.contact} mb-5 py-3 border border-1 rounded-3 shadow-sm text-center`}>
                            <i className="fa-solid fa-location-dot p-3 rounded-3 fs-3"></i>
                            <p>Somewhere in the world</p>
                        </div>
                        <div className={`${style.contact} py-3 border border-1 rounded-3 shadow-sm text-center`}>
                            <i className="fa-brands fa-facebook p-3 rounded-3 fs-3"></i>
                            <i className="fa-brands fa-twitter p-3 rounded-3 fs-3"></i>
                            <i className="fa-brands fa-linkedin p-3 rounded-3 fs-3"></i>
                            <p>Social media links</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}