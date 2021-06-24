'use strict';

export{};
let rootDir: string = process.cwd() + '\\';
let envName: string = (process.env.NODE_ENV || 'development');
export const configTemplate: any = require('./_' + envName); // default to './_development'

configTemplate.appVars = (configTemplate.appVars || {});
configTemplate.appVars['envName'] = envName;
configTemplate.appVars['rootDir'] = rootDir;
configTemplate.appVars['setupPwd'] = 'theP0peW3arsLoafer$!';  // this should be constant per environment
configTemplate.appVars['appName'] = 'TrueEvents';
configTemplate.appVars['chatName'] = 'TrueChat';
configTemplate.appVars['teCompanyName'] = 'TrueEvents';
configTemplate.appVars['teFromEmail'] = 'No Reply <no-reply@trueeevents.app>';

