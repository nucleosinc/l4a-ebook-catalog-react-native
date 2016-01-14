# Ebook Reader React Native Android

A mobile reader for eBooks

> This is currently a starter skeleton. We are currently busy on assessing the couchbase [npm module](https://github.com/fraserxu/react-native-couchbase-lite/)

## Why?

eBooks are read on mobile devices and very often offline. Building with couchbase solves a lot of the offline problems while React-Native means a shared codebase for both iOS and Android.

## Prerequisites for development (Android)

- Node.js 4.0 or higher
- Android SDK
- Couchbase's [sync gateway](http://developer.couchbase.com/documentation/mobile/1.1.0/develop/guides/sync-gateway/running-sync-gateway/installing-sync-gateway/index.html) which is a database for development


run `npm install`

## Starting up Development

You can either develop with an Android device or with an emulator. We recommend Genymotion for an emulator. 

1. You need to start the development database 

`~/Downloads/couchbase-sync-gateway/bin/sync-gateway sync-gateway-config.json`

2. You need to start the development server (to enable live reload of code changes)

`react-native start`

3. Finally you need to build the apk to the connected device or emulator

`react-native run-android`

4. Last thing to do (you're probably staring at a red screen) is connect things

```
adb reverse tcp:4984 tcp:4984    // connects the device to syc_gateway
adb reverse tcp:8081 tcp:8081    // connects the debug for chrome
```



