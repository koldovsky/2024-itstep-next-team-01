import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface Image {
  id: string;
  src: string;
  alt: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const imagesDirectory = path.join(process.cwd(), 'public', 'instagram');
    const filenames = fs.readdirSync(imagesDirectory);
    const images: Image[] = filenames.map((filename) => ({
      id: filename,
      src: `/instagram/${filename}`,
      alt: `Image ${filename}`,
    }));
    res.status(200).json(images);
  } catch (error) {
    console.error('Error reading images directory:', error);
    res.status(500).json({ message: 'Failed to load images' });
  }
}