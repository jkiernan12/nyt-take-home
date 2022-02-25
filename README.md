<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jkiernan12/nyt-take-home">
    <h2>📰</h2>
  </a>

<h3 align="center">NYT Reader</h3>

  <p align="center">
    A news reader pulling data from the New York Times API
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Tools & Design</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![overview](https://user-images.githubusercontent.com/73560269/155743947-4604f111-a5a5-4f35-9ce7-975132d64bce.png)

This project as a take-home challenge for the Turing School of Software & Design. The rubric can be found [here](https://mod4.turing.edu/projects/take_home/take_home_rubric). 

As a take-home project, the scope of this app was intended to be relatively minimal, taking approximately eight hours, while still hitting on all the major components of a frontend application. It includes API calls (to the [New York Times Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview)), routing of multiple views, search functionality, and responsive design.

This project uses React, React Router, and data pulled from a RESTful API to gather and display stories. Users can view a main page with multiple news sections, news from a single category, and an individual article page.

<p align="right">(<a href="#top">back to top</a>)</p>



### Tools & Design

* [React.js](https://reactjs.org/)
* [React Router](https://reactrouter.com/)
* HTML, CSS, JS

To save on time, I decided to mimic the design of a pre-existing newsreader: Google News. The imitated the category sidebar, search header, and article cards. The layout is below:
![design](https://user-images.githubusercontent.com/73560269/155751118-8e27822b-c8ba-4a96-bd2d-ba893e2ecf39.png)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

If you'd like to interact with it on your local machine, follow the instructions below.

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:jkiernan12/nyt-take-home.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Deploy the project on your machine
   ```sh
   npm start
   ```
4. Create an .env in the project's root directory, get an [API key from NYT](https://developer.nytimes.com/), and update the .env with your key values
   ```sh
   REACT_APP_NYT_KEY=YOUR_KEY_HERE

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

On the main page, the user sees five stories per category. They can select a story to see an article page. On the article page, they can select the 'Read more' button to go to the story on the New York Times. 

The sidebar has links to all of the news categories. If the user selects one, they will be shown a listing of all the stories served by the API from that category. They can navigate back to the main page by selecting the NYT logo in the upper left corner.

Users can search for a story on the page with the search bar on the top and hitting the enter key or clicking the magnifying glass. Search results can be cleared by selecting the 'Clear search' button in the header.

<details>
<summary>Main Page</summary>
<br>
<img src='https://user-images.githubusercontent.com/73560269/155743947-4604f111-a5a5-4f35-9ce7-975132d64bce.png' />
</details>

<details>
<summary>News Category Page</summary>
<br>
<img src='https://user-images.githubusercontent.com/73560269/155745834-b9aedfac-67da-408b-90cd-bcdf6fbbc85a.png' />

</details>

<details>
<summary>Article Page</summary>
<br>
<img src='https://user-images.githubusercontent.com/73560269/155746049-c58565a9-2584-48f0-b6fc-b202213ea0d3.png' />

</details>

<details>
<summary>Search View</summary>
<br>
<img src='https://user-images.githubusercontent.com/73560269/155746443-a6462318-5515-42e2-b17e-e1098f459609.png' />

</details>


<p align="right">(<a href="#top">back to top</a>)</p>


## Future Updates 
I was able to accomplish a lot for this project, especially considering it was completed in approximately a work day. There are definitely a few additionally things I would like to incorporate: 
* Deploy to Heroku
* Add testing with Cypress
* Refactor search functionality to its own view (ie component)
* Improved accessibility experience
<!-- CONTACT -->
## Contributors

**John Kiernan**: [GitHub](https://github.com/jkiernan12) | [LinkedIn](https://www.linkedin.com/in/johnfkiernan/) | [jkiernan12@yahoo.com](mailto:john@johnkiernan.com)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jkiernan12/nyt-take-home.svg?style=for-the-badge
[contributors-url]: https://github.com/jkiernan12/nyt-take-home/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jkiernan12/nyt-take-home.svg?style=for-the-badge
[forks-url]: https://github.com/jkiernan12/nyt-take-home/network/members
[stars-shield]: https://img.shields.io/github/stars/jkiernan12/nyt-take-home.svg?style=for-the-badge
[stars-url]: https://github.com/jkiernan12/nyt-take-home/stargazers
[issues-shield]: https://img.shields.io/github/issues/jkiernan12/nyt-take-home.svg?style=for-the-badge
[issues-url]: https://github.com/jkiernan12/nyt-take-home/issues
[license-shield]: https://img.shields.io/github/license/jkiernan12/nyt-take-home.svg?style=for-the-badge
[license-url]: https://github.com/jkiernan12/nyt-take-home/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/johnfkiernan
[product-screenshot]: images/screenshot.png