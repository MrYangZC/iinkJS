(function (scope) {

    /**
     *
     * @param {string} url
     * @constructor
     */
    function TextWSRecognizer (url) {
        scope.AbstractWSRecognizer.call(this, url);
        this.socket = new WebSocket(url + '/hwr');
    }

    /**
     *
     * @type {MyScript.AbstractWSRecognizer}
     */
    TextWSRecognizer.prototype = new scope.AbstractWSRecognizer();

    /**
     *
     * @type {TextWSRecognizer}
     */
    TextWSRecognizer.prototype.constructor = TextWSRecognizer;

    TextWSRecognizer.prototype.setOpenCallback = function (callback) {
        this.socket.onopen = callback;
    };

    TextWSRecognizer.prototype.setCloseCallback = function (callback) {
        this.socket.onclose = callback;
    };

    TextWSRecognizer.prototype.setErrorCallback = function (callback) {
        this.socket.onerror = callback;
    };

    TextWSRecognizer.prototype.setDataCallback = function (callback) {
        this.socket.onmessage = callback;
    };

    /**
     * Initialize the websocket
     * @param {string} applicationKey
     */
    TextWSRecognizer.prototype.initWSRecognition = function (applicationKey) {
        if (!this.socket) {
            return;
        }

        var initMessage = {
            type: 'applicationKey',
            applicationKey: applicationKey
        };
        this.socket.send(JSON.stringify(initMessage));
    };

    /**
     * Start the websocket session
     * @param {TextParameter} parameters
     * @param {Array} inputUnits
     */
    TextWSRecognizer.prototype.startWSRecognition = function (parameters, inputUnits) {
        if (!this.socket) {
            return;
        }

        var input = this.inputCorrector.getTextWSInput(parameters, inputUnits);
        input.type = 'start';
        input.doReco = true;

        this.socket.send(JSON.stringify(input));
    };

    TextWSRecognizer.prototype.continueWSRecognition = function (inputUnits) {
        if (!this.socket) {
            return;
        }

        var continueMessage = {
            type: 'continue',
            doReco: 'true',
            appendToPreviousInputUnit: true,
            inputUnits: this.inputCorrector.getTextInputUnits(inputUnits)
        };

        this.socket.send(JSON.stringify(continueMessage));
    };

    TextWSRecognizer.prototype.resetWSRecognition = function () {
        if (!this.socket) {
            return;
        }

        var resetMessage = {
            type: 'reset'
        };

        this.socket.send(JSON.stringify(resetMessage));
    };

    TextWSRecognizer.prototype.stopWSRecognition = function () {
        this.socket = undefined;
    };

    TextWSRecognizer.prototype.isClosed = function () {
        return (!this.socket)? true: false;
    };

    TextWSRecognizer.prototype.restartWSRecognition = function () {
        this.socket = new WebSocket(this.url + '/hwr');
    };

    /**
     * @callback TextWSRecognizer~dataCallback
     * @callback TextWSRecognizer~errorCallback
     * @callback TextWSRecognizer~closeCallback
     * @callback TextWSRecognizer~openCallback
     */

        // Export
    scope.TextWSRecognizer = TextWSRecognizer;
})(MyScript);