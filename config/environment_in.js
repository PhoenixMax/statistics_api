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
            ApiUrl: '//music.miningpoolindia.com/',

            // HTTP mining endpoint
            HttpHost: 'http://mc01.miningpoolindia.com',
            HttpPort: 6666,            

            // Stratum mining endpoint
            StratumHost: 'mc01.miningpoolindia.com',
            StratumPort: 6006,

            StratumHost1: 'mc02.miningpoolindia.com',
            StratumPort1: 6006,
            
            
            NicehashHost: 'mc01.miningpoolindia.com',
            NicehashPost: 6069,

            // Fee and payout details
            PoolFee: '0%',
            PayoutThreshold: '10',
            ShareDifficulty: '4000000000',
            
            //Current and Localization
            Currency: 'INR',
            CoinName: 'Music Coin',
            CoinShortName: 'MUSIC',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@miningpoolindia.com',
            SupportHelpdesk: 'http://helpdesk.miningpoolindia.com',
            WebsiteName: 'music.miningpoolindia.com',
            
              //Coin Bases Settings
            ChainAddress : 'https://orbiter.musicoin.org/addr/',
	    TransactionAddress : 'https://orbiter.musicoin.org/tx/',
            UncleAddress : 'https://orbiter.musicoin.org/uncle/',
            BlockAddress : 'https://orbiter.musicoin.org/block/',
            
            
            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'miningpoolindia',
            

            // For network hashrate (change for your favourite fork)
            BlockTime: 14.4


        }
    };

    if (environment === 'development') {
        /* Override ApiUrl just for development, while you are customizing
         frontend markup and css theme on your workstation.
         */
        ENV.APP.ApiUrl = 'https://music.miningpoolindia.com/'
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