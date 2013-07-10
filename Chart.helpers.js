﻿Charts.colors = [
    "69, 117, 180",
    "215, 48, 39",
    "254, 224, 144",
    "171, 217, 233",
    "165, 0, 38",
    "49, 54, 149",
    "224, 243, 248",
    "244, 109, 67",
    "116, 173, 209",
    "253, 174, 97",
    "10,10,10"
];

//Easing functions adapted from Robert Penner's easing equations
//http://www.robertpenner.com/easing/
Charts.animationOptions = {
    linear: function (t) {
        return t;
    },
    easeInQuad: function (t) {
        return t * t;
    },
    easeOutQuad: function (t) {
        return -1 * t * (t - 2);
    },
    easeInOutQuad: function (t) {
        if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;
        return -1 / 2 * ((--t) * (t - 2) - 1);
    },
    easeInCubic: function (t) {
        return t * t * t;
    },
    easeOutCubic: function (t) {
        return 1 * ((t = t / 1 - 1) * t * t + 1);
    },
    easeInOutCubic: function (t) {
        if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;
        return 1 / 2 * ((t -= 2) * t * t + 2);
    },
    easeInQuart: function (t) {
        return t * t * t * t;
    },
    easeOutQuart: function (t) {
        return -1 * ((t = t / 1 - 1) * t * t * t - 1);
    },
    easeInOutQuart: function (t) {
        if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;
        return -1 / 2 * ((t -= 2) * t * t * t - 2);
    },
    easeInQuint: function (t) {
        return 1 * (t /= 1) * t * t * t * t;
    },
    easeOutQuint: function (t) {
        return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
    },
    easeInOutQuint: function (t) {
        if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;
        return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
    },
    easeInSine: function (t) {
        return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
    },
    easeOutSine: function (t) {
        return 1 * Math.sin(t / 1 * (Math.PI / 2));
    },
    easeInOutSine: function (t) {
        return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
    },
    easeInExpo: function (t) {
        return (t == 0) ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
    },
    easeOutExpo: function (t) {
        return (t == 1) ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
    },
    easeInOutExpo: function (t) {
        if (t == 0) return 0;
        if (t == 1) return 1;
        if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
        return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
    },
    easeInCirc: function (t) {
        if (t >= 1) return t;
        return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
    },
    easeOutCirc: function (t) {
        return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
    },
    easeInOutCirc: function (t) {
        if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
        return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    easeInElastic: function (t) {
        var s;
        var p = 1 * .3;
        var a = 1;
        if (t == 0) return 0;
        if ((t /= 1) == 1) return 1;
        if (a < Math.abs(1)) {
            a = 1;
            s = p / 4;
        } else s = p / (2 * Math.PI) * Math.asin(1 / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
    },
    easeOutElastic: function (t) {
        var s;
        var p = 1 * .3;
        var a = 1;
        if (t == 0) return 0;
        if ((t /= 1) == 1) return 1;
        if (a < Math.abs(1)) {
            a = 1;
            s = p / 4;
        } else s = p / (2 * Math.PI) * Math.asin(1 / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
    },
    easeInOutElastic: function (t) {
        var s;
        var p = 1 * (.3 * 1.5);
        var a = 1;
        if (t == 0) return 0;
        if ((t /= 1 / 2) == 2) return 1;
        if (a < Math.abs(1)) {
            a = 1;
            s = p / 4;
        } else s = p / (2 * Math.PI) * Math.asin(1 / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * .5 + 1;
    },
    easeInBack: function (t) {
        var s = 1.70158;
        return 1 * (t /= 1) * t * ((s + 1) * t - s);
    },
    easeOutBack: function (t) {
        var s = 1.70158;
        return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
    },
    easeInOutBack: function (t) {
        var s = 1.70158;
        if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
        return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
    },
    easeInBounce: function (t) {
        return 1 - animationOptions.easeOutBounce(1 - t);
    },
    easeOutBounce: function (t) {
        if ((t /= 1) < (1 / 2.75)) {
            return 1 * (7.5625 * t * t);
        } else if (t < (2 / 2.75)) {
            return 1 * (7.5625 * (t -= (1.5 / 2.75)) * t + .75);
        } else if (t < (2.5 / 2.75)) {
            return 1 * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375);
        } else {
            return 1 * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375);
        }
    },
    easeInOutBounce: function (t) {
        if (t < 1 / 2) return animationOptions.easeInBounce(t * 2) * .5;
        return animationOptions.easeOutBounce(t * 2 - 1) * .5 + 1 * .5;
    }
};

//Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/
Charts.template = function (str, data) {
    if (typeof str == "undefined") str = "<%=value%>";
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      Charts.cache[str] = Charts.cache[str] ||
        Charts.template(document.getElementById(str).innerHTML) :

      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

    // Provide some basic currying to the user
    return data ? fn(data) : fn;
};