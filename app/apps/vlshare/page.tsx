// app/page.js
import UploadForm from '@/components/UploadForm';
import FileList from '@/components/FileList';

export default async function Page() {
  return (
    <div>
      <h1>File Upload and Access</h1>
      <UploadForm />
      <FileList />
    </div>
  );
}
