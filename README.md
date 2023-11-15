# ACLU Email Production

A collection of all the emails I have coded for the ACLU.

## Recomended Extentions

1. code-spell-checker
2. htmlhint

## HTML htmlhint

Default Rules

```json
{
   "alt-required": true,
   // "attr-lowercase": true, //default
   // "attr-no-duplication": true, //default
   "attr-no-unnecessary-whitespace:": true,
   "attr-unsafe-chars": true,
   // "attr-value-double-quotes": true, //default
   "attr-value-not-empty": true,
   // "doctype-first": true, //default
   "doctype-html5": false,
   "empty-tag-not-self-closed": false,****
   "head-script-disabled": true,
   "href-abs-or-rel": false,
   "id-class-ad-disabled": true,
   "id-class-value": "dash",
   // "id-unique": true, //default
   "inline-script-disabled": true,
   "inline-style-disabled": false,
   // "spec-char-escape": true, //default
   // "src-not-empty": true, //default
   "style-disabled:": false,
   // "tag-pair": true, //default
   "tag-self-close": true,
   // "tagname-lowercase": true, //default
   "title-required": false //default = true
}
```


HTML Email Rules
```json
{
	"doctype-html5": true,
	"doctype-first": true,
	"html-lang-require": true,
	"head-script-disabled": true,
	"style-disabled": true,
	"script-disabled": true,
	"title-require": true,
	"attr-lowercase": true,
	"attr-no-duplication": true,
	"attr-no-unnecessary-whitespace": true,
	"attr-unsafe-chars": true,
	"attr-value-double-quotes": true,
	"attr-value-single-quotes": false,
	"attr-value-not-empty": true,
	"attr-sorted": true,
	"attr-whitespace": true,
	"alt-require": true,
	"input-requires-label": true,
	"tags-check": true,
	"tag-pair": true,
	"tagname-lowercase": true,
	"tagname-specialchars": true,
	"empty-tag-not-self-closed": true,
	"src-not-empty": true,
	"href-abs-or-rel": "rel",
	"id-class-ad-disabled": true,
	"id-class-value": "dash",
	"id-unique": true,
	"inline-script-disabled": true,
	"inline-style-disabled": true,
	"space-tab-mixed-disabled": "tab"
}

```
