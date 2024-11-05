import Layout from "./hoc/Layout/Layout";
import {renderRoutes} from 'react-router-config'
const Root = ({ route }) => (
    <div>
      <Layout>
      {/* child routes won't render without this */}
      {renderRoutes(route.routes)}
      </Layout>
    </div>
  );

  export default Root