export interface TOnboardingStage {
  label: string;
  value: string;
  icon?: JSX.Element;
}

export interface TOnboardingCompleted {
  id?: string;
  stage?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}
