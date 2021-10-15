const express = require('express')
const router = express.Router()

// Run this code when a form is submitted to 'products-2'
router.post('/products-2-answer', function (req, res) {

  // Make a variable and give it the value from 'products-2'
  var typeoffirearmproduct = req.session.data['type-of-firearm-product']

  // Check whether the variable matches a condition
  if (typeoffirearmproduct == "firearm"){
    // Send user to next page
    res.redirect('/products-firearm-0')
  }
  if (typeoffirearmproduct == "ammunition"){
    // Send user to next page
    res.redirect('/products-ammunition-0')
  }
  if (typeoffirearmproduct == "component"){
    // Send user to next page
    res.redirect('/products-component-0')
  }
  if (typeoffirearmproduct == "component-of-firearm-ammunition"){
    // Send user to next page
    res.redirect('/products-component-ammunition-0')
  }
  if (typeoffirearmproduct == "accessory"){
    // Send user to next page
    res.redirect('/products-accessory-0')
  }
  if (typeoffirearmproduct == "software-or-technology-relating-to-a-firearm"){
    // Send user to next page
    res.redirect('/products-technology-software-0')
  }
})

// Run this code when a form is submitted to 'products-firearm-7'
router.post('/products-firearm-7-answer', function (req, res) {

  // Make a variable and give it the value from 'products-firearm-7'
  var rfd = req.session.data['registered-fd']

  // Check whether the variable matches a condition
  if (rfd == "Yes"){
    // Send user to next page
    res.redirect('/products-attach-rfd')
  }
    if (rfd == "No"){
      // Send user to next page
      res.redirect('/products-firearm-8')
    }
})

// Run this code when a form is submitted to 'products-firearm-8'
router.post('/products-firearm-8-answer', function (req, res) {

  // Make a variable and give it the value from 'products-firearm-8'
  var section125 = req.session.data['section-1-2-or-5']

  // Check whether the variable matches a condition
  if (section125 == "Section1"){
    // Send user to next page
    res.redirect('/products-firearm-9-1')
  }
    if (section125 == "Section2"){
      // Send user to next page
      res.redirect('/products-firearm-9-2')
    }
      if (section125 == "Section5"){
        // Send user to next page
        res.redirect('/products-firearm-9-5')
  }
  if (section125 == "Not-sure"){
    // Send user to next page
    res.redirect('/products-firearm-10-1')
}
})


// Run this code when a form is submitted to 'products-firearm-s5'
router.post('/products-firearm-s5-answer', function (req, res) {

  // Make a variable and give it the value from 'products-firearm-s5'
  var covereds5 = req.session.data['covered-by-s5']

  // Check whether the variable matches a condition
  if (covereds5 == "Yes"){
    // Send user to next page
    res.redirect('/products-firearm-9-5')
  }
    if (covereds5 == "No"){
      // Send user to next page
      res.redirect('/products-firearm-10-1')
    }
    if (covereds5 == "Dont-know"){
      // Send user to next page
      res.redirect('/products-firearm-10-1')
    }
})

// Run this code when a form is submitted to 'products-firearm-10-1'
router.post('/products-firearm-10-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-firearm-10-1'
  var techspec = req.session.data['tech-spec']

  // Check whether the variable matches a condition
  if (techspec == "Yes"){
    // Send user to next page
    res.redirect('/products-firearm-10-2')
  }
    if (techspec == "No"){
      // Send user to next page
      res.redirect('/products-firearm-summary')
    }
})

// Run this code when a form is submitted to 'products-firearm-10-2'
router.post('/products-firearm-10-2-answer', function (req, res) {

  // Make a variable and give it the value from 'products-firearm-10-2'
  var techspecrating = req.session.data['tech-spec-rating']

  // Check whether the variable matches a condition
  if (techspecrating == "No"){
    // Send user to next page
    res.redirect('/products-firearm-10-3')
  }
    if (techspecrating == "Yes"){
      // Send user to next page
      res.redirect('/products-firearm-summary')
    }
})

// Run this code when a form is submitted to 'journey-1'
router.post('/journey-1-answer', function (req, res) {

  // Make a variable and give it the value from 'journey-1'
  var temporperm = req.session.data['temp-or-perm']

  // Check whether the variable matches a condition
  if (temporperm == "Yes"){
    // Send user to next page
    res.redirect('/journey-4')
  }
    if (temporperm == "Temporary"){
      // Send user to next page
      res.redirect('/journey-1-1')
    }
})

// Run this code when a form is submitted to 'correspondence-1'
router.post('/correspondence-1-answer', function (req, res) {

  // Make a variable and give it the value from 'correspondence-1'
  var anyletters = req.session.data['any-letters']

  // Check whether the variable matches a condition
  if (anyletters == "Yes"){
    // Send user to next page
    res.redirect('/correspondence-2')
  }
    if (anyletters == "No"){
      // Send user to next page
      res.redirect('/task-list')
    }
})


// Run this code when a form is submitted to 'products-firearm-12-1'
router.post('/products-firearm-12-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-firearm-12-1'
  var exportedagain = req.session.data['exported-again']

  // Check whether the variable matches a condition
  if (exportedagain == "Yes"){
    // Send user to next page
    res.redirect('/products-firearm-12-2')
  }
    if (exportedagain == "No"){
      // Send user to next page
      res.redirect('/products-firearm-13-1')
    }
})


// Run this code when a form is submitted to 'products-firearm-11-1'
router.post('/products-firearm-11-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-firearm-11-1'
  var madebefore1938 = req.session.data['made-before-1938']

  // Check whether the variable matches a condition
  if (madebefore1938 == "Yes"){
    // Send user to next page
    res.redirect('/products-firearm-11-2')
  }
    if (madebefore1938 == "No"){
      // Send user to next page
      res.redirect('/products-firearm-12-1')
    }
})


// Run this code when a form is submitted to 'products-firearm-13-1'
router.post('/products-firearm-13-answer', function (req, res) {

  // Make a variable and give it the value from 'products-firearm-13-1'
  var deactivated = req.session.data['deactivated']

  // Check whether the variable matches a condition
  if (deactivated == "Yes"){
    // Send user to next page
    res.redirect('/products-firearm-13-2')
  }
    if (deactivated == "No"){
      // Send user to next page
      res.redirect('/products-firearm-15')
    }
})


// Run this code when a form is submitted to 'end-user-7'
router.post('/end-user-7-answer', function (req, res) {

  // Make a variable and give it the value from 'end-user-7'
  var inenglish = req.session.data['in-english']

  // Check whether the variable matches a condition
  if (inenglish == "Yes"){
    // Send user to next page
    res.redirect('/end-user-9')
  }
    if (inenglish == "No"){
      // Send user to next page
      res.redirect('/end-user-8')
    }
})



// Run this code when a form is submitted to 'end-use-3'
router.post('/end-use-3-answer', function (req, res) {

  // Make a variable and give it the value from 'end-use-3'
  var transferlicence = req.session.data['transfer-licence']

  // Check whether the variable matches a condition
  if (transferlicence == "Yes"){
    // Send user to next page
    res.redirect('/end-use-4')
  }
    if (transferlicence == "No"){
      // Send user to next page
      res.redirect('/end-user-1')
    }
})



// Run this code when a form is submitted to 'end-user-9'
router.post('/end-user-9-answer', function (req, res) {

  // Make a variable and give it the value from 'end-user-9'
  var coverinenglish = req.session.data['cover-in-english']

  // Check whether the variable matches a condition
  if (coverinenglish == "Yes"){
    // Send user to next page
    res.redirect('/end-user-summary')
  }
    if (coverinenglish == "No"){
      // Send user to next page
      res.redirect('/end-user-10')
    }
})


// Run this code when a form is submitted to 'product-firearms-3'
router.post('/products-firearm-3-answer', function (req, res) {

  // Make a variable and give it the value from 'product-firearms-3'
  var securitygrading = req.session.data['security-grading']

  // Check whether the variable matches a condition
  if (securitygrading == "Yes"){
    // Send user to next page
    res.redirect('/products-firearm-4')
  }
    if (securitygrading == "No"){
      // Send user to next page
      res.redirect('/products-firearm-5')
    }
})



// Run this code when a form is submitted to 'product-firearms-16-1'
router.post('/products-firearm-16-1-answer', function (req, res) {

  // Make a variable and give it the value from 'product-firearms-16-1'
  var sn = req.session.data['sn']

  // Check whether the variable matches a condition
  if (sn == "Yes-now"){
    // Send user to next page
    res.redirect('/products-firearm-16-2')
  }
  if (sn == "Yes-later"){
    // Send user to next page
    res.redirect('/products-firearm-summary-part-2')
  }
    if (sn == "No"){
      // Send user to next page
      res.redirect('/products-firearm-summary-part-2')
    }
})


// Run this code when a form is submitted to 'pic-1'
router.post('/pic-1-answer', function (req, res) {

  // Make a variable and give it the value from 'pic-1'
  var inenglish = req.session.data['in-english']

  // Check whether the variable matches a condition
  if (inenglish == "Yes"){
    // Send user to next page
    res.redirect('/task-list')
  }
    if (inenglish == "No"){
      // Send user to next page
      res.redirect('/pic-2')
    }
})



module.exports = router
