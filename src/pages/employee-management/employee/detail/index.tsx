import { useParams } from 'react-router-dom';

const EmployeesDetailPage = () => {
  const { id } = useParams();

  return <div>EmployeesDetailPage {id}</div>;
};

export default EmployeesDetailPage;
