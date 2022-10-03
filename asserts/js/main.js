// Init GitHub
const gitHub = new GitHub();
// Init UserInterface
const ui = new UserInterface();

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input addevent listener
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    gitHub.getUsers(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        ui.showAlert('User not Found', 'alert alert-danger');
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});
