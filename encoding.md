# Encoding

## HTML entity

A HTML entity is a string that starts with ampersand `&` and ends with semicolon `;`, which the browser renders as a single character.

They are often used to display reserved characters on the page, to differentiate them between HTML code and strings.

For example, a dangling less than `<` could be mistaken for the start of a HTML element tag.

<!-- prettier-ignore -->
```html
<p>
    4
    <
    5
</p>
```

Using a HTML entity will clear up its ambiguity, making it clear that it should only be a string.

<!-- prettier-ignore -->
```html
<p>
    4
    &lt;
    5
</p>
```

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

Also known as URL encoding, as these are used within the URL.

Percent encoding is used to encode special URL characters that have special meaning.

For instance, the `/` character is used to indicate a directory, and the `?` and `=` characters used to indicate URL parameters.

`http://localhost:3000/api/greeting?name=charlie&size=smol`

Percent encoding allows us to include reserved characters within the url.

`http://localhost:3000/api/greeting?name=charlie&size=smol%26cute`

Given the URL above, we will interprete the parameters to be as follows:

| Key  | Value     |
| ---- | --------- |
| name | charlie   |
| size | smol&cute |

Without URL encoding, it would not be possible to have the character `&` as part of the value since it would cause the next character to be interpreted as the start of a key.

TODO talk about encoding the whole thing in url encoding rather than just 1 value.

| Character | URL Encoding | Description                                    |
| --------- | ------------ | ---------------------------------------------- |
| &         | %26          | Beginning of an entity or character reference. |
| <         | %3C          | Beginning of a tag.                            |
| >         | %3E          | Ending of a tag.                               |
| "         | %22          | Beginning and end of an attribute's value.     |
| ©         | %C2%A9       | Copyright sign.                                |
| ™         | %E2%84%A2    | Trademark sign.                                |
| Æ         | %C3%86       | Character Æ (Latin capital letter AE).         |
| ​         | %E2%80%8B    | Zero-width space character.                    |

https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding

## Unicode, emojis
