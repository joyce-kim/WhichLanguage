var QuestionList = [
  {
    id: 'start',
    title:'Why do you want to learn programming?',
    answers: [
      {option: 'For my kids', result: 'Python'},
      {option: 'Just for fun', next: 9},
      {option: 'Improve myself', next: 9},
      {option: 'To make money', next: 1}
    ]
  },
  {
    id: '1',
    title: 'Do you want to get a job or create a startup?',
    answers: [
      {option: 'Get a job', next: 2},
      {option: 'I have a startup idea!', next: 12}
    ]
  },
  {
    id: '2',
    title: 'Which platform/field?',
    answers: [
      {option: 'I want to work for big tech companies', next: 3},
      {option: "Doesn't matter I just want $$$", result: 'Java'},
      {option: 'Web', next: 4},
      {option: 'Enterprise', next: 6},
      {option: 'Mobile', next: 13},
      {option: '3D/Gaming', result: 'C++'}
    ]
  },
  {
    id: '3',
    title: 'Which company would you rather work for?',
    answers: [
      {option: 'Facebook', result: 'Python'}, 
      {option: 'Google', result: 'Python'},
      {option: 'Apple', result: 'Objective-C'},
      {option: 'Microsoft', result: 'C#'}
    ]
  },
  {
    id: '4',
    title: 'Front-end (web interface) or back-end ("brain" behind a website)?',
    answers: [
      {option: 'Front-end', result: 'Javascript'},
      {option: 'Back-end', next: 5}
    ]
  },
  {
    id: '5',
    title: 'I want to work for...',
    answers: [
      {option: 'Corporate', next: 6},
      {option: 'Startup', next: 7}
    ]
  },
  {
    id: '6',
    title: 'What do you think about Microsoft?',
    answers: [
      {option: 'I&#39;m a fan!', result: 'C#'},
      {option: 'Not bad', result: 'Java'},
      {option: 'Sucks', result: 'Java'}
    ]
  },
  {
    id: '7',
    title: 'Do you want to try something new with huge potential, but less mature?',
    answers: [
      {option: 'Yes', result: 'Javascript'},
      {option: 'Not sure', next: 8},
      {option: 'No', next: 8}
    ]
  },
  {
    id: '8',
    title: 'Which one is your favorite toy?',
    answers: [
      {option: 'Lego', result: 'Python'},
      {option: 'Play-Doh', result: 'Ruby'},
      {option: 'I have an old & ugly toy, but I love it so much!', result: 'PHP'}
    ]
  },
  {
    id: '9',
    title: 'Have a brilliant idea/platform in mind?',
    answers: [
      {option: 'Yes', next: 12},
      {option: 'Nope, just want to get started', next: 10}
    ]
  },
  {
    id: '10',
    title: 'I prefer to learn things...',
    answers: [
      {option: 'The easy way', result: 'Python'},
      {option: 'The best way', result: 'Python'},
      {option: 'The slightly harder way', next: 11},
      {option: 'The really hard way (but easier to pick up other languages in the future)', result: 'C++'}
    ]
  },
  {
    id: '11',
    title: 'Auto or manual car?',
    answers: [
      {option: 'Auto', result: 'Java'},
      {option: 'Manual', result: 'C'}
    ]
  },
  {
    id: '12',
    title: 'What platform/field?',
    answers: [
      {option: '3D/Gaming', result: 'C++'},
      {option: 'Mobile', next: 13},
      {option: 'Enterprise', next: 6},
      {option: 'Web', next: 4},
    ]
  },
  {
    id: '13',
    title: 'Which OS?',
    answers: [
      {option: 'iOS', result: 'Objective-C'},
      {option: 'Android', result: 'Java'}
    ]
  }

];

// export default QuestionList;
module.exports = QuestionList;