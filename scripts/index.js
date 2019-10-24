const seedDocs = [
  {
    headline: "Your Wednesday Evening Briefing",
    summary: "Here’s what you need to know at the end of the day.",
    url:
      "https://www.nytimes.com/2019/10/23/briefing/syria-google-california.html"
  },
  {
    headline: "Listen to ‘The Daily’",
    summary: "The “most damning” impeachment testimony yet.",
    url:
      "https://www.nytimes.com/2019/10/23/podcasts/the-daily/trump-ukraine-impeachment-william-bill-taylor.html"
  },
  {
    headline: "In the ‘NYT Parenting’ Newsletter",
    summary: "The lasting trauma of infertility.",
    url:
      "https://www.nytimes.com/2019/10/23/parenting/the-lasting-trauma-of-infertility.html"
  },
  {
    headline: "The President’s War on the ‘Deep State’ Turns Against Him",
    summary:
      "The impeachment inquiry is in some ways the culmination of a battle between Mr. Trump and the institutions he distrusted and disparaged.",
    url:
      "https://www.nytimes.com/2019/10/23/us/politics/trump-deep-state-impeachment.html"
  },
  {
    headline:
      "Ukraine Knew of Aid Freeze by Early August, Undermining Trump Claims",
    summary:
      "Top officials were told in early August about the delay of $391 million in security assistance, undercutting a chief argument President Trump has used to deny any quid pro quo.",
    url:
      "https://www.nytimes.com/2019/10/23/us/politics/ukraine-aid-freeze-impeachment.html"
  },
  {
    headline: "Inside ISIS Prison, Children Ask Their Fate",
    summary:
      "A rare inside look by New York Times journalists exposes an enormous legal and humanitarian crisis, one that the world has largely chosen to ignore.",
    url:
      "https://www.nytimes.com/2019/10/23/world/middleeast/what-is-going-to-happen-to-us-inside-isis-prison-children-ask-their-fate.html"
  },
  {
    headline: "Why Protests Are Flaring Up Across the Globe",
    summary:
      "An increase on subway fares. A tax on WhatsApp calls. The price of onions. Pocketbook items are driving what has been a steady drumbeat of unrest.",
    url:
      "https://www.nytimes.com/2019/10/23/world/middleeast/global-protests.html"
  },
  {
    headline:
      "Jack Reacher Is Still Restless. But His Creator Has Settled Down.",
    summary:
      "With a TV project in the works and his 24th Reacher novel in stores this month, Lee Child has put down roots out West.",
    url:
      "https://www.nytimes.com/2019/10/23/books/jack-reacher-lee-child-wyoming.html"
  },
  {
    headline:
      "Live Updates: Nationals vs. Astros in Game 2 of the World Series",
    summary:
      "Washington holds a 1-0 lead in the series. Follow along for live updates and analysis.",
    url:
      "https://www.nytimes.com/2019/10/23/sports/baseball/nationals-astros.html"
  },
  {
    headline:
      "Why Did Republicans Storm the Capitol? They’re Running Out of Options",
    summary:
      "As more testimony is disclosed, it becomes clearer that President Trump’s only defense against impeachment is to distract from the facts.",
    url:
      "https://www.nytimes.com/2019/10/23/opinion/impeachment-hearing-republicans.html"
  },
  {
    headline: "Are Video Games Really Addictive?",
    summary:
      "New forms of entertainment have often provoked alarmism, but new research makes the possibility hard to ignore.",
    url:
      "https://www.nytimes.com/2019/10/22/magazine/can-you-really-be-addicted-to-video-games.html"
  },
  {
    headline: "Inside the Nordstrom Dynasty",
    summary: "One of the great family businesses faces the start-up age.",
    url:
      "https://www.nytimes.com/2019/10/23/style/nordstrom-family-department-stores.html"
  },
  {
    headline: "How Can I Silence My Fear of Failure When Writing?",
    summary:
      "“You are likely your own cruelest reader,” says one of our advice columnists.",
    url:
      "https://www.nytimes.com/2019/10/23/t-magazine/writing-fear-of-failure.html"
  }
];

const db = require("../models/index.js");
const mongoose = require("mongoose");
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mongoNews",
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("mongoose connection is successful");
    }
  }
);

db.Headline.remove({}).then(function(response) {
  console.log("Data Removed");
  console.log(response);
  db.Headline.insertMany(seedDocs).then(response => {
    console.log("Seed Insert sucessful");
  });
});
