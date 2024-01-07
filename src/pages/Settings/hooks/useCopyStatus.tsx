import { useEffect, useState } from 'react';

type CopyStatus = 'idle' | 'success' | 'fail';

const useCopyStatus = () => {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');

  useEffect(() => {
    if (copyStatus !== 'idle') {
      const timer = setTimeout(() => {
        setCopyStatus('idle');
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [copyStatus]);

  return { copyStatus, setCopyStatus };
};

export default useCopyStatus;
