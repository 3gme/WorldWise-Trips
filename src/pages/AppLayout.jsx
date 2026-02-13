import Map from "../Components/Map";
import Sidebar from "../Components/SideBar";
import User from "../Components/User";
import { useAuth } from "../context/FakeAuthContext";

import styles from "./AppLayout.module.css";

function AppLayout() {
  const { isAuthenticated } = useAuth();
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      {isAuthenticated && <User />}
    </div>
  );
}

export default AppLayout;
