import api from '../utils/api';
import { apiEndpoint } from '@/helpers/common';

const fileEndpoint: string = `${apiEndpoint}/file`;

const upload = (file: File | string | null, attribute: string) => {
  const formData = new FormData();
  if (file instanceof File) {
    formData.append('file', file);
  }
  formData.append('attribute', attribute);

  return api.post(`${fileEndpoint}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

const FileService = {
  upload
};

export default FileService;
