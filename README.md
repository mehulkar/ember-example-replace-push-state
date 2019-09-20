# ember-example-replace-push-state

## Problem

In certain cases, `router.replaceWith` calls `pushState` on the `window.history`,
instead of `replaceState`. This adds an entry to the history, which messes up
the back button.

## Debugging Overview

When `refreshModel` is true for a query parameter, Ember takes the `replaceWith`
transition triggered by the user, aborts it, because it thinks the query param
is stale and creates a new `transitionTo` transition, which ends up calling
`pushState`.
