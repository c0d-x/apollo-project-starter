require('jest-fetch-mock').enableMocks();
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(`${__dirname}./../.env.test`) });
