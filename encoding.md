# Encoding

## HTML entity

```
| Character | HTML Entity         | Description                                |
| --------- | ------------------- | ------------------------------------------ |
| &         | &amp;               | Beginning of an entity or character reference. |
| <         | &lt;                | Beginning of a tag.                        |
| >         | &gt;                | Ending of a tag.                           |
| "         | &quot;              | Beginning and end of an attribute's value. |
| ©         | &copy;              | Copyright sign.                            |
| ™         | &trade;             | Trademark sign.                            |
| Æ         | &AElig;             | Character Æ (Latin capital letter AE).     |
| ​         | &ZeroWidthSpace;    | Zero-width space character.                |
```

https://developer.mozilla.org/en-US/docs/Glossary/Entity
https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references
https://en.wikipedia.org/wiki/Zero-width_space#Encoding

## Percent encoding

Also known as URL encoding.

Percent encoding is used to encode special URL characters that have special meaning.

For instance, the `/` character is used to indicate a directory, and the `?` and `=` characters used to indicate URL params.

| Character | URL Encoding  | Description                                |
| --------- | ------------- | ------------------------------------------ |
| &         | %26           | Beginning of an entity or character reference. |
| <         | %3C           | Beginning of a tag.                        |
| >         | %3E           | Ending of a tag.                           |
| "         | %22           | Beginning and end of an attribute's value. |
| ©         | %C2%A9        | Copyright sign.                            |
| ™         | %E2%84%A2     | Trademark sign.                            |
| Æ         | %C3%86        | Character Æ (Latin capital letter AE).     |
| ​         | %E2%80%8B     | Zero-width space character.                |


https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding

## Unicode, emojis
