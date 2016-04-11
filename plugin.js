module.exports = function (poppins) {

  function setLabels(number, labels) {
    poppins.rest.issues.edit({
      user    : poppins.config.msg.user,
      repo    : poppins.config.msg.repo,
      number  : number,
      labels  : labels
    }).catch(poppins.log.bind(poppins));
  }

  function hasStatusLabel(labels) {
    return labels.find(function(label) {
      return label.name.startsWith('status/');
    }) !== undefined;
  }

  poppins.on('pullRequestOpened', function(data) {
    poppins.getIssueLabels(data.number)
        .then(function(labels) {
          labels = labels.map(function(item) {
            return item.name;
          });

          if (!hasStatusLabel(labels)) {
            labels.push('status/0-triage');
          }
          setLabels(data.number, labels);
        });
  });

};
