module.exports = function (poppins) {

  function isOpen(event) {
    return event.issue && event.issue.state === 'open';
  }

  function isStatusSet(event) {
    return event.issue.labels.reduce(function(hasStatus, label) {
      return hasStatus || label.startsWith('status/');
    }, false);
  }

  poppins.plugins.labels = {
    'status/0-triage': function (event) {
      return isOpen(event) && !isStatusSet(event);
    }
  }

};
