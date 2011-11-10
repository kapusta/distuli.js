# distuli is a jQuery plugin
* This plugin uses jQuery deferreds to do things after CSS animations and/or transitions are complete.

# distuli?
* Google translate provided distuli as the Latin translation of deferred.
* The word is uncommon and thus should be safe in your $.fn namespace.

## Usage
<pre>
$("#thingy").distuli({
  name: "name", // the name of a css selector with a transition or animation
  complete: function() {
    //do stuff
    $(this).html("I got animated."); // the element with an id of "thing" now has "I got animated." in it.
  }
});
</pre>

## Details
* **name** is a CSS selector name.
* **complete** when the transition or animation finishes.
* You may use $(this) in the function to do the stuff to the element that was animated.
* The plugin does not remove the selector name from the element upon completion (so the programmer can decide when it's best to do so).

## Roadmap
* My plans include support for listing multiple selector names and tracking/reporting completion of each step.

## About the Author
* [Dan Kapusta](http://about.me/dankapusta) is a UI Engineer at AOL and is trying to keep things simple.
* I wrote this to learn more about css animations and jQuery deferreds.
* This is my first plugin, so it's far from perfect.

## Inspiration and Acknowledgments
* I thought to write this after seeing [Dan Eden's animate.css](http://daneden.me/animate/)
* The plugin Boilerplate is from [Addy Osmani's](http://addyosmani.com) [Essential jQuery Plugin Patterns](http://coding.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/) article.
* The transition/animation name pattern was adapted from code by [Mark MacKay](http://duopixel.ca/).
* Many thanks to [the entire jQuery development team](http://jquery.org/team/).

## Copyright and License
* Copyright (c) 2011 Daniel Kapusta
* Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php)
