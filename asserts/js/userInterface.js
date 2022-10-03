class UserInterface {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="row">
      <div class="col-md-3">
        <div class="card m-auto" style="width: 18rem">
          <img src="${user.avatar_url}" class="card-img-top" alt="" />
          <div class="card-body">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary d-block rounded-5"
              >View Profile</a
            >
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="mb-4 mt-3">
          <span class="badge rounded-5 text-bg-primary">Public Repo: ${user.public_repos}</span>
          <span class="badge rounded-5 text-bg-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge rounded-5 text-bg-success">Followers: ${user.followers}</span>
          <span class="badge rounded-5 text-bg-info">Following: ${user.following}</span>
        </div>

        <ul class="list-group">
          <li class="list-group-item">Company: ${user.company}</li>
          <li class="list-group-item">Website: ${user.blog}</li>
          <li class="list-group-item">Location: ${user.location}</li>
          <li class="list-group-item">Bio: ${user.bio}</li>
        </ul>
      </div>

      <h2 class="my-3">Last repositories</h2>
      <div class="col-md-12">
        <ul class="list-group repos">
        </ul>
      </div>
    </div>
    `;
  }

  showRepos(repos) {
    let output = '';
    repos.forEach((repo) => {
      output += `<li class="list-group-item"><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
    });

    document.querySelector('.repos').innerHTML = output;
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  showAlert(message, classname) {
    this.clearAlert();
    const div = document.createElement('div');
    div.className = classname;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const searchTitle = document.querySelector('.searchTitle');
    container.insertBefore(div, searchTitle);
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
}
