(function ( $, window, document, undefined ) {
  var pluginName = 'distuli',
      defaults = {
        transi: (function () {
          var transi = '',
              types = ['transition', 'MozTransition', 'webkitTransition', 'OTransition'],
              count = types.length,
              index = 0,
              style = window.getComputedStyle(document.documentElement, null);
          for (index; index < count; index ++) {
            if (types[index] in style) {
              transi = types[index];
              if (index < 2) { /* The style to detect Mozilla is diff than the event name */
                transi = "transition";
                transi += "end";
              } else {
                transi += "End";
              }
              break;
            }
          }
          return transi;
        })(),
        anima: (function () {
          var anima = '',
              types = ['animation', 'MozAnimation', 'webkitAnimation', 'OAnimation'],
              count = types.length,
              index = 0,
              style = window.getComputedStyle(document.documentElement, null);
          for (index; index < count; index ++) {
            if (types[index] in style) {
              anima = types[index];
              if (index < 2) { /* The style to detect Mozilla is diff than the event name */
                 anima = "animation";
                 anima += "end";
              } else {
                anima += "End";
              }
              break;
            }
          }
          return anima;
        })()
      };

  function Plugin( element, options ) {
    this.element = element;
    this.options = $.extend( {}, defaults, options);
    this.init(); /* go do stuff */
  };

  Plugin.prototype.init = function () {
    var that = this;
    $.when( this.anim() )
      .done(function() {
        /* map the execution of the complete() callback to the current element (that.element) */
        (that.options.complete) ? that.options.complete.call(that.element) : null;
        /* clear the Plugin data from the the current element */
        $.data(that.element, 'plugin_' + pluginName, null);
      });
  };

  Plugin.prototype.anim = function() {
    var dfd = $.Deferred();
    $(this.element)
      .addClass(this.options.name)
      .one(this.options.transi + " " + this.options.anima, function(e) {
        /* for (var a in e.originalEvent) { console.log(a + ":" + e.originalEvent[a]); } */
        dfd.resolve();
    });
    return dfd.promise();
  };

  /* wrapper around the constructor preventing against multiple instantiations */
  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) { /* this should always be true given the wipe of $.data on line 63 */
        $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
      }
    });
  };

})( jQuery, window, document );