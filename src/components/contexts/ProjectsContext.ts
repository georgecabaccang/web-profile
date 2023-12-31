import testimage from "../../assets/thumbnails/websites/movies-website.png";
import Ecommerce from "../../assets/thumbnails/websites/ecommerce-website.png";
import MatchingGame from "../../assets/thumbnails/websites/matching-game-thumbnail.png";

const projects = [
    {
        id: 1,
        title: "Movie List Website",
        stack: "MERN",
        thumbnail: testimage,
        link: "https://front-movie-list.vercel.app/",
        description:
            "A basic add-a-movie-watched tracker website utilizing a database without authentication. Users can submit movies they've watched via a form, and the database stores movie information, including titles and watched dates. The website provides a convenient way for users to maintain a personal record of their movie-watching experiences.",
    },
    {
        id: 2,
        title: "e-Commerce Website",
        stack: "MERN",
        thumbnail: Ecommerce,
        link: "https://fronte-commerce.vercel.app/",
        description:
            "An e-commerce website featuring user authentication and a robust database. It allows customers to create accounts, log in and navigating around the website securely with tokens. The database efficiently stores product listings, customer information, and order history, ensuring seamless transactions and enhancing user satisfaction.",
    },
    {
        id: 3,
        title: "Simple Matching Game",
        stack: "MERN",
        thumbnail: MatchingGame,
        link: "https://matching-game-lovat.vercel.app/",
        description:
            "A responsive simple matching game with three modes and four grid sizes. This small game has a feature of saving your high score if you make the top ten for each mode and size.",
    },
];
export default projects;
