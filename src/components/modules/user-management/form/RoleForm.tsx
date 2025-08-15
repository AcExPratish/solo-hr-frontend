import React from 'react';
import { Formik } from 'formik';
import { Form, FloatingLabel } from 'react-bootstrap';
import ModalForm from '../../../common/custom/ModalForm';
import { TModalProps } from '@/types/modules';
import { TRole } from '@/types/modules/user-management/role';
import { TPermission } from '@/types/modules/user-management/permission';
import usePermissionHook from '@/hooks/modules/user-management/usePermissionHook';
import { useTranslation } from 'react-i18next';

interface RoleFormProps {
  formData: TRole;
  onSubmit: (data: TRole) => void;
  onClose: () => void;
  modal: TModalProps;
  loading?: boolean;
}

interface TPermissionForm extends TPermission {
  checked?: boolean;
}

const RoleForm = ({
  formData,
  onSubmit,
  onClose,
  modal,
  loading
}: RoleFormProps) => {
  // React Hooks
  const { t } = useTranslation();

  // Custom Hooks
  const { permissions: allPermissions } = usePermissionHook();
  const [permissions, setPermissions] = React.useState<TPermissionForm[]>([]);
  const selectAllRef = React.useRef<HTMLInputElement | null>(null);

  // Handlers
  const allChecked =
    permissions.length > 0 && permissions.every(p => !!p.checked);
  const someChecked = permissions.some(p => !!p.checked) && !allChecked;

  const handlePermissionChange = (id: string) => {
    setPermissions(prev =>
      prev.map(p => (p.id === id ? { ...p, checked: !p.checked } : p))
    );
  };

  const handleToggleAll = (checked: boolean) => {
    setPermissions(prev => prev.map(p => ({ ...p, checked })));
  };

  // On Submit
  const handleSubmit = (values: TRole) => {
    const selectedIds = permissions.filter(p => p.checked).map(p => p.id);

    onSubmit({
      ...values,
      id: formData.id,
      name: values.name,
      permissions: selectedIds as unknown as TPermission[]
    });
  };

  // Use Effects
  React.useEffect(() => {
    const assignedIds = formData?.permissions?.map(p => p.id) || [];

    // If is_superuser, check all
    if (formData?.is_superuser) {
      setPermissions(
        (allPermissions || []).map(p => ({
          ...p,
          checked: true
        }))
      );
    } else {
      setPermissions(
        (allPermissions || []).map(p => ({
          ...p,
          checked: assignedIds.includes(p.id)
        }))
      );
    }
  }, [formData, allPermissions]);

  React.useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = someChecked;
    }
  }, [someChecked]);

  return (
    <Formik
      enableReinitialize
      initialValues={formData}
      validationSchema={null}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <ModalForm
          modal={modal}
          onClose={onClose}
          onSubmit={handleSubmit}
          type={modal.type}
          title={t('role')}
          disabled={isSubmitting || loading}
          size="lg"
        >
          <Form noValidate>
            <FloatingLabel className="mb-3" label="Name">
              <Form.Control
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.name && !!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </FloatingLabel>

            {/* select all */}
            <Form.Check
              type="checkbox"
              id="select-all-permissions"
              label="Select all permissions"
              checked={allChecked}
              onChange={e => handleToggleAll(e.currentTarget.checked)}
              ref={selectAllRef}
              className="mb-2"
              disabled={permissions.length === 0}
            />

            {permissions?.map(p => (
              <Form.Check
                key={p.id}
                type="checkbox"
                label={`${p.code} - ${p.description}`}
                checked={!!p.checked}
                onChange={() => handlePermissionChange(p.id as string)}
              />
            ))}
          </Form>
        </ModalForm>
      )}
    </Formik>
  );
};

export default RoleForm;
