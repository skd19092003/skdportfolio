import  { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  // eslint-disable-next-line no-unused-vars
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs.sendForm("service_skd190903","template_9nir70l", form.current,"s_BnFyVR3fpRPiTCP" )
      .then( () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  }; 

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          /> 
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

/* What is useRef?
useRef is a React hook that creates a "ref" (reference) object.
  This object has a (.current property) that can hold a reference to a DOM element (like an HTML tag) or any mutable value.
Unlike state (useState), refs don't trigger re-renders when they change — they're for "side effects" or direct DOM manipulation.
You import it from React: import { useRef } from "react";.
In your code: form = useref();
This creates a ref called form. Initially, form.current is undefined.

When the component renders, form.current will be set to the actual <form> DOM element.*/

/*What does ref={form} do?
ref={form} is an attribute you add to a JSX element (like <form>).
It "attaches" the ref to that element. After the component mounts, 

form.current will point to the <form> DOM node in the browser.

It's like giving React a direct pointer to the form element so you can interact with it outside of React's normal state/props flow.

Why use it here?

Your form uses EmailJS to send emails. EmailJS's sendForm method needs the actual form DOM element to read the input values 
(name, email, message, etc.) and send them.

(((((((((((form.current is passed to emailjs.sendForm(...) so EmailJS can access the form data.)))))))))))
After sending, form.current.reset() clears the form fields (resets inputs to empty). */





/*Step-by-step flow:
Component renders: <form ref={form} ...> — form.current becomes the form DOM element.
User fills form and clicks "Send".
sendEmail runs: emailjs.sendForm(..., form.current, ...) — EmailJS reads data from the form.
On success: form.current.reset() — clears the form.
On error: Shows toast, but form stays filled.


Without useRef/ref:
You'd have to use controlled inputs (with useState for each field), collect the values manually, and pass them to EmailJS. It's more code and less efficient for forms.
EmailJS prefers the DOM form for simplicity. */