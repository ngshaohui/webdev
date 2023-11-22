# Sharing components

## multi page app activity

Build a multi-page app that uses anchor tags to link to other pages

Just have 3 pages

index.html
about.html
contact.html

## navbars

We need a way to keep track of all the pages

Can have a navbar

If we need a navbar to show up in all the pages of the page, how do we do it?

### Naive method

copy and paste the navbar code

but now we want the page to be about-us

have to change the code in 3 different pages

This doesn't scale very well if we have a large number of webpages

## External libraries

http://www.w3schools.com/lib/w3data.js

Very naive implementation, does not wrap in iframe

Potentially vulnerable if importing online resource and setting innerHTML like that
