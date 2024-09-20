const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeftContainer = document.createElement('div')
headerLeftContainer.className = 'header-left'

const headerLogo = document.createElement('img')
headerLogo.src = '/logo.png'

const headerTitle = document.createElement('h1')
headerTitle.textContent = 'UnEarthed'

headerLeftContainer.appendChild(headerLogo)
headerLeftContainer.appendChild(headerTitle)

const headerRightContainer = document.createElement('div')
headerRightContainer.className = 'header-right'

const headerButton = document.createElement('button'); // Correct: create a button element
headerButton.textContent = 'Home'; // Set button text

headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'; // Redirect to the homepage when clicked
});
headerRightContainer.appendChild(headerButton)

headerContainer.appendChild(headerLeftContainer)
headerContainer.appendChild(headerRightContainer)

header.appendChild(headerContainer)


