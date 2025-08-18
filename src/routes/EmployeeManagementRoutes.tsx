import { RouteObject } from 'react-router-dom';
import MainLayoutProvider from '../providers/MainLayoutProvider';
import AuthGuard from '../utils/route-guard/AuthGuard';
import MainLayout from '../layouts/MainLayout';
import { lazy, Suspense } from 'react';
import PhoenixLoader from '../components/common/PhoenixLoader';

const OnboardingPage = lazy(
  () => import('pages/employee-management/onboarding/index')
);
const OnboardingAccountCreationPage = lazy(
  () => import('@/pages/employee-management/onboarding/account-creation')
);
const OnboardingBasicInformationPage = lazy(
  () => import('pages/employee-management/onboarding/basic-information')
);
const OnboardingFamilyAndEmergencyContactsPage = lazy(
  () =>
    import('pages/employee-management/onboarding/family-and-emergency-contacts')
);
const OnboardingExperienceAndEducationPage = lazy(
  () => import('pages/employee-management/onboarding/experience-and-education')
);
const OnboardingBankAndPayrollInformationPage = lazy(
  () =>
    import('pages/employee-management/onboarding/bank-and-payroll-information')
);
const OnboardingAdditionalInformationPage = lazy(
  () => import('pages/employee-management/onboarding/additional-information')
);
const OnboardingDocumentsAndAgreementsPage = lazy(
  () => import('pages/employee-management/onboarding/documents-and-agreements')
);
const OnboardingReviewAndSubmitPage = lazy(
  () => import('pages/employee-management/onboarding/review-and-submit')
);
const OnboardingDetailPage = lazy(
  () => import('pages/employee-management/onboarding/detail')
);

const EmployeeManagementRoutes: RouteObject = {
  path: '/employee-management',
  element: (
    <MainLayoutProvider>
      <AuthGuard>
        <MainLayout />
      </AuthGuard>
    </MainLayoutProvider>
  ),
  children: [
    {
      path: 'onboarding',
      index: true,
      element: (
        <Suspense fallback={<PhoenixLoader />}>
          <OnboardingPage />
        </Suspense>
      )
    },
    {
      path: 'onboarding/account-creation',
      element: (
        <Suspense fallback={<PhoenixLoader />}>
          <OnboardingAccountCreationPage />
        </Suspense>
      )
    },
    {
      path: 'onboarding/basic-information/:employeeId',
      element: (
        <Suspense fallback={<PhoenixLoader />}>
          <OnboardingBasicInformationPage />
        </Suspense>
      )
    },
    {
      path: 'onboarding/family-and-emergency-contacts/:employeeId',
      element: (
        <Suspense fallback={<PhoenixLoader />}>
          <OnboardingFamilyAndEmergencyContactsPage />
        </Suspense>
      )
    },
    {
      path: 'onboarding/experience-and-education/:employeeId',
      element: (
        <Suspense fallback={<PhoenixLoader />}>
          <OnboardingExperienceAndEducationPage />
        </Suspense>
      )
    },
    {
      path: 'onboarding/bank-and-payroll-information/:employeeId',
      element: (
        <Suspense fallback={<PhoenixLoader />}>
          <OnboardingBankAndPayrollInformationPage />
        </Suspense>
      )
    },
    {
      path: 'onboarding/additional-information/:employeeId',
      element: (
        <Suspense fallback={<PhoenixLoader />}>
          <OnboardingAdditionalInformationPage />
        </Suspense>
      )
    },
    {
      path: 'onboarding/documents-and-agreements/:employeeId',
      element: (
        <Suspense fallback={<PhoenixLoader />}>
          <OnboardingDocumentsAndAgreementsPage />
        </Suspense>
      )
    },
    {
      path: 'onboarding/review-and-submit/:employeeId',
      element: (
        <Suspense fallback={<PhoenixLoader />}>
          <OnboardingReviewAndSubmitPage />
        </Suspense>
      )
    },
    {
      path: 'onboarding/detail/:employeeId',
      element: (
        <Suspense fallback={<PhoenixLoader />}>
          <OnboardingDetailPage />
        </Suspense>
      )
    }
  ]
};

export default EmployeeManagementRoutes;
