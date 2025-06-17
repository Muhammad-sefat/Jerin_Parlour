import { useForm } from "react-hook-form";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8F5] p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg px-8 py-12">
        <h2 className="text-4xl font-bold text-center mb-6  text-black">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Have a question, feedback, or just want to say hi? 💌 Fill out the
          form. We're here to help you shine ✨
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 text-black py-6"
        >
          {/* Name */}
          <div>
            <label className="block  font-medium mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg outline-none text-gray-950 font-medium text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg outline-none text-gray-950 font-medium text-sm"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              rows={5}
              {...register("message")}
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg outline-none text-gray-950 font-medium text-sm"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
