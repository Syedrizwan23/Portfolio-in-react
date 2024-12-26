import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import Footer from './Footer';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "adec07b1-661a-4c3b-9868-311b5e0a01b2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("An error occurred while submitting the form");
    }
  };

  return (
    <section id="contact" >
      <h2 className=" mt-16 text-4xl font-bold text-center text-slate-700 mb-12">Contact Me</h2>
      
      <div className="max-w-[90%] mx-auto my-20 flex flex-col md:flex-row items-center justify-between gap-8" id="contact">
        <div className="w-full md:w-[48%] text-gray-600">
          <h3 className="text-[#000f38] font-medium text-2xl flex items-center mb-5">
            Send us a message
            <MessageSquare className="w-8 h-8 ml-2" />
          </h3>
          <p className="max-w-md leading-relaxed mb-6">
            We are always here to help you. If you have any queries or need any
            information, feel free to contact us. We will get back to you as soon.
          </p>
          <ul className="space-y-5">
            <li className="flex items-center">
              <Mail className="w-6 h-6 mr-3" />
              syedrizwanghani@gmail.com
            </li>
            <li className="flex items-center">
              <Phone className="w-6 h-6 mr-3" />
              +92 313 5544049
            </li>
            <li className="flex items-center">
              <MapPin className="w-6 h-6 mr-3" />
              <span>
                Seham, Peshawar Road <br /> Rawalpindi, Pakistan
              </span>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-[48%]">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
                className="w-full bg-[#EBECFE] p-4 border-0 outline-none rounded-lg focus:ring-2 focus:ring-[#000f38]"
              />
            </div>
            
            <div>
              <label className="block mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Mobile Number"
                required
                className="w-full bg-[#EBECFE] p-4 border-0 outline-none rounded-lg focus:ring-2 focus:ring-[#000f38]"
              />
            </div>
            
            <div>
              <label className="block mb-1">Write Your Message Here</label>
              <textarea
                name="message"
                rows={6}
                placeholder="Enter Your Message"
                required
                className="w-full bg-[#EBECFE] p-4 border-0 outline-none resize-none rounded-lg focus:ring-2 focus:ring-[#000f38]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 flex items-center rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </form>
          <span className="block mt-5">{result}</span>
        </div>
        
      </div>
      <Footer />
    </section>
  );
};

export default Contact;