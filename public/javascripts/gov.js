votedigital = function ( ) {
    // test keys for funding
    var publicKey =	"GA5ZLXH4YDFUH4HYA3W27BQFJI5TTEFZRKF4ZNTXCY5JRZ42RMB5DBZF";
    var secretKey =	"SDDTMXBAT7BORHJQN6HB4G3USP2NCK53SDZJ5E3MGO4POVHCUGW6NB6P";
    //this.addXLM = function (pk) {
        // check if pk has more less than 10 xlm
        var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
        // get number of XLM from the funding account

server.transactions()
    .forLedger(1400)
    .call().then(function(r){ console.log(r); });


        // server.account()
            // .forAccount(publicKey)
            // .call().then(function(r){
            //     console.log(r);
            // });
        //stellerSDK.Account(publickKey)
        // top up XLM if needed
    //};
;}