import React from "react";
import emailjs from "@emailjs/browser";
import conf from "../../conf/conf.js";

function Contact() {

  const form = React.useRef();
  const handleEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        conf.emailjsServiceId,
        conf.emailjsTemplateId,
        form.current,
        conf.emailjsPublicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="py-20 px-1.5">
      <div className="text-center pb-14 text-white">
        <h1 className="font-bold text-5xl mb-3">Contact</h1>
        <p className="text-2xl ">
          Feel free to reach out to me for any questions or opportunities.
        </p>
      </div>
      <form
        ref={form}
        onSubmit={handleEmail}
        className="w-full max-w-[620px] px-3 py-8 md:px-10 bg-[rgba(0,0,0,0.55)] rounded-2xl flex flex-col mx-auto contact__form__shadow"
      >
        <span className="font-bold text-3xl text-white mb-4">Email Me 🚀 </span>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="outline-none my-3 bg-transparent text-white px-5 py-3.5 border-2 border-[rgba(255,255,255,0.65)] rounded-xl text-xl focus:border-violet-500 transition duration-100 ease-in-out placeholder:text-[rgba(255,255,255,0.5)]"
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="outline-none my-3 bg-transparent text-white px-5 py-3.5 border-2 border-[rgba(255,255,255,0.65)] rounded-xl text-xl focus:border-violet-500 transition duration-100 ease-in-out placeholder:text-[rgba(255,255,255,0.5)]"
        />
        <textarea
          name="message"
          placeholder="Write message..."
          required
          className="outline-none my-3 bg-transparent text-white px-5 py-3.5 border-2 border-[rgba(255,255,255,0.65)] rounded-xl text-xl focus:border-violet-500 transition duration-100 ease-in-out placeholder:text-[rgba(255,255,255,0.5)] h-[120px]"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-2.5 rounded-lg text-white font-semibold text-xl mt-3"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
