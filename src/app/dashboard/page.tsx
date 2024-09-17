"use server";
import AsideBar from "@/components/aside-bar-dashboard";
import FormDashboard from "@/components/form-dashboard";

const Dashboard: React.FC = () => {
  return (
    <section className="flex justify-between p-4">
      <AsideBar />
      <FormDashboard />
    </section>
  );
};

export default Dashboard;
