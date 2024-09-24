"use server";
import { Button } from "../ui/button";
import { ItemsSideBar } from "@/utils/items-sideBar";
import LogoutButton from "../ui/logout-button";

const AsideBar: React.FC = () => {
  return (
    <aside className="flex flex-col max-w-52 w-full border-2 p-6">
      <ul>
        {ItemsSideBar.map((item, index) => (
          <Button key={index} txt={item.txt} />
        ))}
      </ul>
      <LogoutButton />
    </aside>
  );
};
export default AsideBar;
