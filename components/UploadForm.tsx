import { put } from '@vercel/blob';

export default function UploadForm() {
  async function handleUpload(formData: FormData) {
    'use server';
    const file = formData.get('file') as File;
    const blob = await put(file.name, file, {
      access: 'public',
      addRandomSuffix: true,
    });
    console.log('File uploaded to:', blob.url);
  }

  return (
    <form action={handleUpload}>
      <input type="file" name="file" required />
      <button type="submit">Upload</button>
    </form>
  );
}