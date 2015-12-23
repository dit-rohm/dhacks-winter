$(function () {
  OAuth.initialize('kwSUWyRQrJTdJa0jC8kdr_VW1UM');

  $('#github').click(function () {
    OAuth.popup('github').done(function (g) {

      var fetch = function (url, callback) {
        return new Promise(function (resolve, reject) {
          g.get(url).done(function (data) {
            resolve(callback(data));
          }).fail(function (e) {
            reject(e);
          });
        });
      };

      var promises = [
        fetch('/user', function (user) {
          return user['name']
        }),
        fetch('/user/emails', function (emails) {
          return emails.filter(function (element) {
            return element['primary'];
          })[0]['email']
        }),
        fetch('/user/repos', function (repositories) {
          return repositories.map(function (repository) {
            return repository['language'];
          }).filter(function (language) {
            return language;
          });
        })
      ];

      Promise.all(promises)
        .then(function (results) {
          var languages = results[2].reduce(function (prev, cur) {
            return prev + '&entry.1067372603=' + cur
          });
          window.location = 'https://docs.google.com/forms/d/1-7BKaeNowv9JI8cSSN4wrgIltuHgKajICc_0pyhVcAg/viewform?entry.1543657670=' + results[0] + '&entry.1498038100=' + results[1] + languages;
        }, function (error) {
          console.log(error);
        });
    });
  });
});
