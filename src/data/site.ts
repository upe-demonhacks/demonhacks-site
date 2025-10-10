export const siteConfig = {
  name: "DemonHacks 2024",
  tagline: "Where Innovation Meets Opportunity",
  description: "Join us for DePaul University's premier hackathon hosted by UPE. 48 hours of coding, learning, and building the future.",
  date: "March 15-17, 2024",
  location: "DePaul University, Chicago",
  registrationUrl: "https://tally.so/r/mORqVR",
  email: "deltaupe@cdm.depaul.edu",
  website: "https://upe.cdm.depaul.edu/",
  social: {
    instagram: "https://instagram.com/depaul_upe",
    linkedin: "https://linkedin.com/company/depaul-upe",
    github: "https://github.com/depaul-upe"
  },
  stats: {
    participants: "200+",
    prizes: "$10,000+",
    sponsors: "15+",
    hours: "48"
  }
};

export const schedule = [
  {
    day: "Friday, March 15",
    events: [
      { time: "6:00 PM", title: "Registration & Check-in", description: "Get your swag and meet fellow hackers" },
      { time: "7:00 PM", title: "Opening Ceremony", description: "Welcome address and sponsor presentations" },
      { time: "8:00 PM", title: "Team Formation", description: "Find your teammates and start ideating" },
      { time: "9:00 PM", title: "Hacking Begins!", description: "Let the coding commence" },
      { time: "11:00 PM", title: "Late Night Snacks", description: "Fuel up for the night ahead" }
    ]
  },
  {
    day: "Saturday, March 16", 
    events: [
      { time: "8:00 AM", title: "Breakfast", description: "Start your day right" },
      { time: "12:00 PM", title: "Lunch & Tech Talks", description: "Learn from industry experts" },
      { time: "3:00 PM", title: "Workshop Sessions", description: "Level up your skills" },
      { time: "6:00 PM", title: "Dinner", description: "Networking and refueling" },
      { time: "10:00 PM", title: "Gaming Night", description: "Take a break and have fun" }
    ]
  },
  {
    day: "Sunday, March 17",
    events: [
      { time: "8:00 AM", title: "Breakfast", description: "Final stretch fuel" },
      { time: "12:00 PM", title: "Submissions Due", description: "Submit your projects" },
      { time: "1:00 PM", title: "Judging Period", description: "Present to our expert judges" },
      { time: "4:00 PM", title: "Closing Ceremony", description: "Awards and celebration" },
      { time: "5:00 PM", title: "Wrap Up", description: "Thanks for participating!" }
    ]
  }
];

export const faqs = [
  {
    question: "Who can participate?",
    answer: "DemonHacks is open to all university students, regardless of experience level. Whether you're a beginner or an expert, we welcome you!"
  },
  {
    question: "How much does it cost?",
    answer: "DemonHacks is completely free! We'll provide meals, snacks, swag, and prizes at no cost to participants."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, chargers, any hardware you want to hack with, and a positive attitude! We'll provide everything else."
  },
  {
    question: "Can I work on a project I started before?",
    answer: "No, all projects must be started from scratch during the hackathon. However, you can use existing libraries, APIs, and tools."
  },
  {
    question: "How are teams formed?",
    answer: "You can come with a team of up to 4 people, or join our team formation session to meet other hackers!"
  },
  {
    question: "What if I'm a beginner?",
    answer: "Perfect! We have workshops, mentors, and beginner-friendly challenges. DemonHacks is designed to be inclusive for all skill levels."
  }
];

export const sponsors = {
  title: [
    { name: "Microsoft", logo: "/sponsors/microsoft.svg", tier: "title" },
  ],
  gold: [
    { name: "Google", logo: "/sponsors/google.svg", tier: "gold" },
    { name: "Amazon", logo: "/sponsors/amazon.svg", tier: "gold" },
  ],
  silver: [
    { name: "GitHub", logo: "/sponsors/github.svg", tier: "silver" },
    { name: "Figma", logo: "/sponsors/figma.svg", tier: "silver" },
    { name: "Vercel", logo: "/sponsors/vercel.svg", tier: "silver" },
  ]
};