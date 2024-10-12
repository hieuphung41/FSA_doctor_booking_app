import React from "react";
import { Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";

const CustomBreadcrumb = ({ breadcrumbItems }) => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Breadcrumb>
      {breadcrumbItems.map((item, index) => (
        <Breadcrumb.Item key={index}>
          {item.path ? (
            <a onClick={() => handleClick(item.path)}>{item.title}</a>
          ) : (
            item.title
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
