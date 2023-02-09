import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
// import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";


import DashboardPageLayout from "../../pages/dashboard/DashboardPageLayout";
import HomePage from "../../pages/home/HomePage";
import DefaultPage from "../../pages/dashboard/DefaultPage";
import DashboardIndex from "../../pages/dashboard/DashboardIndex";
import ChangelogPage from "../../pages/changelog/ChangelogPage";
import AnalyticsPage from "../../pages/dashboard/AnalyticsPage";
import SaasPage from "../../pages/dashboard/SaasPage";
import ComponentPageLayout from "../../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AlertPage from "../../pages/component/AlertPage";
import ButtonPage from "../../pages/component/ButtonPage";
import InstallationPage from "../../pages/installation/InstallationPage";
import DocumentationPage from "../../pages/documentation/DocumentationPage";

import { RouteType } from "../../../src/routes/config";
import path from "path";


const Sidebar = () => {
  const [appRoutes, setappRoutes] = useState<RouteType[]>([])
  useEffect(() => {
    const url = " http://localhost:5000/windowlist";
  
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            const array1: RouteType[]=json
             array1.forEach((element) => 
    {
   
   
  element.path='/dashboard'
  element.element=<DashboardPageLayout />
  element.state= "dashboard"
 
  element.sidebarProps= {
    displayText: `window ${element.windo_no}`,
    icon: <DashboardOutlinedIcon />
  }
  element.child= [
   {
    index:true,
     element: <DashboardIndex />,
        state: "dashboard.index",
        windo_no: element.windo_no
   },
   {

    path: `/dashboard/default/${element.windo_no}`,
        element: <DefaultPage  size={100}/>,
        state: "dashboard.default",
        windo_no: element.windo_no,
        sidebarProps: {
          displayText: "Tokens"
        },
      },

 {
        path: "/dashboard/analytics",
        element: <AnalyticsPage />,
        state: "dashboard.analytics",
        windo_no: element.windo_no,
        sidebarProps: {
          displayText: "Services"
        }
      },
 {
        path: "/dashboard/saas",
        element: <SaasPage />,
        state: "dashboard.saas",
        windo_no: element.windo_no,

        sidebarProps: {
          displayText: "time"
        }
      }

  ]
});
       array1.push(  {
         index: true,
         element: <HomePage />,
         state: "home",
         windo_no: 0
       })
         console.log(array1)
            setappRoutes(array1);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();
}, []);


  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color
        }
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
          >
            <Avatar src={assets.images.logo} />
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;