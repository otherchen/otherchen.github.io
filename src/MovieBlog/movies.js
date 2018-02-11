import { mapValues } from 'lodash';

const movies = {
  jumanji: {
    title: "Jumanji: Welcome to the Jungle",
    director: "Jake Kasdan",
    actors: ["Kevin Hart", "Dwayne \"The Rock\" Johnson", "Jack Black", "Karen Gillan"],
    rating: "6.3",
    date: '2/4/2018',
    review: [
      `
        Hear ye, hear ye. Going into this movie, I was not expecting a grand epic or a deep dive into human emotions. I expected the 
        acting to be questionable and the writing, so-so. Of course, it also had a lot to live up to considering it was a
        sequel to the late Robin William's original Jumanji. Before I get into my review, I'll quickly describe the premise. "Jumanji:
        Welcome to the Jungle" is a story about 4 drastically different highschool students who discover an old video game 
        after being assigned clean-up duty for detention. After choosing their avatars, they are sucked into the game and
        adventures ensue as they try to beat the game and return to the real world. 
      `,
      `
        For movies like this, and when expectations are reasonable, you can definitely have a fun time if you let yourself. What
        I mean by that is, the acting nor the script is going to be top notch but there is still a good time to be had in the theater. 
        The Rock and Kevin Hart aren't terrible actors by any means, but nor are they classically trained Thespians. They work reasonably 
        well in this movie and aren't afraid to make fun of themselves or each other. Their chemistry with each other as well as with their other
        co-stars, Karen and Jack is a large part of what makes this movie likable and enjoyable to watch.
      `,
      `
        There were some things I didn't like about the movie. The plot was very predictable and the writing was very lazy.
        Nick Jonas, who plays a fairly important character, stood out like a sore thumb, even amongst mediocre performances. His noticably 
        bad acting and line delivery took me completely out of the movie several times. I also generally like Kevin Hart but I find that 
        he plays basically the same character in all of his movies. There were a few of his jokes that hit well but just as many that fell flat.
      `,
      `
        What I did appreciated about this movie was the action and chemistry between the actors. Overall, I had a decent time
        at the theater and could recommend certain people to see it on the big screen.
      `,
    ],
    largeImage: "jumanji-large.jpg",
    smallImage: "jumanji-small.jpg"
  },
  fake1: {
    title: "Fake Movie 1",
    description: "Fake Description 1",
    rating: "10",
    review: "fake review 1",
    largeImage: "http://via.placeholder.com/700x700",
    smallImage: "http://via.placeholder.com/200x200"
  },
  fake2: {
    title: "Fake Movie 2",
    description: "Fake Description 2",
    rating: "10",
    review: "fake review 2",
    largeImage: "http://via.placeholder.com/700x700",
    smallImage: "http://via.placeholder.com/200x200"
  }
};

const isUrl = (str) => str.indexOf('http') !== -1;
const addPath = (image) => `/public/img/movies/${image}`;
const getImage = (image) => isUrl(image) ? image : addPath(image); 

export default mapValues(movies, movie => ({
  ...movie,  
  largeImage: getImage(movie.largeImage),
  smallImage: getImage(movie.smallImage), 
}))
