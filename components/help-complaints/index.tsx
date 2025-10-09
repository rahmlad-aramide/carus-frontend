"use client";

import { useState } from "react";

export default function HelpandComplaints() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", message);
  };

  return (
    <div className="px-7 md:px-15 mt-5 bg-[#F3F3F3] rounded-[10px] pt-5 md:pt-15 pb-20 min-h-screen">
      <div>
        <p className="text-base md:text-[24px] text-grey-90 font-bold leading-loose pb-5">
          How can we help you?
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label htmlFor="helpText" className="sr-only">
            Your complaint or message
          </label>
          <textarea
            id="helpText"
            placeholder="Your text here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full md:max-w-[500px] min-h-[150px] p-4 form-textarea rounded-[10px] text-grey-90 bg-white"
          ></textarea>

          <div>
            <button
              type="submit"
              className="py-3 w-full md:max-w-[340px] text-white font-bold bg-[#026937] rounded-[10px] mt-10"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
