import {
  PlusSquareTwoTone,
  PlusOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Select, Table } from "antd";
import { useState } from "react";
import Inputs from "../../components/Input";
import { biologicalHazard } from "../../constants/biologicalHazard";
import { intervalData } from "../../constants/intervalData";
import { processData } from "../../constants/processData";

const biologicalHazardWithId = biologicalHazard.map((item, index) => {
  return { ...item, id: index, isNew: false };
});

const BioHazardTable = () => {
  const [formData, setFormData] = useState({
    min_units: "",
    max_units: "",
    duration: "",
  });
  const [data, setData] = useState(biologicalHazardWithId);
  const [form] = Form.useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("target", name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (values) => {
    // Make API call to submit form data
    alert("Pathogens Controlled");
  };

  // Add row
  const handleAddRow = (index, record) => {
    const newData = [...data];
    newData.splice(index + 1, 0, {
      CategoryTitle: record.CategoryTitle,
      RecipeSubCategoryTitle: record.RecipeSubCategoryTitle,
      BiologicalHazardTitle: record.BiologicalHazardTitle,
      IngredientName: record.IngredientName,
      id: newData.length + 1,
      isNew: true,
    });
    setData(newData);
  };

  // Delete row
  const handleDeleteRow = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const columns = [
    {
      title: "Ingredient Name",
      dataIndex: "IngredientName",
      key: "IngredientName",
      render: (value, record, index) => {
        if (index > 0 && value === data[index - 1].IngredientName) {
          return "";
        }
        return value;
      },
    },
    {
      title: "Category",
      dataIndex: "CategoryTitle",
      key: "CategoryTitle",
      render: (value, record, index) => {
        if (index > 0 && value === data[index - 1].CategoryTitle) {
          return "";
        }
        return value;
      },
    },
    {
      title: "Sub Category",
      dataIndex: "RecipeSubCategoryTitle",
      key: "RecipeSubCategoryTitle",
      render: (value, record, index) => {
        if (index > 0 && value === data[index - 1].RecipeSubCategoryTitle) {
          return "";
        }
        return value;
      },
    },
    {
      title: "Biological hazard",
      dataIndex: "BiologicalHazardTitle",
      key: "BiologicalHazardTitle",
      render: (value, record, index) => {
        if (index > 0 && value === data[index - 1].BiologicalHazardTitle) {
          return "";
        }
        return value;
      },
    },
    {
      title: "Hazard addressed by supplier",
      dataIndex: "address_hazard",
      render: () => (
        <a>
          {" "}
          <Checkbox />{" "}
        </a>
      ),
    },
    {
      title: "",
      dataIndex: "",
      render: (text, record, index) => (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button onClick={() => handleAddRow(index, record)}>
            <PlusOutlined />
          </Button>
          {record.isNew ? (
            <Button type="danger" onClick={() => handleDeleteRow(index)}>
              <DeleteFilled />
            </Button>
          ) : (
            ""
          )}
        </div>
      ),
    },
    {
      title: "Process",
      dataIndex: "process",
      render: () => (
        <div style={{ display: "block" }}>
          <div>
            Process &nbsp; <PlusSquareTwoTone />{" "}
          </div>
          <Select
            defaultValue="Select"
            style={{
              width: 100,
            }}
            onChange={handleChange}
            options={processData}
          />
        </div>
      ),
    },
    {
      title: "Min Units",
      dataIndex: "min_units",
      render: (value) => (
        <div style={{ display: "flex" }}>
          {" "}
          <Inputs name="min_units" value={value} handleChange={handleChange} />
          <div style={{ margin: "auto 3px" }}> °F</div>
        </div>
      ),
    },
    {
      title: "Max Units",
      dataIndex: "max_units",
      render: (value) => (
        <div style={{ display: "flex" }}>
          {" "}
          <Inputs name="max_units" value={value} handleChange={handleChange} />
          <div style={{ margin: "auto 3px" }}> °F</div>
        </div>
      ),
    },
    {
      title: "Duration",
      dataIndex: "duration",
      render: (value) => (
        <div style={{ display: "flex" }}>
          {" "}
          <Inputs name="duration" value={value} handleChange={handleChange} />
        </div>
      ),
    },
    {
      title: "Interval",
      dataIndex: "address",
      render: () => (
        <Select
          style={{
            width: 100,
          }}
          onChange={handleChange}
          options={intervalData}
        />
      ),
    },
    {
      title: "Analyze",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <Button onClick={() => form.submit()}>Analyze</Button>,
    },
  ];
  return (
    <div className="container">
      <Form form={form} onFinish={handleSubmit}>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: 1300 }}
          pagination={false}
          rowKey={(record) => record.id}
        />
      </Form>
    </div>
  );
};
export default BioHazardTable;
