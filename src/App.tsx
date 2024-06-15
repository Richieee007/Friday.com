import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { RefineThemes, useNotificationProvider } from "@refinedev/antd";
import { Authenticated, ErrorComponent, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import routerProvider, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";

import { App as AntdApp, ConfigProvider } from "antd";
import {Home, ForgotPassword, Login, Register } from './pages';

// import { Layout } from "@/components";
// import { resources } from "@/config/resources";
import { authProvider, dataProvider, liveProvider } from "./providers";
// import {
//   CompanyCreatePage,
//   CompanyEditPage,
//   CompanyListPage,
//   DashboardPage,
//   LoginPage,
//   TasksCreatePage,
//   TasksEditPage,
//   TasksListPage,
// } from "@/routes";

import "@refinedev/antd/dist/reset.css";
import routerBindings from "@refinedev/react-router-v6";
import Layout from "./components/layout";
import { resources } from "./config/resources";
import CompanyList from "./pages/company/list";
import Create from "./pages/company/create";
import Edit from './pages/company/edit'
import TasksList from "./pages/tasks/list";
import TasksCreatePage from "./pages/tasks/create";
import TasksEditPage from "./pages/tasks/edit";

const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider theme={RefineThemes.Blue}>
        <AntdApp>
          <DevtoolsProvider>
            <Refine
             
              dataProvider={dataProvider}
              liveProvider={liveProvider}
              notificationProvider={useNotificationProvider}
              routerProvider={routerBindings}
              authProvider={authProvider}
              resources={resources}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                liveMode: "auto",
                useNewQueryKeys: true,
              }}
            >
              <Routes>
                
                
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                 <Route
                  element={
                    <Authenticated
                      key="authenticated-layout"
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                       <Layout>
                        <Outlet />
                      </Layout> 
                    </Authenticated>
                  }>
                    <Route index element={<Home />} />
                     <Route path="/companies"> 
                     <Route index element={<CompanyList />}/>
                     <Route path="new" element={<Create/>}/>
                     <Route path="edit/:id" element={<Edit/>}/>
                     </Route>
                     <Route path="/tasks" element={
                      
                      <TasksList>
                      <Outlet/>
                      </TasksList>
                    }> 
                    <Route path="new" element={<TasksCreatePage />} />
                    <Route path="edit/:id" element={<TasksEditPage />} /> 
                     </Route>
                     
                  
                   </Route>
              </Routes>
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </AntdApp>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;