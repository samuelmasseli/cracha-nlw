const linksSocialMedia = {
  github: 'samuelmasseli',
  youtube: '',
  facebook: 'samuelmasseli',
  instagram: 'samuelmasseli',
  twitter: 'samuelmasseli'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      profilePhoto.src = data.avatar_url
      loginGit.textContent = data.login
    })
}

getGitHubProfileInfo()
