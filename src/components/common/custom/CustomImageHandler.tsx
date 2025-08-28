/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import SafeImage, { Size } from '../SafeImage';
import { useTranslation } from 'react-i18next';
import Badge from '@/components/base/Badge';
import { getIn } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import imageNotAvailable from '@/assets/img/image-not-available.png';
import { IMAGE_ACCEPTED_TYPES } from '@/data';

interface CustomImageHandlerProps {
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
  return IMAGE_ACCEPTED_TYPES.includes(
    file.type as (typeof IMAGE_ACCEPTED_TYPES)[number]
  );
};

const CustomImageHandler = ({
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
}: CustomImageHandlerProps) => {
  const { t } = useTranslation();

  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [selectedImageError, setSelectedImageError] =
    React.useState<boolean>(false);
  const [showPreview, setShowPreview] = React.useState<boolean>(false);

  const validationError =
    fieldName && errors && touched
      ? getIn(touched, fieldName) && getIn(errors, fieldName)
      : null;
  const hasError = selectedImageError || validationError;
  const errorMessage =
    validationError || (selectedImageError ? t('form_validation_image') : null);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (disabled) return;
    fileInputRef.current?.click();
  };

  const handleImageChange = (file: File) => {
    if (file) {
      onImageChange(file);
      if (onBlur) onBlur();
    }
  };

  const handleDeleteImage = () => {
    if (disabled) return;
    onImageDelete();
    if (onBlur) onBlur();
    if (fileInputRef.current) fileInputRef.current.value = '';
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
        if (onBlur) onBlur();
      }
    }
  };

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

  // close on Escape
  React.useEffect(() => {
    if (!showPreview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowPreview(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [showPreview]);

  return (
    <React.Fragment>
      <div
        className={`d-flex align-items-center gap-1 mb-2 bg-gray-100 p-4 w-100 rounded-3 ${
          hasError ? 'border border-danger' : ''
        } ${className}`}
      >
        {/* Image with hover overlay */}
        <div className="me-2 avatar-hover-wrapper">
          <SafeImage
            src={selectedImage || undefined}
            size={avatarSize}
            rounded="square"
            thumbnail={true}
            imageClassName="border-0 rounded-0"
          />

          {selectedImage && (
            <div
              className="avatar-overlay"
              aria-label={t('view_image') as string}
              onClick={() => setShowPreview(true)}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') setShowPreview(true);
              }}
            >
              <FontAwesomeIcon icon={faEye} className="fa-icon" />
            </div>
          )}
        </div>

        {/* Hidden Image Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept={IMAGE_ACCEPTED_TYPES.join(',')}
          onChange={handleFileInputChange}
          style={{ display: 'none' }}
          disabled={disabled}
        />

        {/* Controls */}
        <div className="d-flex flex-column flex-wrap align-items-start gap-1 ms-2">
          <h6 className="fs-9">{label}</h6>
          <span className="text-muted small">
            {t('upload_image_description')}
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

      {/* Error Message */}
      {hasError && <p className="text-danger mt-2">{errorMessage}</p>}

      {/* Lightbox Preview (no nested bootstrap modal) */}
      {showPreview && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={t('preview') as string}
          onClick={() => setShowPreview(false)}
        >
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <img
              className="lightbox-img"
              src={currentImage as string}
              alt={t('preview') as string}
              onError={e => {
                const target = e.currentTarget as HTMLImageElement;
                target.src = imageNotAvailable;
              }}
            />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CustomImageHandler;
