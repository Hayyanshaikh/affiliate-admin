// useFileSize.js

import { useState, useEffect } from 'react';

const useFileSize = (files) => {
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    if (files && files.length > 0) {
      const newSizes = files.map((file) => {
        const fileSizeInBytes = file.size;
        const fileSizeInKB = fileSizeInBytes / 1024;
        const fileSizeInMB = fileSizeInKB / 1024;
        const fileSizeInGB = fileSizeInMB / 1024;
        const fileSizeInTB = fileSizeInGB / 1024;

        if (fileSizeInTB >= 1) {
          return `${fileSizeInTB.toFixed(2)} TB`;
        } else if (fileSizeInGB >= 1) {
          return `${fileSizeInGB.toFixed(2)} GB`;
        } else if (fileSizeInMB >= 1) {
          return `${fileSizeInMB.toFixed(2)} MB`;
        } else if (fileSizeInKB >= 1) {
          return `${fileSizeInKB.toFixed(2)} KB`;
        } else {
          return `${fileSizeInBytes} Bytes`;
        }
      });

      setSizes(newSizes);
    }
  }, [files]);

  return sizes;
};

export default useFileSize;
