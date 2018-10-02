// Mock Users
const count = 0


let getCaseStudies = function (req, res, next) {

  res.set('Set-Cookie', [`count=${count}`]);
  res.send('okcxvxcv');
}

module.exports = {getCaseStudies};
