const eventContainer = document.getElementById('event-container');

const events = [
  {
    title: 'Event 1',
    date: 'August 31, 2023',
    location: 'City Hall',
    imageUrl: 'event1.jpeg',
  },
  {
    title: 'Event 2',
    date: 'September 15, 2023',
    location: 'Convention Center',
    imageUrl: 'event2.jpeg',
  },
{
    title: 'Event 3',
    date: 'October 31, 2023',
    location: 'Swagath grand',
    imageUrl: 'event3.jpeg',
  },
{
    title: 'Event 4',
    date: 'November 25, 2023',
    location: 'subham hall',
    imageUrl: 'event4.jpeg',
  },
  // Add more events as needed
];

events.forEach(event => {
  const eventCard = document.createElement('section');
  eventCard.classList.add('event-card');

  const image = document.createElement('img');
  image.src = './assets/images/' + event.imageUrl;
  // console.log('./assets/images/' + event.imageUrl);
  image.alt = event.title;
  eventCard.appendChild(image);

  const title = document.createElement('h2');
  title.textContent = event.title;
  eventCard.appendChild(title);

  const date = document.createElement('p');
  date.textContent = `Date: ${event.date}`;
  eventCard.appendChild(date);

  const location = document.createElement('p');
  location.textContent = `Location: ${event.location}`;
  eventCard.appendChild(location);

  const button = document.createElement('button');
  button.textContent = 'Register';
  button.addEventListener('click', () => {
    window.location.href = './register-page.html';
  });
  eventCard.appendChild(button);

  eventContainer.appendChild(eventCard);
});
