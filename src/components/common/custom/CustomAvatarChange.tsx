import React from 'react';
import SafeAvatarImage, { Size } from '../SafeAvatarImage';
import { useTranslation } from 'react-i18next';
import Badge from '@/components/base/Badge';

interface AvatarChangeProps {
  label: string;
  currentImage: string | null;
  onImageChange: (file: File) => void;
  onImageDelete: () => void;
  isImageFile?: (file: File) => boolean;
  avatarSize?: Size;
  className?: string;
  disabled?: boolean;
  showDeleteButton?: boolean;
}

const defaultIsImageFile = (file: File): boolean => {
  return file.type.startsWith('image/');
};

const AvatarChange = ({
  label = 'Upload New Photo',
  currentImage = null,
  onImageChange,
  onImageDelete,
  isImageFile = defaultIsImageFile,
  avatarSize = '3xl',
  className = '',
  disabled = false,
  showDeleteButton = true
}: AvatarChangeProps) => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(
    currentImage
  );
  const [selectedImageError, setSelectedImageError] =
    React.useState<boolean>(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (disabled) return;
    fileInputRef.current?.click();
  };

  const handleImageChange = (file: File) => {
    if (file) {
      const preview = URL.createObjectURL(file);
      setSelectedImage(preview);
      onImageChange(file);
    }
  };

  const handleDeleteImage = () => {
    if (disabled) return;
    setSelectedImage(null);
    setSelectedImageError(false);
    onImageDelete();

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (isImageFile(files[0])) {
        setSelectedImageError(false);
        handleImageChange(files[0]);
        e.target.value = '';
      } else {
        setSelectedImageError(true);
      }
    }
  };

  React.useEffect(() => {
    setSelectedImage(currentImage);
  }, [currentImage]);

  return (
    <React.Fragment>
      <div
        className={`d-flex align-items-center gap-1 mb-2 bg-gray-100 p-4 w-100 rounded-3 ${className}`}
      >
        {/* Avatar image */}
        <div className="me-2">
          <SafeAvatarImage src={selectedImage || undefined} size={avatarSize} />
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          style={{ display: 'none' }}
          disabled={disabled}
        />

        {/* Avatar change buttons */}
        <div className="d-flex flex-column flex-wrap align-items-start gap-1 ms-2">
          <h6 className="fs-9">{label}</h6>
          <span className="text-muted small">
            {t('upload_profile_image_description')}
          </span>

          <div className="d-flex align-items-start justify-content-center gap-2">
            <Badge
              variant="tag"
              className="bg-primary text-white btn btn-primary p-2 cursor-pointer"
              onClick={handleUploadClick}
            >
              {t('upload')}
            </Badge>

            {selectedImage && showDeleteButton && (
              <Badge
                variant="tag"
                className="btn p-2 cursor-pointer"
                onClick={handleDeleteImage}
              >
                {t('cancel')}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Image error message */}
      {selectedImageError && (
        <p className="text-danger mt-2">{t('form_validation_image')}</p>
      )}
    </React.Fragment>
  );
};

export default AvatarChange;
