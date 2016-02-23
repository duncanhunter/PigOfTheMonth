System.register(['angular2/platform/browser', './components/app/app.component', './sevices/persons/person.service', 'angular2/http'], function(exports_1) {
    var browser_1, app_component_1, person_service_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (person_service_1_1) {
                person_service_1 = person_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, person_service_1.PeopleService]);
        }
    }
});
//# sourceMappingURL=main.js.map