import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

      emailjs
        .sendForm(
          "service_n5z6xeo",
          "template_qpc79q7",
          form.current,
          "4Uu3K0r0vNOefu1I6"
        )
        .then(
          (result) => {
                console.log(result.text);
                toast.success("Successfully sent!");
          },
          (error) => {
              console.log(error.text);
               toast.error("Failed to sent!");
          }
        );
    };
    return (
      <div className="h-screen mt-20" id="Contact">
        <div className="h-full w-full flex justify-center items-center">
          <div className="w-1/2 bg-base-100 bg-opacity-70 px-20 py-20 rounded-xl">
            <div>
              <p className="text-3xl mb-5 font-bold text-primary text-center">
                CONTACT ME
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="">
                <div>
                  <div className="mb-2 font-bold">
                    <label>Name</label>
                  </div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className=" mb-5 input input-bordered input-md w-full"
                    name="user_name"
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 font-bold">
                    <label>Email</label>
                  </div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className=" mb-5 input input-bordered input-md w-full"
                    name="user_email"
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 font-bold">
                    <label>Message</label>
                  </div>
                  <textarea
                    className="textarea textarea-bordered w-full h-[100px]"
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Send"
                  className="btn btn-secondary w-full mt-5"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ContactMe;