import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const fakeLinks = ['Instagram', 'LinkedIn', 'Twitter'];

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 px-8 py-12 text-center">
      <div className="flex flex-wrap justify-around text-left gap-8 mb-6">
        {/* About Us */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-white mb-2 text-lg font-semibold">About Us</h3>
          <p>Passionate about Tech.</p>
        </div>

        {/* Contact */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-white mb-2 text-lg font-semibold">Contact</h3>
          <p>Email: support@mybrand.com</p>
          <p>Phone: ‪+91 98765 43210‬</p>
        </div>

        {/* Follow Us */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-white mb-2 text-lg font-semibold">Follow Us</h3>
          <p className="space-x-2">
            {fakeLinks.map((label) => (
              <Link
                key={label}
                to="#form"
                onClick={(e) => e.preventDefault()}
                className="text-white hover:underline"
              >
                {label}
              </Link>
            ))}
          </p>
        </div>

        {/* Newsletter */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-white mb-2 text-lg font-semibold">Newsletter</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // handle subscription if needed
            }}
            className="flex flex-col"
          >
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 mb-2 rounded border-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black p-2 rounded hover:bg-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-6">&copy; 2025 By Mohammad Amil. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
