import React from 'react';
import { TModalProps } from '@/types/modules';
import { Form } from 'react-bootstrap';
import { TPermission } from '@/types/modules/user-management/permission';
import { useTranslation } from 'react-i18next';

interface TPermissionForm extends TPermission {
  checked?: boolean;
}

const toTitle = (s?: string) =>
  (s || '').replace(/[_.-]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

const RolePermissionSection = ({
  group,
  items,
  onToggleSection,
  onToggleItem,
  modal
}: {
  group: string;
  items: TPermissionForm[];
  onToggleSection: (group: string, checked: boolean) => void;
  onToggleItem: (id: string) => void;
  modal: TModalProps;
}) => {
  // React Hooks
  const { t } = useTranslation();

  // Use States
  const sectionAllChecked =
    items?.length > 0 && items?.every(p => !!p?.checked);
  const sectionSomeChecked =
    items?.some(p => !!p?.checked) && !sectionAllChecked;
  const sectionRef = React.useRef<HTMLInputElement | null>(null);

  // Use Effects
  React.useEffect(() => {
    if (sectionRef.current)
      sectionRef.current.indeterminate = sectionSomeChecked;
  }, [sectionSomeChecked]);

  return (
    <div className="mb-3 pb-2">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <div className="fw-semibold">{toTitle(group)}</div>
        <Form.Check
          disabled={modal?.type === 'view'}
          type="checkbox"
          id={`select-all-${group}`}
          label={t('select_all')}
          checked={sectionAllChecked}
          ref={sectionRef}
          onChange={e => onToggleSection(group, e?.currentTarget?.checked)}
        />
      </div>

      {items?.map(p => {
        const [, action = p?.code] = (p?.code || '')?.split('.') || [];
        return (
          <Form.Check
            disabled={modal?.type === 'view'}
            key={p?.id}
            type="checkbox"
            label={`${toTitle(action)} — ${p?.description}`}
            checked={!!p?.checked}
            onChange={() => onToggleItem(p?.id as string)}
          />
        );
      })}
    </div>
  );
};

export default RolePermissionSection;
