import imageNotAvailable from '@/assets/img/image-not-available.png';
import { storageEndpoint } from '@/helpers/common';

const ImagePreview = ({
  image,
  height = 20,
  width = 20
}: {
  image: string;
  height?: number;
  width?: number;
}) => {
  return (
    <img
      className=" me-2"
      style={{ objectFit: 'contain', width, height }}
      src={`${storageEndpoint}/${image}`}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = imageNotAvailable;
      }}
      alt={''}
    />
  );
};

export default ImagePreview;
