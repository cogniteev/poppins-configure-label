module.exports = function (poppins) {

  poppins.plugins.labels = {
    'status/0-triage': function (event) {
      return event.pull_request !== undefined;
    }
  }

};
