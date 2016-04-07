module.exports = function (poppins) {

  poppins.labels = {

    'status/0-triage': function (issue) {
      if (issue.state === 'open') {
        return issue.labels.reduce(function(hasStatus, label) {
          return hasStatus || label.startsWith('status/');
        }, false);
      }
      return false;
    }

  }
};
