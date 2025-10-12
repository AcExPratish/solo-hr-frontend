import React from 'react';
import { Formik } from 'formik';
import { Form, FloatingLabel } from 'react-bootstrap';
import ModalForm from '../../../common/custom/ModalForm';
import { TModalProps } from '@/types/modules';
import { TRole } from '@/types/modules/user-management/role';
import { TPermission } from '@/types/modules/user-management/permission';
import usePermissionHook from '@/hooks/modules/user-management/usePermissionHook';
import { useTranslation } from 'react-i18next';
import RolePermissionSection from '../RolePermissionSection';
import { RoleSchema } from '@/validation/user-management/RoleSchema';

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

  // Use State
  const isView = modal?.type === 'view';
  const [permissions, setPermissions] = React.useState<TPermissionForm[]>([]);
  const selectAllRef = React.useRef<HTMLInputElement | null>(null);

  // Handlers
  const allChecked =
    permissions?.length > 0 && permissions?.every(p => !!p?.checked);
  const someChecked = permissions?.some(p => !!p?.checked) && !allChecked;

  const handlePermissionChange = (id: string) => {
    setPermissions(
      prev =>
        prev?.map(p => (p?.id === id ? { ...p, checked: !p?.checked } : p))
    );
  };

  const handleToggleAll = (checked: boolean) => {
    setPermissions(prev => prev?.map(p => ({ ...p, checked })));
  };

  const handleToggleSection = (group: string, checked: boolean) => {
    setPermissions(
      prev =>
        prev?.map(p =>
          (p?.code || '')?.startsWith(`${group}.`) ? { ...p, checked } : p
        )
    );
  };

  // On Submit
  const handleSubmit = (values: TRole) => {
    const selectedIds = permissions?.filter(p => p?.checked)?.map(p => p?.id);
    onSubmit({
      ...values,
      id: formData.id,
      name: values.name,
      permissions: selectedIds as unknown as TPermission[]
    });
  };

  // Use Memo
  const groupedPermissions = React.useMemo(() => {
    const groups: Record<string, TPermissionForm[]> = {};
    (permissions || []).forEach(p => {
      const [group = 'Other'] = (p?.code || '').split('.');
      if (!groups[group]) groups[group] = [];
      groups[group]?.push(p);
    });
    Object.keys(groups).forEach(k => {
      groups[k]?.sort((a, b) => (a?.code || '')?.localeCompare(b?.code || ''));
    });
    return Object.fromEntries(
      Object.entries(groups)?.sort(([a], [b]) => a?.localeCompare(b))
    );
  }, [permissions]);

  // Use Effects
  React.useEffect(() => {
    const assignedIds = formData?.permissions?.map(p => p?.id) || [];
    const base = (allPermissions || [])?.map(p => ({
      ...p,
      checked: formData?.is_superuser ? true : assignedIds?.includes(p?.id)
    }));
    setPermissions(base);
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
      validationSchema={RoleSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm
      }) => (
        <ModalForm
          modal={modal}
          onClose={() => {
            resetForm();
            onClose();
          }}
          onSubmit={handleSubmit}
          type={modal?.type}
          title={t('role')}
          disabled={isView || loading}
          size="lg"
        >
          <Form noValidate>
            <FloatingLabel className="mb-3" label={t('name')}>
              <Form.Control
                disabled={isView || !!values?.id}
                id="name"
                name="name"
                type="text"
                value={values?.name || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`form-control form-icon-input ${
                  touched.name && errors.name ? 'is-invalid' : ''
                }`}
              />
              {touched.name && errors.name && (
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>

            <Form.Check
              type="checkbox"
              id="select-all-permissions"
              label={t('select_all_permissions')}
              checked={allChecked}
              onChange={e => handleToggleAll(e.currentTarget.checked)}
              ref={selectAllRef}
              className="mb-3"
              disabled={permissions?.length === 0 || isView}
            />

            {Object?.entries(groupedPermissions)?.map(
              ([group, items], index: number) => (
                <RolePermissionSection
                  key={index}
                  group={group || ''}
                  items={items || []}
                  onToggleSection={handleToggleSection}
                  onToggleItem={handlePermissionChange}
                  modal={modal}
                />
              )
            )}
          </Form>
        </ModalForm>
      )}
    </Formik>
  );
};

export default RoleForm;
