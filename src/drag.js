/**'use strict';**/
/**
 * Author:liyy;
 * CreateTime:2018-11-02 11:17;
 * Description:
 **/
// drag.js
(function (definition) {
    'use strict';
    // CommonJS
    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = definition();
        // RequireJS
    } else if (typeof define === 'function' && define.amd) {
        define(definition);
        // <script>
    } else if (typeof window !== 'undefined' || typeof self !== 'undefined') {
        // Prefer window over self for add-on scripts. Use self for
        // non-windowed contexts.
        var global = typeof window !== 'undefined' ? window : self;

        // initialize drag as a global.
        global.drag = definition();

    } else {
        throw new Error('This environment was not anticipated by drag,Please file a bug.');
    }
})(function () {
    function drag() {
        return {
            sleep: sleep
        };
    }

    function sleep() {

    }

    return drag();
});
