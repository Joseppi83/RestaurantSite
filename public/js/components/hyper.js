webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function reviewLeftClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
    }
  };
}

function reviewRightClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    }
  };
}

var actions = exports.actions = {
  reviewLeftClicked: reviewLeftClicked,
  reviewRightClicked: reviewRightClicked
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(11);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(7);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(10);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(8);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(9);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var companyInfo = {
  title1: 'Epicurean',
  title2: 'RESTAURANT',
  phone: '(555) - 555 - 5555',
  location: 'Portland, OR'
};

var specialMenuData = [{
  title: 'Super BBQ Grill No Smoke',
  description: 'Fried eggs, steak, baked potato or french fries, side of vegetables',
  price: 25
}, {
  title: 'Chicken Fingers',
  description: 'Fried eggs, steak, baked potato or french fries, side of vegetables',
  price: 28
}, {
  title: 'Hungry Person Burger',
  description: 'Fried eggs, steak, baked potato or french fries, side of vegetables',
  price: 26
}];

var reviewsData = [{
  company: 'Food Network',
  author: 'Joey Bologna ',
  authorInfo: '-Winner Of The Hot Dog Competition 2018',
  highlight: '\"Way better than microwave hamburgers! Like, totally and stuff!\"',
  review: 'Lorizzle ipsizzle dolor sit own yo, bizzle adipiscing stuff. Cool tellivizzle velizzle, bizzle volutpizzle, suscipit quis, gravida ass, arcu. Pellentesque eget sizzle. Sed erizzle. izzle boofron dapibizzle yo neck, yall tempizzle nizzle. Maurizzle pellentesque its fo rizzle i saw beyonces tizzles and my pizzle went crizzle turpizzle. Fizzle izzle pot. Dawg bling bling rhoncizzle nisi. In sizzle izzle platea mofo. Shizzle my nizzle crocodizzle dapibizzle. Curabitur mammasay mammasa mamma oo sa ass, pretizzle dawg, fo shizzle izzle, eleifend , nunc. Break it down suscipizzle. Integer yo mamma fo bow wow wow away.'
}, {
  company: 'HBO Food',
  author: 'Joey Bologna ',
  authorInfo: '-Winner Of The Hot Dog Competition 2018',
  highlight: '\"Way better than microwave hamburgers! Like, totally and stuff!\"',
  review: 'Lorizzle ipsizzle dolor sit own yo, bizzle adipiscing stuff. Cool tellivizzle velizzle, bizzle volutpizzle, suscipit quis, gravida ass, arcu. Pellentesque eget sizzle. Sed erizzle. izzle boofron dapibizzle yo neck, yall tempizzle nizzle. Maurizzle pellentesque its fo rizzle i saw beyonces tizzles and my pizzle went crizzle turpizzle. Fizzle izzle pot. Dawg bling bling rhoncizzle nisi. In sizzle izzle platea mofo. Shizzle my nizzle crocodizzle dapibizzle. Curabitur mammasay mammasa mamma oo sa ass, pretizzle dawg, fo shizzle izzle, eleifend , nunc. Break it down suscipizzle. Integer yo mamma fo bow wow wow away.'
}, {
  company: 'The NY Times',
  author: 'Joey Bologna ',
  authorInfo: '-Winner Of The Hot Dog Competition 2018',
  highlight: '\"Way better than microwave hamburgers! Like, totally and stuff!\"',
  review: 'Lorizzle ipsizzle dolor sit own yo, bizzle adipiscing stuff. Cool tellivizzle velizzle, bizzle volutpizzle, suscipit quis, gravida ass, arcu. Pellentesque eget sizzle. Sed erizzle. izzle boofron dapibizzle yo neck, yall tempizzle nizzle. Maurizzle pellentesque its fo rizzle i saw beyonces tizzles and my pizzle went crizzle turpizzle. Fizzle izzle pot. Dawg bling bling rhoncizzle nisi. In sizzle izzle platea mofo. Shizzle my nizzle crocodizzle dapibizzle. Curabitur mammasay mammasa mamma oo sa ass, pretizzle dawg, fo shizzle izzle, eleifend , nunc. Break it down suscipizzle. Integer yo mamma fo bow wow wow away.'
}, {
  company: 'NBC',
  author: 'Joey Bologna ',
  authorInfo: '-Winner Of The Hot Dog Competition 2018',
  highlight: '\"Way better than microwave hamburgers! Like, totally and stuff!\"',
  review: 'Lorizzle ipsizzle dolor sit own yo, bizzle adipiscing stuff. Cool tellivizzle velizzle, bizzle volutpizzle, suscipit quis, gravida ass, arcu. Pellentesque eget sizzle. Sed erizzle. izzle boofron dapibizzle yo neck, yall tempizzle nizzle. Maurizzle pellentesque its fo rizzle i saw beyonces tizzles and my pizzle went crizzle turpizzle. Fizzle izzle pot. Dawg bling bling rhoncizzle nisi. In sizzle izzle platea mofo. Shizzle my nizzle crocodizzle dapibizzle. Curabitur mammasay mammasa mamma oo sa ass, pretizzle dawg, fo shizzle izzle, eleifend , nunc. Break it down suscipizzle. Integer yo mamma fo bow wow wow away.'
}];

var randomQuoteData = [{
  author: '-Anthony Bourdain',
  quote: ' \"The Cooking Profession, While It\'s A Noble Craft And A Noble Calling, \'Cause You\'re Doing Something Useful - You\'re Feeding People, You\'re Nurturing Them, You\'re Providing Sustenance - It Was Never Pure.\" '
}, {
  author: '-Some Dude',
  quote: '\"Me like burger.\"'
}, {
  author: '-Some Other Dude',
  quote: '\"Me also like burger.\"'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenuData: specialMenuData,
  reviewsData: reviewsData,
  randomQuoteData: randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)("h2", null),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              state.companyInfo.location
            ),
            (0, _hyperapp.h)(
              "h6",
              { "class": "address" },
              "555 Main St",
              (0, _hyperapp.h)("br", null),
              "Portland, OR 55555"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "Email:"
              ),
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:info@epicurean.com" },
                " info@epicurean.com"
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "Phone:"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              "555-555-5555"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Lunch Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Friday, Saturday, and Sunday",
              (0, _hyperapp.h)("br", null),
              "from 12pm - 1:30pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Dinner Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Daily",
              (0, _hyperapp.h)("br", null),
              "from 6pm - 9:30pm"
            )
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        { "class": "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            (0, _hyperapp.h)("i", { "class": "fab fa-facebook" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            (0, _hyperapp.h)("i", { "class": "fab fa-twitter-square" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            (0, _hyperapp.h)("i", { "class": "fab fa-google-plus-square" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "#" },
            (0, _hyperapp.h)("i", { "class": "fab fa-youtube" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\xA9 2018 FakeBusinessHere"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        "Logo"
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the Art of Adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorizzle ipsizzle dolor sit own yo, bizzle adipiscing stuff. Cool tellivizzle velizzle, bizzle volutpizzle, suscipit quis, gravida ass, arcu. Pellentesque eget sizzle. Sed erizzle. izzle boofron dapibizzle yo neck, yall tempizzle nizzle. Maurizzle pellentesque its fo rizzle i saw beyonces tizzles and my pizzle went crizzle turpizzle. Fizzle izzle pot. Dawg bling bling rhoncizzle nisi. In sizzle izzle platea mofo. Shizzle my nizzle crocodizzle dapibizzle. Curabitur mammasay mammasa mamma oo sa ass, pretizzle dawg, fo shizzle izzle, eleifend , nunc. Break it down suscipizzle. Integer yo mamma fo bow wow wow away."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            "\"The best steak this side of Patagonia!\" ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "-Tommy Salami"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "Reserve"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'RandomQuote', style: {
        backgroundImage: 'linear-gradient(135deg,rgba(0,0,0,.2) 0,#000 100%), url("https://images.pexels.com/photos/76093/pexels-photo-76093.jpeg?auto=compress&cs=tinysrgb&h=350")'
      } },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h1',
        null,
        '"The cooking profession, while it\'s a noble craft and a noble calling, \'cause you\'re doing something useful - you\'re feeding people, you\'re nurturing them, you\'re providing sustenance - it was never pure."'
      ),
      (0, _hyperapp.h)(
        'span',
        { 'class': 'author' },
        '-Anthony Bourdain'
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "REVIEWS"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        state.reviewsData[state.reviewStatus.currentReview].company
      ),
      (0, _hyperapp.h)(
        "h4",
        null,
        state.reviewsData[state.reviewStatus.currentReview].highlight
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        state.reviewsData[state.reviewStatus.currentReview].review
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "author" },
        (0, _hyperapp.h)(
          "strong",
          null,
          state.reviewsData[state.reviewStatus.currentReview].author
        ),
        " ",
        (0, _hyperapp.h)(
          "em",
          null,
          state.reviewsData[state.reviewStatus.currentReview].authorInfo
        )
      )
    );
  };

  var leftClickBTN = function leftClickBTN() {
    if (state.reviewStatus.currentReview == 0) {
      console.log('do nothing');
    } else {
      actions.reviewLeftClicked();
    }
  };

  var rightClickBTN = function rightClickBTN() {
    if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {
      console.log('do nothing');
    } else {
      actions.reviewRightClicked();
    }
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8" },
          (0, _hyperapp.h)(
            "div",
            { "class": "side-img" },
            (0, _hyperapp.h)("img", { src: "https://image.freepik.com/free-photo/chef-making-ok-sign-over-white-background_1368-2804.jpg" })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          currentReview(),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { onclick: leftClickBTN,
              "class": "fas fa-arrow-left " + (state.reviewStatus.currentReview > 0 ? 'ready' : ''), "aria-hidden": "true" }),
            (0, _hyperapp.h)("i", { onclick: rightClickBTN,
              "class": "fas fa-arrow-right " + (state.reviewStatus.currentReview == state.reviewsData.length - 1 ? '' : 'ready'), "aria-hidden": "true" })
          )
        )
      )
    )
  );
}

// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var loopMenu = function loopMenu() {
    return state.specialMenuData.map(function (item) {
      return (0, _hyperapp.h)(
        "div",
        { "class": "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { "class": "box" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box-img" },
            (0, _hyperapp.h)(
              "div",
              { "class": "price-circle" },
              "$",
              item.price
            )
          ),
          (0, _hyperapp.h)(
            "span",
            { "class": "title" },
            item.title
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "details" },
            item.description
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Special Menu "
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        loopMenu()
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", "class": "link" },
        "View Full Menu"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.companyInfo.title1,
          (0, _hyperapp.h)("br", null),
          state.companyInfo.title2
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "container" },
          (0, _hyperapp.h)(
            "div",
            { "class": "booking" },
            "Book Table Directly"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "(555) - 555 - 5555"
          ),
          (0, _hyperapp.h)(
            "div",
            { classs: "hours" },
            "Hours of Operation ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Mon - Fri:"
            ),
            " 9am - 9pm",
            (0, _hyperapp.h)(
              "strong",
              null,
              " Weekends:"
            ),
            " 9am - 11pm"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {}
  }
});

/***/ })
],[12]);