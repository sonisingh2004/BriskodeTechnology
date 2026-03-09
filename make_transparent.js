import Jimp from 'jimp';

async function processImage() {
  try {
    // Read the user's logo file
    const image = await Jimp.read('public/assets/briskode.jpeg');
    
    // Get the color of the top-left pixel to use as the background color reference
    const bgHex = image.getPixelColor(0, 0);
    const bgRgb = Jimp.intToRGBA(bgHex);
    
    // Allowed color variance threshold to catch anti-aliasing artifacts
    const tolerance = 35;

    // Scan every pixel in the image
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];

      // If the pixel color is close enough to the background color, make it fully transparent
      if (
        Math.abs(red - bgRgb.r) <= tolerance &&
        Math.abs(green - bgRgb.g) <= tolerance &&
        Math.abs(blue - bgRgb.b) <= tolerance
      ) {
        this.bitmap.data[idx + 3] = 0; // Set Alpha to 0 (transparent)
      }
    });

    // Save as a PNG which supports transparency
    await image.writeAsync('public/assets/briskode-transparent.png');
    console.log('Saved briskode-transparent.png successfully!');
  } catch (err) {
    console.error('Failed to process image:', err);
  }
}

processImage();
