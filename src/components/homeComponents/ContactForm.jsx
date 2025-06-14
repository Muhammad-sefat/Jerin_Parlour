const ContactForm = () => {
  return (
    <div className="bg-[#FFF8F5] text-black py-8 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold py-6 text-center">
        Let us handle your project, <br className="hidden md:block" />{" "}
        professionally.
      </h2>

      <form className="space-y-6 max-w-4xl mx-auto py-6">
        {/* First and Last Name */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 text-[14px] font-medium bg-white rounded-lg px-4 py-3"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 text-[14px] font-medium bg-white rounded-lg px-4 py-3"
          />
        </div>

        {/* Email and Phone */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 text-[14px] font-medium bg-white rounded-lg px-4 py-3"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="flex-1 text-[14px] font-medium bg-white rounded-lg px-4 py-3"
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full text-[14px] font-medium bg-white rounded-lg px-4 py-3"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#f73d7b] text-white px-8 py-3 rounded-md font-semibold sclhover"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
