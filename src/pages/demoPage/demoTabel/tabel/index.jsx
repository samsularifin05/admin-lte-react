import { React, Button, TabelMaster, Row, Col } from "components";
const DataTabel = (props) => {
  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username"
    },
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name"
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name"
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      align: "center",
      hidden: true,
      render: (cell, row) => {
        return (
          <Row className={`text-center`}>
            <Col size="12" className="mr-3 text-center">
              <Button type="button" color="danger" icon="fa-trash" /> &nbsp;
              <Button type="button" color="info" icon="fa-edit" />
            </Col>
          </Row>
        );
      }
    }
  ];

  let data = [
    {
      username: "samsularifin05",
      first_name: "Samsul",
      last_name: "Arifin"
    },
    {
      username: "andra02",
      first_name: "Andra",
      last_name: "Sudrajat"
    }
  ];
  return (
    <TabelMaster
      createData={false}
      rowKey="username"
      columns={columns}
      dataSource={data}
    />
  );
};

export default DataTabel;
