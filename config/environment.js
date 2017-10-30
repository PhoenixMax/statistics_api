/* jshint node: true */

module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'open-ethereum-pool',
        environment: environment,
        rootURL: '/',
        locationType: 'hash',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // API host and port
            ApiUrl: '//soil.daggerpool.com/',

            // HTTP mining endpoint
            HttpHost: 'http://soil-us01.daggerpool.com',
            HttpPort: 8888,            

            // Stratum mining endpoint
            StratumHost: 'soil-us01.daggerpool.com',
            StratumPort: 8008,

            StratumHost1: 'soil-uk01.daggerpool.com',
            StratumPort1: 8008,
            
            NicehashHost: 'soil-us01.daggerpool.com',
            NicehashPost: 8088,

            // Fee and payout details
            PoolFee: '0.5%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4000000000',
            
            //Current and Localization
            Currency: 'USD',
            CoinName: 'SOILcoin',
            CoinShortName: 'SOIL',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@daggerpool.com',
            SupportHelpdesk: 'http://helpdesk.daggerpool.com',
            WebsiteName: 'soil.daggerpool.com',
            
            //Coin Bases Settings
            ChainAddress : 'http://178.62.133.174:9001/#/address/',
	    TransactionAddress : 'http://178.62.133.174:9001/#/tx/',
            UncleAddress : 'http://178.62.133.174:9001/#/uncle/',
            BlockAddress : 'http://178.62.133.174:9001/#/block/',
            
            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'daggerpool_com',
            

            // For network hashrate (change for your favourite fork)
            BlockTime: 15


        }
    };

    if (environment === 'development') {
        /* Override ApiUrl just for development, while you are customizing
         frontend markup and css theme on your workstation.
         */
        ENV.APP.ApiUrl = 'https://eth.daggerpool.com/'
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {
        ENV.baseURL = '/ember-cli-twitter-feed/';
    }

    ENV.contentSecurityPolicy = {
        'script-src': [
            "'self'",
            'https://syndication.twitter.com',
			            'https://cdn.syndication.twimg.com',
            "'sha256-XnNQECY9o-nIv2Qgcd1A39YarwxTm10rhdzegH_JBxY='"],
        'style-src': [
            "'self'",
            'http://platform.twitter.com',
            "'sha256-zCvYlDs6LsUp0EqrJFjIGUiM_AG2fGlkNrzJ2YiBTG0='"],
        'img-src': [
            "'self'",
            'data:',
            'https://pbs.twimg.com',
            'https://syndication.twitter.com',
            'http://platform.twitter.com']
    };
    return ENV;
};