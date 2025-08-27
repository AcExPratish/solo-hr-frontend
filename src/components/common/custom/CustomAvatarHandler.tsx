/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import SafeAvatarImage, { Size } from '../SafeAvatarImage';
import { useTranslation } from 'react-i18next';
import Badge from '@/components/base/Badge';
import { getIn } from 'formik';

interface CustomAvatarHandlerProps {
  label: string;
  currentImage: string | File | null;
  onImageChange: (file: File) => void;
  onImageDelete: () => void;
  isImageFile?: (file: File) => boolean;
  avatarSize?: Size;
  className?: string;
  disabled?: boolean;
  showDeleteButton?: boolean;
  fieldName?: string;
  errors?: any;
  touched?: any;
  onBlur?: () => void;
}

const defaultIsImageFile = (file: File): boolean => {
  return file.type.startsWith('image/');
};

const CustomAvatarHandler = ({
  label = 'Upload New Photo',
  currentImage = null,
  onImageChange,
  onImageDelete,
  isImageFile = defaultIsImageFile,
  avatarSize = '3xl',
  className = '',
  disabled = false,
  showDeleteButton = true,
  fieldName = 'avatar',
  errors,
  touched,
  onBlur
}: CustomAvatarHandlerProps) => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [selectedImageError, setSelectedImageError] =
    React.useState<boolean>(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (currentImage) {
      if (typeof currentImage === 'string') {
        setSelectedImage(currentImage);
      } else if (currentImage instanceof File) {
        const objectUrl = URL.createObjectURL(currentImage);
        setSelectedImage(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
      }
    } else {
      setSelectedImage(null);
    }
  }, [currentImage]);

  const validationError =
    fieldName && errors && touched
      ? getIn(touched, fieldName) && getIn(errors, fieldName)
      : null;

  const handleUploadClick = () => {
    if (disabled) return;
    fileInputRef.current?.click();
  };

  const handleImageChange = (file: File) => {
    if (file) {
      onImageChange(file);

      if (onBlur) {
        onBlur();
      }
    }
  };

  const handleDeleteImage = () => {
    if (disabled) return;
    onImageDelete();

    if (onBlur) {
      onBlur();
    }

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
        if (onBlur) {
          onBlur();
        }
      }
    }
  };

  const hasError = selectedImageError || validationError;
  const errorMessage =
    validationError || (selectedImageError ? t('form_validation_image') : null);

  return (
    <React.Fragment>
      <div
        className={`d-flex align-items-center gap-1 mb-2 bg-gray-100 p-4 w-100 rounded-3 ${
          hasError ? 'border border-danger' : ''
        } ${className}`}
      >
        {/* Avatar image */}
        <div className="me-2">
          <SafeAvatarImage src={selectedImage || undefined} size={avatarSize} />
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg, image/png, image/jpg"
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

      {/* Error message - displays both local and validation errors */}
      {hasError && <p className="text-danger mt-2">{errorMessage}</p>}
    </React.Fragment>
  );
};

export default CustomAvatarHandler;
