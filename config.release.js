/**
 * Created by baojx on 2015/9/28.
 */
typeof module !== 'undefined' && (module.exports = {
    ENV : "PRD",
    APP: "fabaoM",
    PORT: 3300,
    PEM: 'serverPrivateKey_release.pem',
    BASE_OPENAPI_URL: 'http://openapi.haolawyers.cn/openapi/',
    API_URL: 'http://api.haolawyers.cn/',
    WEB_URL: 'http://m.pocketlawyer.cn/',
    APPID: process.env.APPID || 'qARRzq',
    MQTT_URL: '121.40.121.191',
	MQTT_COUNT_URL: 'http://abc.haolawyers.cn',
    SECRET: 'oLm3zUtkTRRqJOFy',
    VER:"1.0.0",
    parentProductId: "1166",
    APPINFO:{
        apiVersion: "1.0.0",
        cityCode: "0",
        osType: "3",
		RONGYUN_APPKEY: "4z3hlwrv3itvt",
        region : "+86"
    },
    STATIC:"/"
});