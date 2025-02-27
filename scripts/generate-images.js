const fetch = require('node-fetch');
const sharp = require('sharp');
const fs = require('fs').promises;

const images = [
  {
    name: 'project1.jpg',
    url: 'https://source.unsplash.com/800x600/?enterprise,software',
    alt: 'SAP S/4HANA Implementation'
  },
  {
    name: 'project2.jpg',
    url: 'https://source.unsplash.com/800x600/?artificial,intelligence',
    alt: 'AI-Powered Customer Service'
  },
  {
    name: 'project3.jpg',
    url: 'https://source.unsplash.com/800x600/?mobile,app',
    alt: 'Mobile App Development'
  },
  {
    name: 'project4.jpg',
    url: 'https://source.unsplash.com/800x600/?cloud,technology',
    alt: 'BTP Integration Suite'
  }
];

async function downloadAndProcessImage(image) {
  const response = await fetch(image.url);
  const buffer = await response.buffer();
  
  await sharp(buffer)
    .resize(800, 600, { fit: 'cover' })
    .jpeg({ quality: 90 })
    .toFile(`public/images/${image.name}`);
}

async function generateImages() {
  await Promise.all(images.map(downloadAndProcessImage));
  console.log('Images generated successfully!');
}

generateImages().catch(console.error); 