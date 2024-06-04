import { Menu, Avatar, Layout } from "antd";
import Logo from "@assets/images/Logo.png";
import { AuthContext } from "@context/AuthContext";
import { useContext } from "react";

export default function SiderCustom({
  items,
}) {

  const { Sider } = Layout;
  const { Auth } = useContext(AuthContext);

  return (
    <Sider
      className=" rounded-3xl mt-2  bg-cbtisCOLOR "

      style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
    >
      <div className=" flex flex-col  mt-10 items-center  justify-center p-4">
        <div className="border-2 border-white rounded-full p-[0.1vh]">
          <Avatar src={Logo} size={70} />
        </div>
        <span className="text-white text-lg mt-5 font-semibold text-center">Josias Dominguez</span>
        <span className="text-white text-xs mt-1 font-semibold text-center">Jefe de Software</span>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['3']} items={items} className="mt-5 " />
    </Sider>
  );
}
