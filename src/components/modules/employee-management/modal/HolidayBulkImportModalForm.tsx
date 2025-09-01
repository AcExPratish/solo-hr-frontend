import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { apiEndpoint } from '../../../../helpers/common';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { convertFileToAttachment } from '../../../../helpers/utils';
import Dropzone from '@/components/base/Dropzone';
import AttachmentPreview from '@/components/common/AttachmentPreview';
import { THolidayBulkImport } from '@/types/modules/employee-management/holiday';
import ModalForm from '@/components/common/custom/ModalForm';
import { TModalProps } from '@/types/modules';

interface HolidayBulkImportModalFormProps {
  onSubmit: (data: THolidayBulkImport) => void;
  modal: TModalProps;
  loading?: boolean;
  onClose: () => void;
}

const HolidayBulkImportModalForm = ({
  onSubmit,
  loading,
  modal,
  onClose
}: HolidayBulkImportModalFormProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Use States
  const [file, setFile] = React.useState<File | null>(null);
  const handleFileSubmit = () => {
    const formData = new FormData();
    formData.append('file', file as File);
    if (file) {
      onSubmit(formData as unknown as THolidayBulkImport);
    }
  };

  const handleOnClose = () => {
    setFile(null);
    onClose();
  };

  return (
    <React.Fragment>
      <ModalForm
        modal={modal}
        onClose={handleOnClose}
        onSubmit={handleFileSubmit}
        type={'import'}
        title={t('holiday')}
        disabled={loading || !file}
        size="lg"
      >
        <Row>
          <Col md={12} className="mb-5">
            <Card className="shadow-md border-0 br-16">
              <Card.Body>
                <div className="">
                  <Card.Title className="mb-3">
                    {t('download_sample_file')}
                  </Card.Title>
                  <a
                    href={`${apiEndpoint}/holidays/download-sample`}
                    target="_blank"
                    className="btn btn-phoenix-secondary w-100 "
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon className="me-1" icon={faDownload} />
                    {t('download_sample_file')}
                  </a>
                </div>
                <hr />
                <div className="">
                  <Card.Title className="mb-3">
                    {t('holiday_bulk_upload')}
                  </Card.Title>
                  <div className="mb-3">
                    <Dropzone
                      noPreview={true}
                      accept={{
                        'text/xlsx': ['.xlsx'],
                        'text/xls': ['.xls']
                      }}
                      onDrop={acceptedFiles => {
                        if (acceptedFiles.length > 0) {
                          setFile(acceptedFiles[0]);
                        } else {
                          setFile(null);
                        }
                      }}
                    />

                    {file && (
                      <div
                        className={classNames(
                          'border-bottom border-translucent d-flex align-items-center justify-content-between py-3'
                        )}
                      >
                        <AttachmentPreview
                          attachment={convertFileToAttachment(file)}
                        />

                        <button
                          className="btn p-0 text-danger"
                          onClick={() => handleOnClose()}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} className="fs-0" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </ModalForm>
    </React.Fragment>
  );
};

export default HolidayBulkImportModalForm;
