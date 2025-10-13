import FileService from '@/services/FileService';

const useFileHook = () => {
  const uploadFile = async (file: File | string | null, attribute: string) => {
    try {
      const resp = await FileService.upload(file, attribute);
      const row = resp?.data?.data || null;
      return row;
    } catch (e: unknown) {
      console.error('uploadFile', e);
      throw e;
    }
  };

  return {
    uploadFile
  };
};

export default useFileHook;
