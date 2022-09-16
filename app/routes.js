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
      res.redirect('/end-use-summary')
    }
})



// Run this code when a form is submitted to 'end-user-9'
router.post('/end-user-9-answer', function (req, res) {

  // Make a variable and give it the value from 'end-user-9'
  var coverinenglish = req.session.data['cover-in-english']

  // Check whether the variable matches a condition
  if (coverinenglish == "Yes"){
    // Send user to next page
    res.redirect('/pic-1')
  }
    if (coverinenglish == "No"){
      // Send user to next page
      res.redirect('/end-user-10')
    }
})


// Run this code when a form is submitted to 'products-firearm-3'
router.post('/products-firearm-3-answer', function (req, res) {

  // Make a variable and give it the value from 'products-firearm-3'
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



// Run this code when a form is submitted to 'products-firearm-16-1'
router.post('/products-firearm-16-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-firearm-16-1'
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
  var pic = req.session.data['pic']

  // Check whether the variable matches a condition
  if (pic == "Yes"){
    // Send user to next page
    res.redirect('/pic-2')
  }
    if (pic == "No"){
      // Send user to next page
      res.redirect('/end-user-summary')
    }
})


// Run this code when a form is submitted to 'products-component-7'
router.post('/products-component-7-answer', function (req, res) {

  // Make a variable and give it the value from 'products-component-7'
  var rfd = req.session.data['registered-fd']

  // Check whether the variable matches a condition
  if (rfd == "Yes"){
    // Send user to next page
    res.redirect('/products-attach-rfd-component')
  }
    if (rfd == "No"){
      // Send user to next page
      res.redirect('/products-component-8')
    }
})






// Run this code when a form is submitted to 'products-component-8'
router.post('/products-component-8-answer', function (req, res) {

  // Make a variable and give it the value from 'products-component-8'
  var section125 = req.session.data['section-1-2-or-5']

  // Check whether the variable matches a condition
  if (section125 == "Section1"){
    // Send user to next page
    res.redirect('/products-component-9-1')
  }
    if (section125 == "Section2"){
      // Send user to next page
      res.redirect('/products-component-9-2')
    }
      if (section125 == "Section5"){
        // Send user to next page
        res.redirect('/products-component-9-5')
  }
  if (section125 == "Not-sure"){
    // Send user to next page
    res.redirect('/products-component-10-1')
}
})


// Run this code when a form is submitted to 'products-component-s5'
router.post('/products-component-s5-answer', function (req, res) {

  // Make a variable and give it the value from 'products-component-s5'
  var covereds5 = req.session.data['covered-by-s5']

  // Check whether the variable matches a condition
  if (covereds5 == "Yes"){
    // Send user to next page
    res.redirect('/products-component-9-5')
  }
    if (covereds5 == "No"){
      // Send user to next page
      res.redirect('/products-component-10-1')
    }
    if (covereds5 == "Dont-know"){
      // Send user to next page
      res.redirect('/products-component-10-1')
    }
})

// Run this code when a form is submitted to 'products-component-10-1'
router.post('/products-component-10-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-component-10-1'
  var techspec = req.session.data['tech-spec']

  // Check whether the variable matches a condition
  if (techspec == "Yes"){
    // Send user to next page
    res.redirect('/products-component-10-2')
  }
    if (techspec == "No"){
      // Send user to next page
      res.redirect('/products-component-summary')
    }
})

// Run this code when a form is submitted to 'products-component-10-2'
router.post('/products-component-10-2-answer', function (req, res) {

  // Make a variable and give it the value from 'products-component-10-2'
  var techspecrating = req.session.data['tech-spec-rating']

  // Check whether the variable matches a condition
  if (techspecrating == "No"){
    // Send user to next page
    res.redirect('/products-component-10-3')
  }
    if (techspecrating == "Yes"){
      // Send user to next page
      res.redirect('/products-component-summary')
    }
})






// Run this code when a form is submitted to 'products-component-12-1'
router.post('/products-component-12-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-component-12-1'
  var exportedagain = req.session.data['exported-again']

  // Check whether the variable matches a condition
  if (exportedagain == "Yes"){
    // Send user to next page
    res.redirect('/products-component-12-2')
  }
    if (exportedagain == "No"){
      // Send user to next page
      res.redirect('/products-component-14')
    }
})




// Run this code when a form is submitted to 'products-component-11-1'
router.post('/products-component-11-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-component-11-1'
  var madebefore1938 = req.session.data['made-before-1938']

  // Check whether the variable matches a condition
  if (madebefore1938 == "Yes"){
    // Send user to next page
    res.redirect('/products-component-11-2')
  }
    if (madebefore1938 == "No"){
      // Send user to next page
      res.redirect('/products-component-12-1')
    }
})





// Run this code when a form is submitted to 'products-firearm-3'
router.post('/products-component-3-answer', function (req, res) {

  // Make a variable and give it the value from 'products-firearm-3'
  var securitygrading = req.session.data['security-grading']

  // Check whether the variable matches a condition
  if (securitygrading == "Yes"){
    // Send user to next page
    res.redirect('/products-component-4')
  }
    if (securitygrading == "No"){
      // Send user to next page
      res.redirect('/products-component-5')
    }
})




// Run this code when a form is submitted to 'products-firearm-16-1'
router.post('/products-component-16-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-firearm-16-1'
  var sn = req.session.data['sn']

  // Check whether the variable matches a condition
  if (sn == "Yes-now"){
    // Send user to next page
    res.redirect('/products-component-16-2')
  }
  if (sn == "Yes-later"){
    // Send user to next page
    res.redirect('/products-component-summary-part-2')
  }
    if (sn == "No"){
      // Send user to next page
      res.redirect('/products-component-summary-part-2')
    }
})




// Run this code when a form is submitted to 'products-ammunition-7'
router.post('/products-ammunition-7-answer', function (req, res) {

  // Make a variable and give it the value from 'products-ammunition-7'
  var rfd = req.session.data['registered-fd']

  // Check whether the variable matches a condition
  if (rfd == "Yes"){
    // Send user to next page
    res.redirect('/products-attach-rfd-ammunition')
  }
    if (rfd == "No"){
      // Send user to next page
      res.redirect('/products-ammunition-8')
    }
})






// Run this code when a form is submitted to 'products-ammunition-8'
router.post('/products-ammunition-8-answer', function (req, res) {

  // Make a variable and give it the value from 'products-ammunition-8'
  var section125 = req.session.data['section-1-2-or-5']

  // Check whether the variable matches a condition
  if (section125 == "Section1"){
    // Send user to next page
    res.redirect('/products-ammunition-9-1')
  }
    if (section125 == "Section2"){
      // Send user to next page
      res.redirect('/products-ammunition-9-2')
    }
      if (section125 == "Section5"){
        // Send user to next page
        res.redirect('/products-ammunition-9-5')
  }
  if (section125 == "Not-sure"){
    // Send user to next page
    res.redirect('/products-ammunition-10-1')
}
})


// Run this code when a form is submitted to 'products-ammunition-s5'
router.post('/products-ammunition-s5-answer', function (req, res) {

  // Make a variable and give it the value from 'products-ammunition-s5'
  var covereds5 = req.session.data['covered-by-s5']

  // Check whether the variable matches a condition
  if (covereds5 == "Yes"){
    // Send user to next page
    res.redirect('/products-ammunition-9-5')
  }
    if (covereds5 == "No"){
      // Send user to next page
      res.redirect('/products-ammunition-10-1')
    }
    if (covereds5 == "Dont-know"){
      // Send user to next page
      res.redirect('/products-ammunition-10-1')
    }
})

// Run this code when a form is submitted to 'products-ammunition-10-1'
router.post('/products-ammunition-10-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-ammunition-10-1'
  var techspec = req.session.data['tech-spec']

  // Check whether the variable matches a condition
  if (techspec == "Yes"){
    // Send user to next page
    res.redirect('/products-ammunition-10-2')
  }
    if (techspec == "No"){
      // Send user to next page
      res.redirect('/products-ammunition-summary')
    }
})

// Run this code when a form is submitted to 'products-ammunition-10-2'
router.post('/products-ammunition-10-2-answer', function (req, res) {

  // Make a variable and give it the value from 'products-ammunition-10-2'
  var techspecrating = req.session.data['tech-spec-rating']

  // Check whether the variable matches a condition
  if (techspecrating == "No"){
    // Send user to next page
    res.redirect('/products-ammunition-10-3')
  }
    if (techspecrating == "Yes"){
      // Send user to next page
      res.redirect('/products-ammunition-summary')
    }
})






// Run this code when a form is submitted to 'products-ammunition-12-1'
router.post('/products-ammunition-12-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-ammunition-12-1'
  var exportedagain = req.session.data['exported-again']

  // Check whether the variable matches a condition
  if (exportedagain == "Yes"){
    // Send user to next page
    res.redirect('/products-ammunition-12-2')
  }
    if (exportedagain == "No"){
      // Send user to next page
      res.redirect('/products-ammunition-14')
    }
})




// Run this code when a form is submitted to 'products-ammunition-11-1'
router.post('/products-ammunition-11-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-ammunition-11-1'
  var madebefore1938 = req.session.data['made-before-1938']

  // Check whether the variable matches a condition
  if (madebefore1938 == "Yes"){
    // Send user to next page
    res.redirect('/products-ammunition-11-2')
  }
    if (madebefore1938 == "No"){
      // Send user to next page
      res.redirect('/products-ammunition-12-1')
    }
})





// Run this code when a form is submitted to 'products-ammunition-3'
router.post('/products-ammunition-3-answer', function (req, res) {

  // Make a variable and give it the value from 'products-ammunition-3'
  var securitygrading = req.session.data['security-grading']

  // Check whether the variable matches a condition
  if (securitygrading == "Yes"){
    // Send user to next page
    res.redirect('/products-ammunition-4')
  }
    if (securitygrading == "No"){
      // Send user to next page
      res.redirect('/products-ammunition-5')
    }
})


// Run this code when a form is submitted to 'products-accessory-3'
router.post('/products-accessory-3-answer', function (req, res) {

  // Make a variable and give it the value from 'products-accessory-3'
  var securitygrading = req.session.data['security-grading']

  // Check whether the variable matches a condition
  if (securitygrading == "Yes"){
    // Send user to next page
    res.redirect('/products-accessory-4')
  }
    if (securitygrading == "No"){
      // Send user to next page
      res.redirect('/products-accessory-military-use')
    }
})


// Run this code when a form is submitted to 'products-technology-software-3'
router.post('/products-technology-software-3-answer', function (req, res) {

  // Make a variable and give it the value from 'products-technology-software-3'
  var securitygrading = req.session.data['security-grading']

  // Check whether the variable matches a condition
  if (securitygrading == "Yes"){
    // Send user to next page
    res.redirect('/products-technology-software-4')
  }
    if (securitygrading == "No"){
      // Send user to next page
      res.redirect('/products-technology-software-purpose')
    }
})




// Run this code when a form is submitted to 'products-firearm-16-1'
router.post('/products-ammunition-16-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-firearm-16-1'
  var sn = req.session.data['sn']

  // Check whether the variable matches a condition
  if (sn == "Yes-now"){
    // Send user to next page
    res.redirect('/products-ammunition-16-2')
  }
  if (sn == "Yes-later"){
    // Send user to next page
    res.redirect('/products-ammunition-summary-part-2')
  }
    if (sn == "No"){
      // Send user to next page
      res.redirect('/products-ammunition-summary-part-2')
    }
})





// Run this code when a form is submitted to 'products-component-ammunition-7'
router.post('/products-component-ammunition-7-answer', function (req, res) {

  // Make a variable and give it the value from 'products-component-ammunition-7'
  var rfd = req.session.data['registered-fd']

  // Check whether the variable matches a condition
  if (rfd == "Yes"){
    // Send user to next page
    res.redirect('/products-attach-rfd-component-ammunition')
  }
    if (rfd == "No"){
      // Send user to next page
      res.redirect('/products-component-ammunition-8')
    }
})






// Run this code when a form is submitted to 'products-component-ammunition-8'
router.post('/products-component-ammunition-8-answer', function (req, res) {

  // Make a variable and give it the value from 'products-component-ammunition-8'
  var section125 = req.session.data['section-1-2-or-5']

  // Check whether the variable matches a condition
  if (section125 == "Section1"){
    // Send user to next page
    res.redirect('/products-component-ammunition-9-1')
  }
    if (section125 == "Section2"){
      // Send user to next page
      res.redirect('/products-component-ammunition-9-2')
    }
      if (section125 == "Section5"){
        // Send user to next page
        res.redirect('/products-component-ammunition-9-5')
  }
  if (section125 == "Not-sure"){
    // Send user to next page
    res.redirect('/products-component-ammunition-10-1')
}
})


// Run this code when a form is submitted to 'products-component-ammunition-s5'
router.post('/products-component-ammunition-s5-answer', function (req, res) {

  // Make a variable and give it the value from 'products-component-ammunition-s5'
  var covereds5 = req.session.data['covered-by-s5']

  // Check whether the variable matches a condition
  if (covereds5 == "Yes"){
    // Send user to next page
    res.redirect('/products-component-ammunition-9-5')
  }
    if (covereds5 == "No"){
      // Send user to next page
      res.redirect('/products-component-ammunition-10-1')
    }
    if (covereds5 == "Dont-know"){
      // Send user to next page
      res.redirect('/products-component-ammunition-10-1')
    }
})

// Run this code when a form is submitted to 'products-component-ammunition-10-1'
router.post('/products-component-ammunition-10-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-component-ammunition-10-1'
  var techspec = req.session.data['tech-spec']

  // Check whether the variable matches a condition
  if (techspec == "Yes"){
    // Send user to next page
    res.redirect('/products-component-ammunition-10-2')
  }
    if (techspec == "No"){
      // Send user to next page
      res.redirect('/products-component-ammunition-summary')
    }
})


// Run this code when a form is submitted to 'products-accessory-10-1'
router.post('/products-accessory-10-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-accessory-10-1'
  var techspec = req.session.data['tech-spec']

  // Check whether the variable matches a condition
  if (techspec == "Yes"){
    // Send user to next page
    res.redirect('/products-accessory-10-2')
  }
    if (techspec == "No"){
      // Send user to next page
      res.redirect('/products-accessory-summary')
    }
})


// Run this code when a form is submitted to 'products-technology-software-10-1'
router.post('/products-technology-software-10-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-accessory-10-1'
  var techspec = req.session.data['tech-spec']

  // Check whether the variable matches a condition
  if (techspec == "Yes"){
    // Send user to next page
    res.redirect('/products-technology-software-10-2')
  }
    if (techspec == "No"){
      // Send user to next page
      res.redirect('/products-technology-software-summary')
    }
})



// Run this code when a form is submitted to 'products--technology-software-10-1'
router.post('/products--technology-software-10-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-accessory-10-1'
  var techspec = req.session.data['tech-spec']

  // Check whether the variable matches a condition
  if (techspec == "Yes"){
    // Send user to next page
    res.redirect('/products--technology-software-10-2')
  }
    if (techspec == "No"){
      // Send user to next page
      res.redirect('/products--technology-software-summary')
    }
})




// Run this code when a form is submitted to 'products-component-ammunition-10-2'
router.post('/products-component-ammunition-10-2-answer', function (req, res) {

  // Make a variable and give it the value from 'products-component-ammunition-10-2'
  var techspecrating = req.session.data['tech-spec-rating']

  // Check whether the variable matches a condition
  if (techspecrating == "No"){
    // Send user to next page
    res.redirect('/products-component-ammunition-10-3')
  }
    if (techspecrating == "Yes"){
      // Send user to next page
      res.redirect('/products-component-ammunition-summary')
    }
})


// Run this code when a form is submitted to 'products-accessory-10-2'
router.post('/products-accessory-10-2-answer', function (req, res) {

  // Make a variable and give it the value from 'products-accessory-10-2'
  var techspecrating = req.session.data['tech-spec-rating']

  // Check whether the variable matches a condition
  if (techspecrating == "No"){
    // Send user to next page
    res.redirect('/products-accessory-10-3')
  }
    if (techspecrating == "Yes"){
      // Send user to next page
      res.redirect('/products-accessory-summary')
    }
})


// Run this code when a form is submitted to 'products-technology-software-10-2'
router.post('/products-technology-software-10-2-answer', function (req, res) {

  // Make a variable and give it the value from 'products-accessory-10-2'
  var techspecrating = req.session.data['tech-spec-rating']

  // Check whether the variable matches a condition
  if (techspecrating == "No"){
    // Send user to next page
    res.redirect('/products-technology-software-10-3')
  }
    if (techspecrating == "Yes"){
      // Send user to next page
      res.redirect('/products-technology-software-summary')
    }
})





// Run this code when a form is submitted to 'products-component-ammunition-12-1'
router.post('/products-component-ammunition-12-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-component-ammunition-12-1'
  var exportedagain = req.session.data['exported-again']

  // Check whether the variable matches a condition
  if (exportedagain == "Yes"){
    // Send user to next page
    res.redirect('/products-component-ammunition-12-2')
  }
    if (exportedagain == "No"){
      // Send user to next page
      res.redirect('/products-component-ammunition-15')
    }
})


// Run this code when a form is submitted to 'products-accessory-12-1'
router.post('/products-accessory-12-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-accessory-12-1'
  var exportedagain = req.session.data['exported-again']

  // Check whether the variable matches a condition
  if (exportedagain == "Yes"){
    // Send user to next page
    res.redirect('/products-accessory-12-2')
  }
    if (exportedagain == "No"){
      // Send user to next page
      res.redirect('/products-accessory-15')
    }
})



// Run this code when a form is submitted to 'products-technology-software-12-1'
router.post('/products-technology-software-12-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-technology-software-12-1'
  var exportedagain = req.session.data['exported-again']

  // Check whether the variable matches a condition
  if (exportedagain == "Yes"){
    // Send user to next page
    res.redirect('/products-technology-software-12-2')
  }
    if (exportedagain == "No"){
      // Send user to next page
      res.redirect('/products-technology-software-15')
    }
})





// Run this code when a form is submitted to 'products-component-ammunition-11-1'
router.post('/products-component-ammunition-11-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-component-ammunition-11-1'
  var madebefore1938 = req.session.data['made-before-1938']

  // Check whether the variable matches a condition
  if (madebefore1938 == "Yes"){
    // Send user to next page
    res.redirect('/products-component-ammunition-11-2')
  }
    if (madebefore1938 == "No"){
      // Send user to next page
      res.redirect('/products-component-ammunition-12-1')
    }
})




// Run this code when a form is submitted to 'products-component-ammunition-13-1'
router.post('/products-component-ammunition-13-answer', function (req, res) {

  // Make a variable and give it the value from 'products-component-ammunition-13-1'
  var deactivated = req.session.data['deactivated']

  // Check whether the variable matches a condition
  if (deactivated == "Yes"){
    // Send user to next page
    res.redirect('/products-component-ammunition-13-2')
  }
    if (deactivated == "No"){
      // Send user to next page
      res.redirect('/products-component-ammunition-15')
    }
})




// Run this code when a form is submitted to 'products-firearm-3'
router.post('/products-component-ammunition-3-answer', function (req, res) {

  // Make a variable and give it the value from 'product-firearms-3'
  var securitygrading = req.session.data['security-grading']

  // Check whether the variable matches a condition
  if (securitygrading == "Yes"){
    // Send user to next page
    res.redirect('/products-component-ammunition-4')
  }
    if (securitygrading == "No"){
      // Send user to next page
      res.redirect('/products-component-ammunition-5')
    }
})




// Run this code when a form is submitted to 'products-firearm-16-1'
router.post('/products-component-ammunition-16-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-firearm-16-1'
  var sn = req.session.data['sn']

  // Check whether the variable matches a condition
  if (sn == "Yes-now"){
    // Send user to next page
    res.redirect('/products-component-ammunition-16-2')
  }
  if (sn == "Yes-later"){
    // Send user to next page
    res.redirect('/products-component-ammunition-summary-part-2')
  }
    if (sn == "No"){
      // Send user to next page
      res.redirect('/products-component-ammunition-summary-part-2')
    }
})




// Run this code when a form is submitted to 'pic-2'
router.post('/pic-2-answer', function (req, res) {

  // Make a variable and give it the value from 'pic-2'
  var inenglish = req.session.data['in-english']

  // Check whether the variable matches a condition
  if (inenglish == "Yes"){
    // Send user to next page
    res.redirect('/end-user-summary')
  }
    if (inenglish == "No"){
      // Send user to next page
      res.redirect('/pic-3')
    }
})


// Run this code when a form is submitted to 'products-1-2'
router.post('/products-1-2-answer', function (req, res) {

  // Make a variable and give it the value from 'products-1-2'
  var categoryofproduct = req.session.data['category-of-product']

  // Check whether the variable matches a condition
  if (categoryofproduct == "Platform_vehicle_system_machine"){
    // Send user to next page
    res.redirect('/products-pvsm-deo-1')
  }
  if (categoryofproduct == "Device_equipment_object"){
    // Send user to next page
    res.redirect('/products-pvsm-deo-1')
  }
  if (categoryofproduct == "Components_modules_accessories_something"){
    // Send user to next page
    res.redirect('/products-cma-1')
  }
  if (categoryofproduct == "Materials_substances"){
    // Send user to next page
    res.redirect('/products-ms-1')
  }
  if (categoryofproduct == "Software"){
    // Send user to next page
    res.redirect('/products-nf-technology-software-1')
  }
  if (categoryofproduct == "Technology"){
    // Send user to next page
    res.redirect('/products-nf-technology-software-1')
  }
  if (categoryofproduct == "Firearms"){
    // Send user to next page
    res.redirect('/products-2')
  }
})


// Run this code when a form is submitted to 'products-pvsm-deo-3'
router.post('/products-pvsm-deo-3-answer', function (req, res) {

  // Make a variable and give it the value from 'products-pvsm-deo-3'
  var securitygrading = req.session.data['security-grading']

  // Check whether the variable matches a condition
  if (securitygrading == "Yes"){
    // Send user to next page
    res.redirect('/products-pvsm-deo-4')
  }
    if (securitygrading == "No"){
      // Send user to next page
      res.redirect('/products-pvsm-deo-info-security')
    }
})


// Run this code when a form is submitted to 'products-cma-3'
router.post('/products-cma-3-answer', function (req, res) {

  // Make a variable and give it the value from 'products-cma-3'
  var securitygrading = req.session.data['security-grading']

  // Check whether the variable matches a condition
  if (securitygrading == "Yes"){
    // Send user to next page
    res.redirect('/products-cma-4')
  }
    if (securitygrading == "No"){
      // Send user to next page
      res.redirect('/products-cma-info-security')
    }
})


// Run this code when a form is submitted to 'products-ms-3'
router.post('/products-ms-3-answer', function (req, res) {

  // Make a variable and give it the value from 'products-ms-3'
  var securitygrading = req.session.data['security-grading']

  // Check whether the variable matches a condition
  if (securitygrading == "Yes"){
    // Send user to next page
    res.redirect('/products-ms-4')
  }
    if (securitygrading == "No"){
      // Send user to next page
      res.redirect('/products-ms-10-1')
    }
})



// Run this code when a form is submitted to 'products-nf-technology-software-3'
router.post('/products-nf-technology-software-3-answer', function (req, res) {

  // Make a variable and give it the value from 'products-nf-technology-software-3'
  var securitygrading = req.session.data['security-grading']

  // Check whether the variable matches a condition
  if (securitygrading == "Yes"){
    // Send user to next page
    res.redirect('/products-nf-technology-software-4')
  }
    if (securitygrading == "No"){
      // Send user to next page
      res.redirect('/products-nf-technology-software-info-security')
    }
})



// Run this code when a form is submitted to 'products-cma-component'
router.post('/products-cma-component-answer', function (req, res) {

  // Make a variable and give it the value from 'products-cma-component'
  var cmacomponent = req.session.data['cma-component']

  // Check whether the variable matches a condition
  if (cmacomponent == "Yes"){
    // Send user to next page
    res.redirect('/products-cma-component-2')
  }
    if (cmacomponent == "No"){
      // Send user to next page
      res.redirect('/products-cma-2')
    }
})


// Run this code when a form is submitted to 'products-pvsm-deo-10-1'
router.post('/products-pvsm-deo-10-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-pvsm-deo-10-1'
  var techspec = req.session.data['tech-spec']

  // Check whether the variable matches a condition
  if (techspec == "Yes"){
    // Send user to next page
    res.redirect('/products-pvsm-deo-10-2')
  }
    if (techspec == "No"){
      // Send user to next page
      res.redirect('/products-pvsm-deo-purpose')
    }
})


// Run this code when a form is submitted to 'products-cma-10-1'
router.post('/products-cma-10-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-cma-10-1'
  var techspec = req.session.data['tech-spec']

  // Check whether the variable matches a condition
  if (techspec == "Yes"){
    // Send user to next page
    res.redirect('/products-cma-10-2')
  }
    if (techspec == "No"){
      // Send user to next page
      res.redirect('/products-cma-purpose')
    }
})


// Run this code when a form is submitted to 'products-ms-10-1'
router.post('/products-ms-10-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-ms-10-1'
  var techspec = req.session.data['tech-spec']

  // Check whether the variable matches a condition
  if (techspec == "Yes"){
    // Send user to next page
    res.redirect('/products-ms-10-2')
  }
    if (techspec == "No"){
      // Send user to next page
      res.redirect('/products-ms-purpose')
    }
})

// Run this code when a form is submitted to 'products-nf-technology-software-10-1'
router.post('/products-nf-technology-software-10-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-nf-technology-software-10-1'
  var techspec = req.session.data['tech-spec']

  // Check whether the variable matches a condition
  if (techspec == "Yes"){
    // Send user to next page
    res.redirect('/products-nf-technology-software-10-2')
  }
    if (techspec == "No"){
      // Send user to next page
      res.redirect('/products-nf-technology-software-purpose')
    }
})



// Run this code when a form is submitted to 'products-pvsm-deo-10-2'
router.post('/products-pvsm-deo-10-2-answer', function (req, res) {

  // Make a variable and give it the value from 'products-pvsm-deo-10-2'
  var techspecrating = req.session.data['tech-spec-rating']

  // Check whether the variable matches a condition
  if (techspecrating == "No"){
    // Send user to next page
    res.redirect('/products-pvsm-deo-10-3')
  }
    if (techspecrating == "Yes"){
      // Send user to next page
      res.redirect('/products-pvsm-deo-military-use')
    }
})


// Run this code when a form is submitted to 'products-cma-10-2'
router.post('/products-cma-10-2-answer', function (req, res) {

  // Make a variable and give it the value from 'products-cma-10-2'
  var techspecrating = req.session.data['tech-spec-rating']

  // Check whether the variable matches a condition
  if (techspecrating == "No"){
    // Send user to next page
    res.redirect('/products-cma-10-3')
  }
    if (techspecrating == "Yes"){
      // Send user to next page
      res.redirect('/products-cma-summary')
    }
})


// Run this code when a form is submitted to 'products-ms-10-2'
router.post('/products-ms-10-2-answer', function (req, res) {

  // Make a variable and give it the value from 'products-ms-10-2'
    var techspecrating = req.session.data['tech-spec-rating']

  // Check whether the variable matches a condition
  if (techspecrating == "No"){
    // Send user to next page
    res.redirect('/products-ms-10-3')
  }
    if (techspecrating == "Yes"){
      // Send user to next page
      res.redirect('/products-ms-military-use')
    }
})

// Run this code when a form is submitted to 'products-nf-technology-software-10-2'
router.post('/products-nf-technology-software-10-2-answer', function (req, res) {

  // Make a variable and give it the value from 'products-nf-technology-software-10-2'
  var techspecrating = req.session.data['tech-spec-rating']

  // Check whether the variable matches a condition
  if (techspecrating == "No"){
    // Send user to next page
    res.redirect('/products-nf-technology-software-10-3')
  }
    if (techspecrating == "Yes"){
      // Send user to next page
      res.redirect('/products-nf-technology-software-summary')
    }
})


// Run this code when a form is submitted to 'products-pvsm-deo-12-1'
router.post('/products-pvsm-deo-12-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-pvsm-deo-12-1'
  var exportedagain = req.session.data['exported-again']

  // Check whether the variable matches a condition
  if (exportedagain == "Yes"){
    // Send user to next page
    res.redirect('/products-pvsm-deo-12-2')
  }
    if (exportedagain == "No"){
      // Send user to next page
      res.redirect('/products-pvsm-deo-15')
    }
})


// Run this code when a form is submitted to 'products-cma-12-1'
router.post('/products-cma-12-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-cma-12-1'
  var exportedagain = req.session.data['exported-again']

  // Check whether the variable matches a condition
  if (exportedagain == "Yes"){
    // Send user to next page
    res.redirect('/products-cma-12-2')
  }
    if (exportedagain == "No"){
      // Send user to next page
      res.redirect('/products-cma-15')
    }
})


// Run this code when a form is submitted to 'products-ms-12-1'
router.post('/products-ms-12-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-ms-12-1'
  var exportedagain = req.session.data['exported-again']

  // Check whether the variable matches a condition
  if (exportedagain == "Yes"){
    // Send user to next page
    res.redirect('/products-ms-12-2')
  }
    if (exportedagain == "No"){
      // Send user to next page
      res.redirect('/products-ms-15')
    }
})


// Run this code when a form is submitted to 'products-nf-technology-software-12-1'
router.post('/products-nf-technology-software-12-1-answer', function (req, res) {

  // Make a variable and give it the value from 'products-nf-technology-software-12-1'
  var exportedagain = req.session.data['exported-again']

  // Check whether the variable matches a condition
  if (exportedagain == "Yes"){
    // Send user to next page
    res.redirect('/products-nf-technology-software-12-2')
  }
    if (exportedagain == "No"){
      // Send user to next page
      res.redirect('/products-nf-technology-software-15')
    }
})



// Run this code when a form is submitted to 'products-1-categories-2'
router.post('/products-1-categories-2-answer', function (req, res) {

  // Make a variable and give it the value from 'products-1-categories-2'
  var categoryofproduct2 = req.session.data['category-of-product-2']

  // Check whether the variable matches a condition
  if (categoryofproduct2 == "complete"){
    // Send user to next page
    res.redirect('/products-pvsm-deo-1')
  }
  if (categoryofproduct2 == "makes_up"){
    // Send user to next page
    res.redirect('/products-1-categories-3')
  }
  if (categoryofproduct2 == "operates"){
    // Send user to next page
    res.redirect('/products-nf-technology-software-1')
  }
  })


  // Run this code when a form is submitted to 'products-1-categories-1'
  router.post('/products-1-categories-1-answer', function (req, res) {

    // Make a variable and give it the value from 'products-1-categories-1'
    var firearmproduct = req.session.data['firearm-product']

    // Check whether the variable matches a condition
    if (firearmproduct == "Yes"){
      // Send user to next page
      res.redirect('/products-2')
    }
    if (firearmproduct == "No"){
      // Send user to next page
      res.redirect('/products-1-categories-2')
    }
    })


    // Run this code when a form is submitted to 'products-1-categories-3'
    router.post('/products-1-categories-3-answer', function (req, res) {

      // Make a variable and give it the value from 'products-1-categories-3'
      var ms = req.session.data['ms']

      // Check whether the variable matches a condition
      if (ms == "Yes"){
        // Send user to next page
        res.redirect('/products-ms-1')
      }
      if (ms == "No"){
        // Send user to next page
        res.redirect('/products-cma-1')
      }
      })



      // Run this code when a form is submitted to 'security-approval-v2'
      router.post('/security-approval-v2-answer', function (req, res) {

        // Make a variable and give it the value from 'security-approval-v2'
        var securityapproval = req.session.data['security-approval']

        // Check whether the variable matches a condition
        if (securityapproval == "f680"){
          // Send user to next page
          res.redirect('/security-f680')
        }
        if (securityapproval == "f1686"){
          // Send user to next page
          res.redirect('/security-f1686')
        }
        if (securityapproval == "other"){
          // Send user to next page
          res.redirect('/security-other')
        }
        })




module.exports = router
