"use server";
import AsideBar from "@/components/dashboard/aside-bar-dashboard";
import FormDashboard from "@/components/dashboard/form-dashboard";

const Dashboard: React.FC = async () => {
  return (
    <section className="flex justify-between p-4">
      <AsideBar />
      <FormDashboard />
    </section>
  );
};

export default Dashboard;
