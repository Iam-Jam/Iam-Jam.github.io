import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import React from 'react';

const Contact = () => {
    return (
        <section className="container col-lg-7 contact-scn">    
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label fw-bold">Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label fw-bold">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label fw-bold">Send Me a Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="col-12 text-center mt-2">
                <a className="btn py-2 px-5" href="properties.html">Submit your Message</a>
            </div>
        </section>
    )
}

export default Contact;