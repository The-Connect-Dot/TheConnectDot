import React from "react";
import {
    DollarCircleOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Dashboard</Typography.Title>
            <Space direction="horizontal">
                <DashboardCard
                    icon={
                        <UserOutlined
                            style={{
                                color: "purple",
                                backgroundColor: "rgba(0,255,255,0.25)",
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8,
                            }}
                        />
                    }
                    title={"No of Mentees"}
                    value={orders}
                />
                <DashboardCard
                    icon={
                        <UserOutlined
                            style={{
                                color: "purple",
                                backgroundColor: "rgba(0,255,255,0.25)",
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8,
                            }}
                        />
                    }
                    title={"No of Mentors"}
                    value={inventory}
                />
                <DashboardCard
                    icon={
                        <UserOutlined
                            style={{
                                color: "purple",
                                backgroundColor: "rgba(0,255,255,0.25)",
                                borderRadius: 20,
                                fontSize: 24,
                                padding: 8,
                            }}
                        />
                    }
                    title={"Mentees joined this month"}
                    value={customers}
                />
            </Space>
            <Space>
                <RecentOrders />
                <DashboardChart />
            </Space>
        </Space>
    );
}

function DashboardCard({ title, value, icon }) {
    return (
        <Card>
            <Space direction="horizontal">
                {icon}
                <Statistic title={title} value={value} />
            </Space>
        </Card>
    );
}
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
                return cart.discountedTotal;
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
};

export default Dashboardpage;