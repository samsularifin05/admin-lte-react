import { PanelContent, React,useDispatch } from "components";
import { utilityAction } from "reduxStore";
const Kategori = () => {
  const dispatch = useDispatch()
  return <PanelContent title="Data Kategori">

    <button onClick={()=>dispatch(utilityAction.setProgres())}> 
        Login
    </button>
  </PanelContent>;
};

export default Kategori;
