import * as Yup from 'yup';
import i18next from 'i18next';
const t = i18next.t;
import { IMAGE_ACCEPTED_TYPES, IMAGE_MAX_SIZE } from '@/data';

export const imageValidatorSchema = Yup.mixed<File | string>()
  .nullable()
  .notRequired()
  .transform((val, orig) => (orig === '' ? null : val))
  .test('fileSize', t('form_validation_image_size'), v => {
    if (!(v instanceof File)) return true;
    return v.size <= IMAGE_MAX_SIZE;
  })
  .test('fileType', t('form_validation_image_type'), v => {
    if (!(v instanceof File)) return true;
    return IMAGE_ACCEPTED_TYPES.includes(
      v.type as (typeof IMAGE_ACCEPTED_TYPES)[number]
    );
  });
