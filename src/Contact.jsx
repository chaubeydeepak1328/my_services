import React, { useState } from "react";

const Contact = () => {
    
    const [data,setdata] = useState({
        fname:"",
        email:"",
        phone:"",
        message:"",
    })

    const InputEvent = (event)=>{
        const {name,value} = event.target;
        setdata((prevalue)=>{
            return{
                ...prevalue,
                [name]:value,
            }
        })
    }

    const formSubmit= (e)=>{
        e.preventDefault();
         alert(`Dear ${data.fname}, your message has been successfully sended`);
    }


    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container container-div mb-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fname" value={data.fname} onChange={InputEvent} placeholder="Enter your FullName" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email}  onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone}  onChange={InputEvent} placeholder="Phone Number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Messgae</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} ></textarea>
                            </div>

                            <div className="col-12">
                            <button type="submit" class="btn btn-outline-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;