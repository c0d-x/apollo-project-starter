import { AppModules } from './modules';

// Get typeDefs from top module, and export it.
export default AppModules.forRoot({}).schemaAsync;
