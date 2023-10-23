# Lavender - Women Who Code Hackathon for Social Good 2023

<h6>Challenge Statement & Proposed Solution:</h6>
<p>Addressing the challenge of students' mental health struggles due to resource limitations, the solution bridges the gap between family and professional support, reduces stigma, and offers diverse communities curated resources and direct professional access. Utilizing a tech stack of emerging technologies such as JS, EJS, HTML, Bootstrap (front-end) and Python, Flask, MySQL (back-end), the non-profit website provides free access to a broad audience.</p>

<h6>Functionality</h6>
<p>Our application provides adolescents with a secure environment to foster their mental health and overall well-being. When a user is signed in, they gain the capability to express their emotions, drawing inspiration from the Zones of Proximal Development. From there, they can select a corresponding activity to address their current emotional state. Following the activity, users have the opportunity to reflect on their experience, tracking their emotions and insights to assess the effectiveness of the chosen activity. Additionally, they can initiate a conversation with a trusted adult, whether it's a school counselor, teacher, or a parent, for further support and guidance.</p>

## How It's Made:

**Tech used:** HTML, CSS, Bootstrap, JavaScript, EJS, Express, MongoDB, Mongoose, Git, Github

We decided to make our app with these application since they were technologies most of us were familiar with. We felt like they would be quick to start with and develop with to get the main structure of our application started for this challenge.

## Optimizations

While the main structure of our application is complete, there are many things we would have liked to add. We didn't have the chance to incorporate a backend, however if we had we would have been able to develop way more functionality, like allowing users to sign in and save the data about their interactions in the database. It also would have made it easier to develop the front end because we could have iterated over the data and wouldn't have had to repeat so much in our ejs files.

Some things we would have loved to add if we had more time were activites that coincided with the goals a user chose or the emotion they chose to work on. Also, we would have loved to add a calender feature that kept track of a users reflections after they completed an activity. While we were able to finish the UI for the soundbar, we would have also loved to incorporate a music API to actually be able to play music.

## Lessons Learned:

- We needed better communication so we could have a plan b in case things went wrong or someone wasn’t able to complete part of our project.
- We tried to create a typical git/github workflow, however for some participants who were new to git, maybe having them merge main into their branches was too much too soon.
- We should have met as a group more often so we understood our roles better.

<h2>Steps to collaborate or view this project:</h2>

<h3>Clone the Repo:</h3>
<ul>
  <li>From the terminal, <code>cd</code> into where you want to save the repo.</li>
  <li>Clone the repo:</li>
    <ul>
      <li><code>git clone git@github.com:samanthatarrice/wwcode-hackathon2023.git</code>OR</li>
      <li><code>https://github.com/samanthatarrice/wwcode-hackathon2023.git</code>if you don't have your SSH key set up.</li>
    </ul>
  <li>Make sure you are in the cloned repo directory:</li>
  <ul>
    <li><code>cd wwcode-hackathon2023</code></li>
  </ul>
</ul>

<h3>Installations:</h3>
<ul>
  <li>Run <code>npm install</code></li>
  <li>Install <a href="https://www.npmjs.com/package/nodemon" target="_blank">Node</a> (or upgrade to version 18) if you don't have it already.</li>
  <li>Install <a href="https://www.npmjs.com/package/nodemon" target="_blank">Nodemon</a>:</li>
  <ul>
    <li>This is optional, but highly recommended because you won't need to constantly restart your server when you change anything.</li>
    <li><code>npm install -g nodemon</code></li>
  </ul>
  <li>Install MongoDB:</li>
  <ul>
    <li>Either follow along with Leon's instructions or this <a href="https://youtu.be/wcx3f0eUiAw?si=kCOEdtTTZT2sbIbU" target="_blank">video</a>.</li>
  </ul>
</ul>

<h3>Start Server:</h3>
<ul>
  <li><code>nodemon app.js</code>OR</li>
  <li><code>node app.js</code>if you didn't install nodemon</li>
</ul>

<h3>Create a branch, commit changes and create pull requests (PR):</h3>
<ul>
  <li><code>git checkout -b &lt;your-branch-name-here&gt;</code></li>
  <li><code>git add .</code></li>
  <li><code>git commit -m "Your commit message here"</code></li>
  <li><code>git push origin &lt;your-branch-name-here&gt;</code></li>
    <ul>
      <li>You will see a link in your terminal to go to the PR on Github.</li>
      <li>Add reviewers, assign yourself, and any relevant notes.</li>
      <li>Create your PR!</li>
    </ul>
</ul>
