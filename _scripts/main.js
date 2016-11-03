//=include ./libs/vue.js
//=include ./questions.js

var questions = [];

var app = new Vue({
    el: '#quiz',
    data: data,
    methods: {
        newQuestion: function() {
            this.settings.index++;
            this.settings.show_answer = false;
            var new_number = questions[this.settings.index];
            this.current.question = this.question_bank[new_number].question;
            this.current.answer = this.question_bank[new_number].answer;
        },
        showAnswer: function() {
            this.settings.show_answer = true;
        },
        start: function() {
            this.started = true;
            this.newQuestion();
        },
        shuffle: function(array) {
            var counter = array.length;

            // While there are elements in the array
            while (counter > 0) {
                // Pick a random index
                var index = Math.floor(Math.random() * counter);

                // Decrease counter by 1
                counter--;

                // And swap the last element with it
                var temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
            }
            return array;
        },
        init: function() {
            this.settings.total = app.question_bank.length;

            for (var i = 1; i <= this.settings.total; i++) {
                questions.push(i);
            }
            questions = this.shuffle(questions);
        }
    }
});

app.init();

console.log("I'll save ye the effort...");
console.log("The site is a heavy simple Vue JS app and all the questions with answers are stored in plain text in the JavaScript (nae fancy shite going on here). ");
console.log("Give us a shout on twitter in you want the GitHub repo public ;) @chrisssycollins");
console.log("Cheers,");
console.log("Chrissy x");
