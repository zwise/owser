require('smoosh').config({
  "JAVASCRIPT": {
    "DIST_DIR": "./"
  , "owser": [
        "./src/copyright.js"
      , "./src/owser.js"
    ]
  }
  , "JSHINT_OPTS": {
      "boss": true
    , "forin": false
    , "curly": false
    , "debug": false
    , "devel": false
    , "evil": false
    , "regexp": false
    , "undef": false
    , "sub": true
    , "white": false
    , "indent": 2
    , "whitespace": true
    , "asi": true
    , "laxbreak": true
    , "laxcomma": true
  }
}).run().build().analyze()