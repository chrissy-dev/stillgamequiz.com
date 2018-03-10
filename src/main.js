// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

var state = {
  'currentQuestion': 0,
  'incorrect': 0,
  'correct': 0,
  'questions': [
    {
      'question': 'Winstons grandson Joe is fighting in a boxing match. What is the full name of the boy he is fighting?',
      'answer': 'Barry Drummond',
      'answers': [
        'Gary Drummond', 'Barry Drummond', 'Stevie Drimmon', 'Harry Hoofter'
      ],
      'userAnswer': null
    }, {
      'question': 'In the episode Faimly Jack and Victor arrive at central station very early. What time did they arrive?',
      'answer': '10:00',
      'answers': [
        '09:00', '09:30', '10:00', '10:30'
      ],
      'userAnswer': null

    }, {
      'question': 'How much did Winston win at Stevie’s bookie before Stevie did the off?',
      'answer': '£32,500',
      'answers': [
        '£28,500', '£16,000', '£32,000', '£32,500'
      ],
      'userAnswer': null
    }, {
      "question": "What was controversial Tam's prize for winning the card game in the episode \"Cairds\"?",
      "answer": "Auld Joes Buggy",
      'answers': [
        'Auld Joes Buggy', 'Auld Joes Watch', 'Money', 'Auld Joes Zimmer'
      ],
      'userAnswer': null
    }, {
      "question": "In the episode \"Dial-A-Bus\" Boaby cycles round the countryside and stops at a bar. The barman asks what he does for a living. What does he say he does for a living?",
      "answer": "Lawyer",
      'answers': [
        'Barman', 'Polis', 'Lawyer', 'Accountant'
      ],
      'userAnswer': null
    }, {
      "question": "What was the name of the pizza shop girl that Boabby was trying to fire into?",
      "answer": "Stacey",
      'answers': [
        'Sally', 'Stacey', 'Lolita', 'Margo'
      ],
      'userAnswer': null
    }, {
      "question": "There's a guess the name of the dog competition going on, and the prize is a robot dog. What name does Jack choose?",
      "answer": "Richard",
      'answers': [
        'Matthew', 'Fydo', 'Rex', 'Richard'
      ],
      'userAnswer': null
    }, {
      "question": "Jack and Victor dressed up for The Clansman's fancy dress night.",
      "answer": "True",
      'answers': [
        'True', 'False'
      ],
      'userAnswer': null
    }, {
      "question": "Innes isn't allowed to drink Midori. What was the name of the shop Isa said he'd get it from?",
      "answer": "Food Fayre",
      'answers': [
        'Fast Fayre', 'Frescos', 'Food Fayre', 'Navids'
      ],
      'userAnswer': null
    }, {
      "question": "Winston is asked to look after his grandson while his daughter and husband go to Blackpool. What is the name of Winstons grandson?",
      "answer": "Thomas",
      'answers': [
        'Thomas', 'Billy', 'Matthew', 'Jonny'
      ],
      'userAnswer': null
    }, {
      "question": "When Jack and Victor are hospital DJs they have to get the record off of Isa. What was the name of that song and who sang it?",
      "answer": "Rose Marie by Nelson Eadie",
      'answers': [
        'Nelson Eadie by Rose Marie', 'Rose Marie by Nelson Eadie', 'Marie Rose by Eadie Nelson', 'Rose Marie by Eadie Nelson'
      ],
      'userAnswer': null
    }, {
      "question": "Jack takes Victor on a sea faring adventure down the River Kelvin for his birthday. What age was Victor turning?",
      "answer": "75",
      'answers': [
        '70', '75', '80', '65'
      ],
      'userAnswer': null
    }, {
      "question": "Jack and Victor are chauffeurs for the day in Hugie Cassies car. They pick up Fergies girlfriend Sinead and her dad does a scramble. How much did he throw out?",
      "answer": "3 pound and a power caird",
      'answers': [
        '3 pound and a power caird', '2 pound and a power caird', '4 pound and a power caird', '5 pound and a power caird'
      ],
      'userAnswer': null
    }, {
      "question": "When Jack and Victor go back to school to study medical profiecency. How much was a pint in their student bar?",
      "answer": "75p",
      'answers': [
        '65p', '70p', '75p', '80p'
      ],
      'userAnswer': null
    }, {
      "question": "Who was Wullie Napiers next door neighbour?",
      "answer": "Manky Frankie",
      'answers': [
        'Manky Frankie', 'Victor McDade', 'Isa', 'Big Charlie'
      ],
      'userAnswer': null
    }, {
      "question": "Navid has at least one child.",
      "answer": "True",
      'answers': [
        "True", "False"
      ],
      'userAnswer': null
    }, {
      "question": "How much money does Winston win from a can of cat food?",
      "answer": "£500",
      'answers': [
        '£200', '£300', '£400', '£500'
      ],
      'userAnswer': null
    }, {

      "question": "Winston gets attacked by a dog while shouting abuse at two neds, what was the dog called? ",

      "answer": "Kiazer",
      'answers': [
        'Kiazer', 'Tiazer', 'Miazer', 'Riazar'
      ],
      'userAnswer': null
    }, {

      "question": "What does Victor bring with him when he goes up to visit Bert Finlay?",

      "answer": "Mint Yo-Yos",
      'answers': [
        'Mint Yo-Yos', 'Toffee Yo-Yos', 'Wagon Wheels', 'Tunnocks Tea Cakes'
      ],
      'userAnswer': null
    }, {

      "question": "How does Winston get revenge on Tam for embarssing him in front of Frances in the clansman?",

      "answer": "Shites in his book",
      'answers': [
        'Burns his book', 'Bins his book', 'Hides his book', 'Shites in his book'
      ],
      'userAnswer': null
    }, {

      "question": "When Victor gets a car, how much does he pay for insurance?",

      "answer": "£300",
      'answers': [
        '£250', '£300', '£350', '£400'
      ],
      'userAnswer': null
    }, {

      "question": "What was the name of the street Tam was brought up in?",

      "answer": "Brogen Street",
      'answers': [
        'Brogen Street', 'Finlet Street', 'High Street', 'Cathkin Street'
      ],
      'userAnswer': null
    }, {

      "question": "What year did Pete the jakey invent the beefy bake?",

      "answer": "1979",
      'answers': [
        '1970', '1972', '1975', '1979'
      ],
      'userAnswer': null
    }, {

      "question": "What day of the week did Pete the jakey invent the beefy bake?",

      "answer": "Sunday",
      'answers': [
        'Monday', 'Tuesday', 'Wednesday', 'Sunday'
      ],
      'userAnswer': null
    }, {
      "question": "What was the number of the tram that knocked Frank McCallum down?",
      "answer": "46",
      'answers': [
        '26', '36', '46', '56'
      ],
      'userAnswer': null
    }, {
      "question": "How much did Victor have to pay for a meal after their waiter was sacked?",
      "answer": "£140",
      'answers': [
        '£100', '£110', '£130', '£140'
      ],
      'userAnswer': null
    }, {

      "question": "What was the name of the waiter that got sacked while serving Jack and Victor",

      "answer": "Norman",
      'answers': [
        'Norman', 'Stephen', 'Matthew', 'Paul'
      ],
      'userAnswer': null
    }, {

      "question": "Who owns a house on the island Hotenanny?",

      "answer": "Auld Joe",
      'answers': [
        'Big Arthur', 'Peggie', 'Auld Joe',  'Victors Son'
      ],
      'userAnswer': null
    }, {

      "question": "When Victor gets a car what make was the car?",

      "answer": "Skoda",
      'answers': [
        'SEAT', 'Skoda', 'Volkswagen', 'Audi'
      ],
      'userAnswer': null
    }, {

      "question": "Tam and Winston get early access to the park in the back of a...?",

      "answer": "Ice Cream Van",
      'answers': [
        'Ice Cream Van', 'Car', 'Delivery Van', 'Bin Lorry'
      ],
      'userAnswer': null
    }, {

      "question": "Where does Archie the hermet hide all his social security money?",

      "answer": "In his couch",
      'answers': [
        'Under his bed', 'In his couch', 'In his cupboard', 'Under his floor'
      ],
      'userAnswer': null
    }, {

      "question": "Just before Peggy and Winston start brawlin in the butchers, how many chigot chops does Peggy buy?",

      "answer": "6",
      'answers': [
        '6', '7', '8', '9'
      ],
      'userAnswer': null
    }, {

      "question": "What does the mat outside Jack's flat say?	",

      "answer": "Weclome",
      'answers': [
        'Weclome', 'Welcome', 'Welcoem', 'Weclum'
      ],
      'userAnswer': null
    }, {

      "question": "Mrs. Begg catches Winston dancing in the bookies because his horse won. Name the horse.",

      "answer": "Scotch Corner",
      'answers': [
        'Scotch Canter', 'Scotch Corner', 'Straight Scotch', 'Harry Hoofter'
      ],
      'userAnswer': null
    }, {

      "question": "Who 'died' and 'came back to life' only to discover his house had been robbed of things he had borrowed from other people?	",

      "answer": "Wullie Mackintosh",
      'answers': [
        'Wullie Wallace', 'Wullie Reid', 'Wullie Napier', 'Wullie Mackintosh'
      ],
      'userAnswer': null
    }, {

      "question": "Who took most of their clothes off at Victor and Betty's 1975 Hogmanay party?	",

      "answer": "Isa",
      'answers': [
        'Tam', 'Jack', 'Victor', 'Isa'
      ],
      'userAnswer': null
    }, {

      "question": "Where does Big Innes live?	",

      "answer": "Elgin",
      'answers': [
        'Aberdeen', 'Inverness', 'Elgin', 'Skye'
      ],
      'userAnswer': null
    }, {

      "question": "When mocking Winston in 'Oot', where does Chris say his van is?",

      "answer": "In an envelope",
      'answers': [
        'In an envelope', 'In an box', 'At the depot', 'Outside'
      ],
      'userAnswer': null
    }, {

      "question": "What is the job of Boabby's porn star alias?	",

      "answer": "Troy",
      'answers': [
        'Droy', 'Troy', 'Roy', 'Rob'
      ],
      'userAnswer': null
    }, {

      "question": "What name does Winston adopt when pretending to be the owner of the Clansman?",

      "answer": "Harvey Gallagher",
      'answers': [
        'Chris Turner', 'Griff McKendrick', 'Harvey Gallagher', 'Conor Gallacher'
      ],
      'userAnswer': null
    }, {

      "question": "What do Jack and Victor bring to the pub in case the McGills have been in?",

      "answer": "Swords",
      'answers': [
        'Knifes', 'Swords', 'Guns', 'Machetes'
      ],
      'userAnswer': null
    }, {

      "question": "Who is Hughie's widow the double of?",

      "answer": "Ken Dodd",
      'answers': [
        'Ken Dodd', 'Billy Dodds', 'Kenny Dalgliesh', 'Arhur Numan'
      ],
      'userAnswer': null
    }, {
      "question": "What is the name of the pub Winston hasn't visited in 15 years?",
      "answer": "Browns",
      'answers': [
        'Nicols', 'The Rest', 'Browns', 'Black Swan'
      ],
      'userAnswer': null
    }, {
      "question": "With what caption does Tam win the scone competition?",
      "answer": "S'gone",
      'answers': [
        'S\'gone', 'Sconeio', 'It\'s Gone', 'Gone'
      ],
      'userAnswer': null
    }, {
      "question": "Where does Tam propose to Frances?	",
      "answer": "The Library",
      'answers': [
        'The Clansman', 'The Library', 'The Bookies', 'At Home'
      ],
      'userAnswer': null
    }, {
      "question": "Which appliance causes Tam to become overly-generous?",
      "answer": "Toaster",
      'answers': [
        'Toaster', 'Kettle', 'Fridge', 'Cooker'
      ],
      'userAnswer': null
    }, {
      "question": "With what item does Tam claim to have modified Navid's van?	",
      "answer": "Pishy mattress",
      'answers': [
        'Pishy blanket', 'Pishy mattress', 'Pishy pillows', 'Pishy couch'
      ],
      'userAnswer': null
    }, {
      "question": "What item of food 'humps' Pete to reveal it is him who was raiding Navid's bins?",
      "answer": "Banana",
      'answers': [
        'Banana', 'Potato', 'Apple', 'Orange'
      ],
      'userAnswer': null
    }, {
      "question": "What age is Methadone Mick?",
      "answer": "23",
      'answers': [
        '21', '22', '23', '24'
      ],
      'userAnswer': null
    }, {
      "question": "What is the name of Jacques Cousteau's boat?",
      "answer": "The Calypso",
      'answers': [
        'The Calypso', 'The Drum', 'El Capso', 'The Caledonia'
      ],
      'userAnswer': null
    }
  ],
  'incorrectQuestions': []
}

/* eslint-disable no-new */
new Vue({el: '#app', router, components: {
    App
  }, data: state, template: '<App/>'})
