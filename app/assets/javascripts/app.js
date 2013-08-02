//= require_self
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./helpers
//= require_tree ./templates
//= require ./store
//= require ./router
//= require_tree ./routes

App = Em.Application.create({
  LOG_TRANSITIONS: true,
  LOG_BINDINGS: true,
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
});
