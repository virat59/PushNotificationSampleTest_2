cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.core.dialogs/www/notification.js",
        "id": "org.apache.cordova.core.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.core.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.AudioHandler/www/MediaError.js",
        "id": "org.apache.cordova.core.AudioHandler.MediaError",
        "clobbers": [
            "window.MediaError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.core.AudioHandler/www/Media.js",
        "id": "org.apache.cordova.core.AudioHandler.Media",
        "clobbers": [
            "window.Media"
        ]
    }
]
});