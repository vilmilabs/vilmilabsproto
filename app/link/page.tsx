'use client'

import { SetStateAction, useState } from 'react';
import { redirect } from 'next/navigation'

export default function TextInputExample() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    redirect(`https://${inputValue}`);
    // You can also send this data to an API or backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Where to?"
        className="border p-2 rounded"
      />
      <button type="submit" className="ml-2 p-2 bg-teal-700 text-white rounded hover:cursor-grab">
        GO! to ~{inputValue}
      </button>
    </form>
  )};