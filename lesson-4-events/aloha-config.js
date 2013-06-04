(function (window, undefined) {
        var Aloha = window.Aloha || (window.Aloha = {});

        Aloha.settings = {}

        // Sidebar settings
        Aloha.settings.sidebar = {
            disabled: true
        }

        // Bundle settings
        Aloha.settings.bundles = {
            // Path for custom bundle relative from Aloha.settings.baseUrl usually path of aloha.js
            //workshop: '../../../smart-content-change/plugin'
            workshop: '../../../lesson-4-events/plugin'
        }
})(window);