import React from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectorUtility, utilityAction } from "reduxStore";

const ModalGlobal = (props) => {
  const { children, title } = props;
  const getModal = useSelector(selectorUtility.getModal);
  const dispatch = useDispatch();
  return (
    <Modal
      title={title}
      visible={getModal?.isModalShow}
      footer={null}
      onCancel={() =>
        dispatch(
          utilityAction.modalShow({
            isModalShow: false,
            isEdit: false,
            data: []
          })
        )
      }
    >
      {children}
    </Modal>
  );
};

export default ModalGlobal;
