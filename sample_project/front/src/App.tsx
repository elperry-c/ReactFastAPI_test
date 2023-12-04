import { BrowserRouter } from "react-router-dom";
import { PersistentDrawerLeft } from "./module/PageLayout";
import { SideMenu } from "./module/SideMenu";
import { MainContents } from "./module/MainContents";

const App = () => {
    return (
        <BrowserRouter>
            <PersistentDrawerLeft
                sideMenu={<SideMenu />}
                mainContent={<MainContents />}
            />
        </BrowserRouter>
    );
};

export default App;
