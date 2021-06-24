'use strict';

export{};

const appVars: any = {
  ports: [3000],
  sessionSecret: '@xcal1b3r21!'
};

const mongoVars_AWS: any = {
  /* signed in with google acct preferences */
  dac_user: 'stagingUser',
  dac_pwd: 'LPlu1AxEb51Dw7tg',
  dbName_tier1: 'te_tier1',
  dbName_analytics: 'te_web_analytics',
  //cluster: 'ec2-3-250-162-94',
  //host: 'ip-172-31-42-224.eu-west-1.compute.internal',
  host: 'localhost',
  //host: 'ec2-3-250-162-94.eu-west-1.compute.amazonaws.com',
  //host: '10.0.153.159', // NAT private IP addr
  port: 27017,
  protocol: 'mongodb://',
  connectOpts: {
    connectTimeoutMS: 10000,
    socketTimeoutMS: 20000,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};

const mongoVars_AWS2: any = {
  dac_user: 'mongodb-staging-user',
  dac_pwd: '7WHoxZHR',
  /*iam_access_key_id: 'AKIAXFUANLVH6C6AKKHA',
  iam_secret_access_key: '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',*/
  dbName_tier1: 'te_tier1',
  dbName_analytics: 'te_web_analytics',
  protocol: 'mongodb://',
  host: 'localhost',
  //port: 27017,
  connectOpts: {
    connectTimeoutMS: 10000,
    socketTimeoutMS: 20000,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};

const mongoVars: any = {
  dac_user: 'mongodb-staging-user',
  dac_pwd: '7WHoxZHR',
  /*iam_access_key_id: 'AKIAXFUANLVH6C6AKKHA',
  iam_secret_access_key: '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',*/
  dbName_tier1: 'te_tier1',
  dbName_analytics: 'te_web_analytics',
  protocol: 'mongodb+srv://',
  host: 'cluster0.ixdkd.mongodb.net',
  //port: 27017,
  connectOpts: {
    connectTimeoutMS: 10000,
    socketTimeoutMS: 20000,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};  // atlas

const getMongoUri: any = (db: string) => {
  // mongodb+srv://<username>:<password>@cluster0.egwv6.mongodb.net:1234/<dbname>?retryWrites=true&w=majority
  let rtn: string = exports.mongoVars.protocol;
      rtn += exports.mongoVars.dac_user + ':';
      rtn += exports.mongoVars.dac_pwd + '@';
      /*rtn += exports.mongoVars.iam_access_key_id + ':';
      rtn += exports.mongoVars.iam_secret_access_key + '@';
      rtn += exports.mongoVars.host + '/';*/
      rtn += exports.mongoVars.host + '/';
      //rtn += exports.mongoVars.port + '/';
      rtn += exports.getMongoDbName(db);  // returns string
      rtn += '?retryWrites=true&w=majority';  // qs
      //rtn += '?authSource=%24external&authMechanism=MONGODB-AWS&retryWrites=true&w=majority';
  return rtn;
};

const getMongoDbName: any = (db: string) => {
  let rtn: string = '';
  switch( db ){
    case 'tier1':
      rtn = mongoVars.dbName_tier1;
    break;
    case 'analytics':
      rtn = mongoVars.dbName_analytics;
    break;
    default:
      rtn = db; // dynamic client db name
    break;
  }
  return rtn;
};

const redisVars: any = {
  dbName: 'trueevents-staging',
  //connectTimeout: 10000,
  host: 'redis-staging.32ptyh.ng.0001.euw1.cache.amazonaws.com',
  port: 6379,
  protocol: 'redis://',
  user_id: 'redis-user-staging',
  user_pwd: 'ASFexsNE3AEjNu3M'
};

const redisVars_OLD: any = {
  dbName: 'TrueEvents-Development',
  host: 'redis-14965.c243.eu-west-1-3.ec2.cloud.redislabs.com',
  port: 14965,
  protocol: 'redis://',
  email: 'wendell@trueevents.live',
  password: 'zDGqVGg3ZzDHXCBD5kSXIQDeLAi0xjsB'
};

const getRedisUri: any = () => {
  let rtn: string = exports.redisVars.protocol;
      rtn += exports.redisVars.user_id + ':';
      rtn += exports.redisVars.user_pwd + '@';
      rtn += exports.redisVars.host + ':';
      rtn += exports.redisVars.port;
  return rtn;
};

const getRedisUri_OLD: any = () => {
  let rtn: string = exports.redisVars.protocol;
      /*rtn += exports.redisVars.user_id + ':';
      rtn += exports.redisVars.user_pwd + '@';*/
      rtn += 'localhost' + ':';
      rtn += exports.redisVars.port;
  return rtn;
};

const awsVars: any = {
  userName: 'ec2-user',
  pasword: '@stag1ng3nv!',
  publicDns: 'ec2-3-250-162-94.eu-west-1.compute.amazonaws.com' // https://
};

const smtpVars: any = {
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '?',
    pass: '?'
  }
};

exports = module.exports = {
  appVars: appVars,
  mongoVars: mongoVars,
  redisVars: redisVars,
  getRedisUri: getRedisUri,
  awsVars: awsVars,
  getMongoUri: getMongoUri,
  getMongoDbName: getMongoDbName,
  smtpVars: smtpVars
};
