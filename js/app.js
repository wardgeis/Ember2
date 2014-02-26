var Roller = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    debugMode: true
});

Roller.Router.map(function () { 
    this.resource("roll");
});

Roller.IndexRoute = Ember.Route.extend({
    redirect: function () {
        this.transitionTo("roll");
    }
});