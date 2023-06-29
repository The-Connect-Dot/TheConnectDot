import "./Dashboard.css";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Card, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { Typography, Box, Grid } from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

const getInventory = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

const getCustomers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};
const getComments = () => {
  return fetch("https://dummyjson.com/comments").then((res) => res.json());
};

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recent Analysis</Typography.Text>
      <Table
        columns={[
          {
            title: "Company",
            dataIndex: "title",
          },
          {
            title: "Applied",
            dataIndex: "quantity",
          },
          {
            title: "Accepted",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

function DashboardChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return (cart.discountedTotal/100).toFixed(2);
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Mentees",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };

      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Fields",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={reveneuData} />
    </Card>
  );
}

const Dashboardpage = () => {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <div className="dashboard-box">
      {/* <div className="dashboard-title">Dashboard</div> */}
      <Box className="first-container" style={{ marginTop: "100px" }}>
        <Typography variant="h3">Dashboard</Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item key={0} xs={12} sm={6} md={4}>
            <DashboardCard
              icon={
                <UserOutlined
                  style={{
                    color: "purple",
                    backgroundColor: "rgba(0,255,255,0.25)",
                    borderRadius: 20,
                    fontSize: 18,
                    padding: 8,
                  }}
                />
              }
              title={"No of Mentees"}
              value={orders}
            />
          </Grid>
          <Grid item key={1} xs={12} sm={6} md={4}>
            <DashboardCard
              icon={
                <UserOutlined
                  style={{
                    color: "purple",
                    backgroundColor: "rgba(0,255,255,0.25)",
                    borderRadius: 20,
                    fontSize: 18,
                    padding: 8,
                  }}
                />
              }
              title={"No of Mentors"}
              value={inventory}
            />
          </Grid>
          <Grid item key={2} xs={12} sm={6} md={4}>
            <DashboardCard
              icon={
                <UserOutlined
                  style={{
                    color: "purple",
                    backgroundColor: "rgba(0,255,255,0.25)",
                    borderRadius: 20,
                    fontSize: 18,
                    padding: 8,
                  }}
                />
              }
              title={"Mentees joined this month"}
              value={customers}
            />
          </Grid>
        </Grid>
      </Box>
      <Space className="second-container">
        {/* <RecentOrders /> */}
        <DashboardChart />
      </Space>
    </div>
  );
};
function DashboardCard({ title, value, icon }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
      borderRadius={8}
      boxShadow={3}
      bgcolor="transparent"
    >
      <Box display="flex" alignItems="center" mb={1} color="purple">
        {icon}
        <Typography variant="h8" fontWeight="bold" ml={1}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body1" mt={1}>
        {value}
      </Typography>
    </Box>
  );
}

export default Dashboardpage;
