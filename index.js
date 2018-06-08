let AWS = require('aws-sdk');

exports.handler = (event) => {
  return new Promise((resolve, reject) => {
    resolve({
      success: true
    })
  });
};
