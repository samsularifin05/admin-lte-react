import { Card, PanelContent, React } from "components";
import DataTabel from "./tabel";
const DemoTabel = () => {
  return (
    <PanelContent
      title="Master DemoTabel"
      menu="Data Master"
      submenu="DemoTabel"
      headerContent
    >
      <Card title="Data DemoTabel">
        <DataTabel />
      </Card>
    </PanelContent>
  );
};

export default DemoTabel;
