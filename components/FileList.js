// components/FileList.js
import fs from 'fs/promises';
import path from 'path';

export default async function FileList() {
  const files = await fs.readdir(path.join(process.cwd(), 'public/uploads'));

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file}>
            <a href={`/uploads/${file}`} target="_blank" rel="noopener noreferrer">
              {file}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
