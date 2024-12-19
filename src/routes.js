/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />, // Example component
  },
  {
    type: "collapse",
    name: "Partner Sites",
    key: "partner-sites",
    icon: <Icon fontSize="small">store</Icon>,
    route: "/partner-sites",
    component: null, // Temporarily not defined
  },
  {
    type: "collapse",
    name: "Orders",
    key: "orders",
    icon: <Icon fontSize="small">shopping_cart</Icon>,
    route: "/orders",
    component: null, // Temporarily not defined
  },
  {
    type: "collapse",
    name: "Incomplete Orders",
    key: "incomplete-orders",
    icon: <Icon fontSize="small">assignment_late</Icon>,
    route: "/incomplete-orders",
    component: null, // Temporarily not defined
  },
  {
    type: "collapse",
    name: "Produce",
    key: "produce",
    icon: <Icon fontSize="small">local_grocery_store</Icon>,
    route: "/produce",
    component: null, // Temporarily not defined
  },
  {
    type: "collapse",
    name: "Supplier",
    key: "supplier",
    icon: <Icon fontSize="small">inventory</Icon>,
    route: "/supplier",
    component: null, // Temporarily not defined
  },
  {
    type: "collapse",
    name: "Customers",
    key: "customers",
    icon: <Icon fontSize="small">group</Icon>,
    route: "/customers",
    component: null, // Temporarily not defined
  },
  {
    type: "collapse",
    name: "Funders",
    key: "funders",
    icon: <Icon fontSize="small">people_alt</Icon>,
    route: "/funders",
    component: null, // Temporarily not defined
  },
  {
    type: "collapse",
    name: "Unpaid Preorders",
    key: "unpaid-preorders",
    icon: <Icon fontSize="small">credit_card_off</Icon>,
    route: "/unpaid-preorders",
    component: null, // Temporarily not defined
  },
  {
    type: "collapse",
    name: "Calendar",
    key: "calendar",
    icon: <Icon fontSize="small">calendar_today</Icon>,
    route: "/calendar",
    component: null, // Temporarily not defined
  },
  {
    type: "collapse",
    name: "Personnel / Drivers",
    key: "personnel-drivers",
    icon: <Icon fontSize="small">engineering</Icon>,
    route: "/personnel-drivers",
    component: null, // Temporarily not defined
  },
  {
    type: "collapse",
    name: "Driver Delivery",
    key: "driver-delivery",
    icon: <Icon fontSize="small">local_shipping</Icon>,
    route: "/driver-delivery",
    component: null, // Temporarily not defined
  },
  {
    type: "collapse",
    name: "Funds",
    key: "funds",
    icon: <Icon fontSize="small">attach_money</Icon>,
    route: "/funds",
    component: null, // Temporarily not defined
  },
  {
    type: "collapse",
    name: "Empty Box Management",
    key: "empty-box-management",
    icon: <Icon fontSize="small">inventory_2</Icon>,
    route: "/empty-box-management",
    component: null, // Temporarily not defined
  },
];

export default routes;
