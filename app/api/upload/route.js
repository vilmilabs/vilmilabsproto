// app/api/upload/route.js
import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `${uuidv4()}_${file.name}`;
    const filePath = path.join(process.cwd(), 'public/uploads', fileName);

    await writeFile(filePath, buffer);

    return NextResponse.json({
      message: 'File uploaded successfully',
      filePath: `/uploads/${fileName}`,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    );
  }
}
