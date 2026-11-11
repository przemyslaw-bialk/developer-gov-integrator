type Props = {
  firstName?: string;
};

const AdminSidebarUserGreetings = ({ firstName }: Props) => {
  return <h2>Witaj {firstName}!</h2>;
};

export default AdminSidebarUserGreetings;
