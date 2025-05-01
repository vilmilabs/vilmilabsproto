'use client';

import { useRef } from 'react';

export default function UploadForm() {
  const fileInput = useRef(null);

  async function handleUpload(evt) {
    evt.preventDefault();
    const formData = new FormData();
    formData.append('file', fileInput.current.files[0]);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    console.log(result);
    alert("Upload succesful!")
  }

  return (
    <form onSubmit={handleUpload}>
      <label className='text-cyan-400 text-3xl border border-emerald-900 border-3'>
      <input type="file" ref={fileInput} required />
      </label>
      <button type="submit" className='border-blue-500 rounded bg-emerald-800 text-slate-300 p-6'>Upload</button>
    </form>
  );
}