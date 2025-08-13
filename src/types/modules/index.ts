export interface TAlert {
  type: 'SUCCESS' | 'ERROR' | 'WARNING';
  message: string | React.ReactNode;
  timer?: number | null;
}

export interface TFilter {
  page: number;
  limit: number;
  search?: string;
}

export interface TMeta {
  page: number;
  total_rows: number;
  limit: number;
}

export interface TReactOption {
  id?: number;
  label: string;
  label_alt?: string;
  value?: string | null | number;
  code?: string | null;
  options?: TReactOption[];
  level?: number | null;
  isParent?: boolean;
  parent_id?: number | null;
  isDisabled?: boolean;
  new_form?: boolean | number;
  default?: boolean | number;
}

export interface TReactOptionGroup {
  value?: string | null | number;
  label: string;
  options?: TReactOptionGroup[];
  level?: number | null;
}

export type TLabelValuePair = { label: string; value: string };

export interface TValidationError {
  show: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any;
  onClose?: () => void;
}

export interface TLoader {
  list?: boolean;
  form?: boolean;
}
