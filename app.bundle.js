"use strict";
(self["webpackChunkwebxr_image_recognizer"] = self["webpackChunkwebxr_image_recognizer"] || []).push([["app"],{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unity */ "./src/unity/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const setControls = (unityInstance) => {
    document.addEventListener('keydown', event => {
        if (event.key === 'r') {
            unityInstance.SendMessage('NewBehaviourScript', 'SetDirRight');
        }
        if (event.key === 'u') {
            unityInstance.SendMessage('NewBehaviourScript', 'SetDirUp');
        }
    });
};
const serializeV3 = (vec3) => {
    return `${vec3.x},${vec3.y},${vec3.z}`;
};
const initARJS = () => __awaiter(void 0, void 0, void 0, function* () {
    const unityInstance = yield (0,_unity__WEBPACK_IMPORTED_MODULE_0__.initUnity)();
    // console.log('----', unityInstance);
    // setControls(unityInstance);
    const camera = document.querySelector('[camera]');
    const marker = document.querySelector('a-marker');
    let check;
    marker.addEventListener('markerFound', () => {
        let cameraPosition = camera.object3D.position;
        let markerPosition = marker.object3D.position;
        // let distance = cameraPosition.distanceTo(markerPosition);
        check = setInterval(() => {
            cameraPosition = camera.object3D.position;
            markerPosition = marker.object3D.position;
            unityInstance.SendMessage('NewBehaviourScript', 'SetPosArgs', serializeV3(markerPosition));
            unityInstance.SendMessage('NewBehaviourScript', 'SetCamPos', serializeV3(cameraPosition));
            // console.log(serializeV3(markerPosition));
            // console.log(camera.object3D, marker.object3D);
        }, 100);
    });
    marker.addEventListener('markerLost', () => {
        clearInterval(check);
    });
});
initARJS();


/***/ }),

/***/ "./src/unity/index.ts":
/*!****************************!*\
  !*** ./src/unity/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initUnity": () => (/* binding */ initUnity)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function unityShowBanner(msg, type) {
    console.log('unity msg:', 'type', type, 'msg', msg);
}
var buildUrl = 'Build';
var loaderUrl = buildUrl + '/pr1.loader.js';
var config = {
    dataUrl: buildUrl + '/pr1.data',
    frameworkUrl: buildUrl + '/pr1.framework.js',
    codeUrl: buildUrl + '/pr1.wasm',
    streamingAssetsUrl: 'StreamingAssets',
    companyName: 'DefaultCompany',
    productName: 'My project',
    productVersion: '0.1',
    showBanner: unityShowBanner
};
// By default Unity keeps WebGL canvas render target size matched with
// the DOM size of the canvas element (scaled by window.devicePixelRatio)
// Set this to false if you want to decouple this synchronization from
// happening inside the engine, and you would instead like to size up
// the canvas DOM size and WebGL render target sizes yourself.
// config.matchWebGLToCanvasSize = false;
function loadScript(src) {
    return new Promise(function (resolve, reject) {
        var s;
        s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = reject;
        document.body.appendChild(s);
    });
}
const initUnity = () => __awaiter(void 0, void 0, void 0, function* () {
    var container = document.querySelector('#unity-container');
    var canvas = document.querySelector('#unity-canvas');
    var loadingBar = document.querySelector('#unity-loading-bar');
    var progressBarFull = document.querySelector('#unity-progress-bar-full');
    var fullscreenButton = document.querySelector('#unity-fullscreen-button');
    // var warningBanner = document.querySelector('#unity-warning') as HTMLElement;
    let unityInstanceX;
    yield loadScript(loaderUrl);
    //@ts-ignore
    yield createUnityInstance(canvas, config)
        .then((unityInstance) => {
        unityInstanceX = unityInstance;
        //init call
        loadingBar.style.display = 'none';
        fullscreenButton.onclick = () => {
            unityInstance.SetFullscreen(1);
        };
    })
        .catch((message) => alert(message));
    return unityInstanceX;
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=app.bundle.js.map