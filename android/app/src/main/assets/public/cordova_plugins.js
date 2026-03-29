
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-admob-free.AdMob",
          "file": "plugins/cordova-plugin-admob-free/www/admob.js",
          "pluginId": "cordova-plugin-admob-free",
        "clobbers": [
          "admob",
          "AdMob",
          "plugins.AdMob"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-admob-free": "0.27.0"
    };
    // BOTTOM OF METADATA
    });
    