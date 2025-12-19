// Contact Us page for Nexus
export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-6">Have questions or want to get in touch? Fill out the form below or email us at <a href='mailto:info@nexus.com' className='text-blue-700 underline'>info@nexus.com</a>.</p>
      <form className="space-y-4">
        <input className="w-full border border-blue-300 rounded px-3 py-2" type="text" placeholder="Your Name" required />
        <input className="w-full border border-blue-300 rounded px-3 py-2" type="email" placeholder="Your Email" required />
        <textarea className="w-full border border-blue-300 rounded px-3 py-2" placeholder="Your Message" rows={4} required></textarea>
        <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition" type="submit">Send</button>
      </form>
    </div>
  );
}
