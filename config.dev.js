+/**
 * Created by baojx on 2015/9/28.
 */
typeof module !== 'undefined' && (module.exports = {
    ENV : "development",
    APP: "fabaoM",
    PORT: process.env.PORT || 3000,
    PEM: 'serverPrivateKey_Alpha.pem',
    BASE_OPENAPI_URL: 'http://openapi.alpha.haolawyers.cn/openapi/',
    API_URL: 'http://api.alpha.haolawyers.cn/',
    WEB_URL: 'http://localhost:3000/',
    APPID: process.env.APPID || 'qARRzq',
    MQTT_URL: '121.43.233.195',
	MQTT_COUNT_URL: 'http://10.168.217.109:7081',
    SECRET: 'oLm3zUtkTRRqJOFy',
    VER:"1.0.0",
    parentProductId: "1146",
    APPINFO:{
        apiVersion: "1.0.0",
        cityCode: "0",
        osType: "3",
		RONGYUN_APPKEY: "bmdehs6pdwivs",
        region : "+86"
    },
    STATIC:"/"
});