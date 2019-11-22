# Ionicon Mapper

If you're distributing your Ionic 4 Whitelabel app to multiple customers with custom themes, you'd also like to be able 
to customize icons.

For example, customer A wants a different icon in the toolbar than customer B. 
This example shows you how to do this. In fact, there are many possibilities. That's just one.

## Usage

Ionicons can be used as usual, especially if all customers use the same icon in an element.

`<ion-icon name="heart"></ion-icon>`

But in cases where customers want to use different icons in the same element, you can use the ionic-map template.

`<ion-icon-map name="myCustomID"></ion-icon-map>`

Make sure that the identifier is mapped in `./theme/icons/icon.map.ts`.

```
/**
 * myCustomID = custom identifier
 * add = ionicon identifier
 */
export const ICONS = {
    'myCustomID': 'add'
}
```

## Sample
```
npm i
ionic serve
```
