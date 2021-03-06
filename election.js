document.addEventListener("DOMContentLoaded", function() {

  // Imagination!
  var allCandidates = document.querySelector('#all-candidates');

  $.ajax ({
      url: "https://bb-election-api.herokuapp.com/",
      method: "GET",
      dataType: "JSON"
    }).done(function (data) {

      var candidates = data['candidates']
      for (i = 0; i < candidates.length; i++) {
        var candidate = document.createElement('div');

        var name = document.createElement('li');
        name.setAttribute('class', 'candidate-name');

        var votes = document.createElement('li');
        votes.setAttribute('class', 'candidate-vote');

        name.innerHTML = 'Name: ' + candidates[i]['name'];
        votes.innerHTML = ' Votes: ' + candidates[i]['votes'];

        var lineBreak = document.createElement('br');

        candidate.appendChild(name);
        candidate.appendChild(votes);
        allCandidates.appendChild(candidate);
        allCandidates.appendChild(lineBreak);
      }
    });

});
