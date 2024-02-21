import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx'; // XLSX object ko seedha import karein

const useFileDownload = (data) => {
  const [downloaded, setDownloaded] = useState(false);
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    if (downloaded && fileName) {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      XLSX.writeFile(workbook, `${fileName}.xlsx`);
    }
  }, [downloaded, data, fileName]);

  const downloadFile = () => {
    const inputFileName = prompt('Enter file Name', 'Data');
    if (inputFileName) {
      setFileName(inputFileName.replace(/ /g, '_'));
      setDownloaded(true);
    }
  };

  return downloadFile;
};

export default useFileDownload;