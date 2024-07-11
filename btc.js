import https from 'https';
import { createWriteStream } from 'fs';
import { join } from 'path';

// Function to download the file
function downloadFile() {
  const url = 'https://query1.finance.yahoo.com/v7/finance/download/BTC-USD?period1=1684177738&period2=1715800138&interval=1d&events=history&includeAdjustedClose=true';
  const directoryPath = './sources/csv/';
  const fileName = `btc.csv`;
  const fullPath = join(directoryPath, fileName);

  // Create a request to the URL
  https.get(url, (res) => {
    const filePath = createWriteStream(fullPath);
    res.pipe(filePath);
    filePath.on('finish', () => {
      filePath.close();
      console.log('Downloaded file:', fullPath);
    });
  }).on('error', (err) => {
    console.error('Error downloading the file:', err.message);
  });
}

downloadFile();
