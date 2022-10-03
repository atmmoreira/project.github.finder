class GitHub {
  constructor() {
    // this.client_id = '1a531d476a4ce1912975';
    // this.client_secret = '5346b6a7046f5374dbb3fb6b62ea59a85e10bcf5';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }

  async getUsers(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}`);
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
