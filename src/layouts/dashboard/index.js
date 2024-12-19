import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"; // Import Typography
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { CreditCard } from "@mui/icons-material";
import PieChart from "examples/Charts/PieChart";
import pieChartData from "./data/pieChartData";
import pieData from "./data/pieChartData";
import { Box } from "@mui/material";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const iconProps = {
    color: "success",
    component: "pie_chart",
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box
        style={{
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "#f9f9f9",
          padding: "4px 8px",
          marginBottom: "10px",
          borderRadius: "8px",
          boxShadow: "0 0px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography style={{ fontWeight: "bold", fontSize: "15px", marginRight: "4px" }}>
          Box Date:
        </Typography>
        <Typography style={{ fontSize: "15px", color: "#555" }}>Dec 19, 2024</Typography>
      </Box>
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="attach_money"
                title="Cash"
                count={`$${210}`}
                percentage={{
                  color: "success",
                  amount: "Small Box",
                  label: (
                    <div style={{ display: "flex", alignItems: "center", gap: "55px" }}>
                      <span style={{ fontWeight: "bold" }}></span>
                      <span>9</span>
                      <span>$210</span>
                    </div>
                  ),
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="flatware"
                title="SNAP"
                count={`$${880}`}
                percentage={{
                  color: "success",
                  amount: "Small Box",
                  label: (
                    <div style={{ display: "flex", alignItems: "center", gap: "55px" }}>
                      <span style={{ fontWeight: "bold" }}></span>
                      <span>88</span>
                      <span>$880</span>
                    </div>
                  ),
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon={"credit_card"}
                title="Credit Card"
                count={`$${720}`}
                percentage={{
                  color: "success",
                  amount: "Small Box",
                  label: (
                    <div style={{ display: "flex", alignItems: "center", gap: "55px" }}>
                      <span style={{ fontWeight: "bold" }}></span>
                      <span>72</span>
                      <span>$720</span>
                    </div>
                  ),
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="grain"
                title="Others"
                count={`$${640}`}
                percentage={{
                  color: "success",
                  amount: "Small Box-invoiced",
                  label: (
                    <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
                      <span style={{ fontWeight: "bold" }}></span>
                      <span>6</span>
                      <span>$640</span>
                    </div>
                  ),
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Total Orders"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                {/* <ReportsBarChart
                  color="info"
                  title="Order by Partner Site"
                  description="Last Campaign Performance"
                  date="campaign sent 2 days ago"
                  chart={reportsBarChartData}
                /> */}
                <PieChart
                  icon={iconProps}
                  title="Sales Distribution"
                  description="Distribution of sales across different regions."
                  chart={pieData}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
