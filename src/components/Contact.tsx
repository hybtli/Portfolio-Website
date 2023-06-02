import React, { useState } from "react";

const Contact = () => {
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const encodedSubject = encodeURIComponent(subject);
  const encodedMessage = encodeURIComponent(message);
  const mailtoLink = `mailto:nurbala788788@gmail.com?subject=${encodedSubject}&body=${encodedMessage}`;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = mailtoLink;
  };

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md" id="contact">
      <p
        className="text-center mb-3"
        style={{
          fontFamily:
            '"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',
          color: "#64ffda",
          fontSize: "smaller",
          fontWeight: 400,
        }}
      >
        02. Contact Me
      </p>
      <h2
        className="mb-4 text-4xl tracking-tight font-extrabold text-center"
        style={{ color: "#ccd6f6" }}
      >
        Get in Touch
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Interested in working together? Have a question about my work? Use the
        form below to get in touch with me.
      </p>
      <form action="#" className="space-y-8" onSubmit={handleFormSubmit}>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="bg-gray-50 text-gray-900 text-sm rounded-lg p-2.5 block w-full dark:bg-gray-700
            dark:placeholder-gray-400 dark:text-white"
            placeholder="(e.g. Scheduling a meeting, Request for quote, Collaboration opportunity"
            required
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={6}
            className="bg-gray-50 text-gray-900 text-sm rounded-lg p-2.5 block w-full dark:bg-gray-700
            dark:placeholder-gray-400 dark:text-white"
            placeholder="Leave a comment..."
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-white rounded-lg bg-blue-500 sm:w-fit
          hover:bg-blue-600 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-800
          dark:focus:ring-blue-900"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
