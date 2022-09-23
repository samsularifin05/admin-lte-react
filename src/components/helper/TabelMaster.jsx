import React, { useEffect, useState } from "react";
import { SearchTableInput, Table } from "ant-table-extensions";
import { useDispatch, useSelector } from "react-redux";
import { selectorUtility, utilityAction } from "reduxStore";
import { Button, Col, Row } from "components";

let TabelMaster = (props) => {
  const { dataSource, columns, rowKey, totalPage } = props;

  const loading = useSelector(selectorUtility.loading)?.tabel;
  const dispatch = useDispatch();
  const [searchDataSource, setSearchDataSource] = useState(
    dataSource 
  );

  useEffect(() => {
    setSearchDataSource(dataSource);
  }, [dataSource]);

  const tableProps = {
    loading
  };

  return (
    <Row className="row">
      <Col size="4">
        <SearchTableInput
          columns={columns}
          dataSource={dataSource} 
          setDataSource={setSearchDataSource}
          inputProps={{
            placeholder: "Search Data..."
          }}
        />
      </Col>
      {props.createData && (
        <Col size="8" className="text-right btn-block">
          <Button
            type="button"
            title="Tambah Data"
            onClick={() =>
              dispatch(
                utilityAction.modalShow({
                  isModalShow: true,
                  isEdit: false,
                  data: []
                })
              )
            }
            color="primary"
          />
        </Col>
      )}
      <Col size="12" className="mt-3">
        <Table
          {...tableProps}
          pagination={{
            total: totalPage || 0 // total count returned from backend
          }}
          columns={columns}
          dataSource={searchDataSource || []}
          rowKey={rowKey}
          onChange={props.onChange}
        />
      </Col>
    </Row>
  );
};

export default TabelMaster;
