import React from "react";
import { Table } from "antd";

const CustomTable = ({ columns, data }) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      showSorterTooltip={{
        target: "sorter-icon",
      }}
      pagination={{
        pageSize: 10,
      }}
    />
  );
};

export default CustomTable;
