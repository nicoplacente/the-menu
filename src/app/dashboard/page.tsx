"use server";
import { DynamicComponent } from "@/components/dashboard/dinamic-component";

const Dashboard: React.FC = async () => {
  return (
    <section>
      <DynamicComponent />
    </section>
  );
};

export default Dashboard;
