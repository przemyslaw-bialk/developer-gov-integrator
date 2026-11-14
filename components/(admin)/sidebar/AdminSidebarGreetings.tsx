type Props = {
  firstName?: string;
};

const AdminSidebarUserGreetings = ({ firstName }: Props) => {
  return <h2 className="ml-2">Witaj {firstName}!</h2>;
};

export default AdminSidebarUserGreetings;
