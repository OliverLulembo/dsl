import Services from '@/app/api/service';
import { signupForService } from '@/app/api/serviceSignup';
import React, { useState } from 'react'
import { useFormStatus } from 'react-dom';
import SimpleReactValidator from 'simple-react-validator';

const ContactForm = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            signupForService(forms)
            //console.log(forms)
            //const res = fetch()
        } else {
            validator.showMessages();
        }
    };

    return (


        <form className="xb-item--form contact-from" action={signupForService} >
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_name">
                            What is your name?
                        </label>
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Name" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_email">
                            What is your email address?
                        </label>
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Email" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_phone">
                            What is your Phone number?
                        </label>
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Phone Number" />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_company">
                            What is the name of your company?
                        </label>
                        <input
                            value={forms.company}
                            type="company"
                            name="company"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Company Name" />
                        {validator.message('company', forms.company, 'required')}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_company">
                            What service are you interested in?
                        </label>
                        <select className='form-select' name='service' onChange={(e) => changeHandler(e)}>
                            {Services.map((service, i) => (<option key={i} value={service.title}> {service.title} </option>) )}
                        </select>
                        {validator.message('service', forms.service, 'required')}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <label className="input_title" htmlFor="input_textarea">
                            Give us a little more details 
                        </label>
                        <textarea
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.message}
                            type="text"
                            name="message"
                            className="form-control"
                            placeholder="How can we help you?">
                        </textarea>
                        {validator.message('message', forms.message, 'required')}
                    </div>
                    <SignUpButton />
                </div>
            </div>
        </form>
    )
}

export default ContactForm;

export function SignUpButton(){
    const {pending} = useFormStatus()
    console.log(pending);
    return(
        <>
            <button disabled={pending} type="submit" className="btn btn-primary">
                {pending ? <span className="btn_label" data-text="Sending...">Sending...</span> : <span className="btn_label" data-text="Send Request">Send Request</span>}
                <span className="btn_icon">
                    <i className="fa-solid fa-arrow-up-right"></i>
                </span>
            </button>
        </>
    )
}
    