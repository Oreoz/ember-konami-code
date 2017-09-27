# Ember Konami Code <kbd>↑</kbd> <kbd>↑</kbd> <kbd>↓</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> <kbd>←</kbd> <kbd>→</kbd>  <kbd>B</kbd> <kbd>A</kbd> <kbd>ENTER</kbd>

[![NPM Version](https://badge.fury.io/js/ember-konami-code.svg)](https://badge.fury.io/js/ember-konami-code)
[![Ember Observer Score](https://emberobserver.com/badges/ember-konami-code.svg)](https://emberobserver.com/addons/ember-konami-code)

## Description

This is addon is meant to be a simple way for you to create your own easter eggs
within you Ember application with ease!

## Installation

Simply run `ember install ember-konami-code` and you'll be all set!

## Docs

Simply drop the `konami-code` component in your template and wire-up an action
that does cool stuff using the `onKonami` property!

```hbs
{{konami-code onKonami=(action 'doCoolStuff')}}
```

Once your user enters the infamous code, your action will be called.

_Important Note_: The component must be rendered in order for the action to be
called. So if you want to temporarily disable the awesomeness, simple remove the
component from the DOM.

## Contributions
Any contribution is more than welcomed. If you plan on introducing a new feature,
please open an issue and share your idea prior to implementing it, it could save
you precious time!

## Troubleshooting
If something is not working as expected, simply open an issue and we'll discuss
how we'll go about fixing it!
