webpackJsonp([0],{"0Dl/":function(e,s){},Do8U:function(e,s){},NHnr:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t("7+uW"),a={render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:"fade"}},[s("router-view")],1)],1)},staticRenderFns:[]};var r=t("VU/8")({name:"App"},a,!1,function(e){t("UAt6")},null,null).exports,i=t("/ocq"),o={name:"HelloWorld",data(){return{state:this.$root.$data,timer:"15:00"}},mounted(){this.state.questions=this.shuffle(this.state.questions),this.startTimer()},methods:{shuffle(e){for(var s=e.length;s>0;){var t=Math.floor(Math.random()*s),n=e[--s];e[s]=e[t],e[t]=n}return e},submitQuestion(e){this.state.questions[this.state.currentQuestion].userAnswer=e,String(this.state.questions[this.state.currentQuestion].answer)===String(e)?this.state.correct++:(this.state.incorrect++,this.state.incorrectQuestions.push(this.state.currentQuestion)),this.state.currentQuestion+1===this.state.questions.length?this.$router.push("results"):this.state.currentQuestion++},startTimer(){var e=this.timer.split(/[:]+/),s=e[0],t=this.checkSecond(e[1]-1);59==t&&(s-=1),s<0&&(window.location="http://localhost:8080/#/oot-ae-time"),this.timer=s+":"+t,setTimeout(this.startTimer,1e3)},checkSecond:e=>(e<10&&e>=0&&(e="0"+e),e<0&&(e="59"),e)}},u={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"center vh-100 w-100 w-50-l pa4"},[t("header",[t("div",{staticClass:"dt w-100"},[e._m(0),e._v(" "),t("div",{staticClass:"dtc w-50 tr v-mid fw6"},[e._v("\n        "+e._s(e.state.currentQuestion+1)+"/"+e._s(e.state.questions.length)+" "),t("span",{staticClass:"black-20"},[e._v("|")]),e._v(" "+e._s(e.timer)+"\n      ")])])]),e._v(" "),t("div",{staticClass:"center pa4 w-75-l"},[t("p",{staticClass:"f7 tc black-30"},[e._v("\n      Question "+e._s(e.state.currentQuestion+1)+"\n    ")]),e._v(" "),t("h2",{staticClass:"lh-copy tc measure"},[e._v(e._s(e.state.questions[e.state.currentQuestion].question))])]),e._v(" "),e._l(e.state.questions[e.state.currentQuestion].answers,function(s){return t("div",{staticClass:"db w-75-l center"},[t("button",{staticClass:"f3 br1 fw5 link pointer ph3 pv3 w-100 mb3 white bg-black",attrs:{type:"button "},on:{click:function(t){e.submitQuestion(s)}}},[e._v(e._s(s))])])})],2)},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"dtc w-50 v-mid"},[s("img",{attrs:{src:"/static/logo-dark.svg",alt:"Still Game Quiz"}})])}]};var l=t("VU/8")(o,u,!1,function(e){t("ThLx")},"data-v-629f7ad7",null).exports,h={name:"Results",data(){return{state:this.$root.$data,showAnswers:!1}},mounted(){0===this.state.currentQuestion&&this.$router.push("/")},methods:{}},c={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"center vh-100 w-100 w-50-l pa4 tc"},[t("img",{attrs:{clas:"db",src:"/static/logo-dark.svg",alt:"Still Game Quiz"}}),e._v(" "),t("dl",{staticClass:"db mv4 bg-orange pa4 white"},[t("dd",{staticClass:"f6 f5-ns b ml0 lh-copy"},[e._v("You gave it a go, and ye got")]),e._v(" "),t("dd",{staticClass:"f1 f2-ns b ml0 lh-copy"},[e._v(e._s(e.state.correct)+"/"+e._s(e.state.questions.length))])]),e._v(" "),e._m(0),e._v(" "),e.showAnswers?e._e():t("button",{staticClass:"f6 br1 fw5 link pointer ph3 pv3 w-100 mb3 black",on:{click:function(s){e.showAnswers=!0}}},[e._v("Show wrang answers")]),e._v(" "),e.showAnswers?t("div",[t("h4",[e._v("You got these wrong:")]),e._v(" "),e._l(e.state.incorrectQuestions,function(s){return t("div",{staticClass:"ba mb3 pv3 ph4 b--black-10"},[t("h3",{staticClass:"mt0 fw6 lh-copy"},[e._v(e._s(e.state.questions[s].question))]),e._v(" "),t("p",[e._v("\n            Your answer: "+e._s(e.state.questions[s].userAnswer)+"\n          ")]),e._v(" "),t("p",{staticClass:"mb0"},[e._v("\n            Correct answer: "+e._s(e.state.questions[s].answer)+"\n          ")])])})],2):e._e()])},staticRenderFns:[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"db pv3"},[t("a",{staticClass:"f3 db br1 fw5 link pointer ph3 pv3 w-100 mb3 white bg-navy",attrs:{href:"https://www.facebook.com/sharer/sharer.php?u=http%3A//www.stillgamequiz.com/?utm_source=facebook"}},[e._v("Share on Facebook")]),e._v(" "),t("a",{staticClass:"f3 db br1 fw5 link pointer ph3 pv3 w-100 mb3 white bg-blue",attrs:{href:"https://twitter.com/home?status=Just%20done%20the%20Still%20Game%20Quiz,%20give%20it%20a%20go%20yersel%3A%20http%3A//www.stillgamequiz.com/?utm_source=twitter"}},[e._v("Share on Twitter")])])}]};var w=t("VU/8")(h,c,!1,function(e){t("QQ6v")},"data-v-077f5fdc",null).exports,d={name:"Start",data(){return{state:this.$root.$data}},mounted(){},methods:{}},m={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"pa4 tc vh-100 bg-white"},[e._m(0),e._v(" "),e._m(1),e._v(" "),t("div",{staticClass:"db"},[t("router-link",{staticClass:"f3 br1 fw5 link pointer ph3 pv3 w-100 mb3 white bg-black",attrs:{to:"quiz"}},[e._v("Begin the quiz")])],1),e._v(" "),e._m(2)])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"db w-100"},[s("img",{staticClass:"dib center pb4 mb3",attrs:{src:"/static/logo-dark.svg",alt:"Still Game Quiz"}})])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"db w-100"},[s("img",{staticClass:"dib center pb4 w-40-l",attrs:{src:"/static/eminem.gif",alt:"Still Game Quiz"}})])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"tc mt5"},[s("a",{staticClass:"f7 dib ph2 link mid-gray dim",attrs:{href:"https://www.twitter.com/chrisssycollins",title:"Language"}},[this._v("built by chrisssy 🍺")])])}]};var p=t("VU/8")(d,m,!1,function(e){t("0Dl/")},"data-v-7961c6f2",null).exports,f={name:"Timeout",data(){return{state:this.$root.$data}},mounted(){this.state=null},methods:{}},v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"pa4 tc db vh-100 bg-white"},[t("div",{staticClass:"db w-100"},[t("img",{staticClass:"dib center pb4 mb3",attrs:{src:"/static/logo-dark.svg",alt:"Still Game Quiz"}})]),e._v(" "),t("div",{staticClass:"db w-100"},[t("img",{staticClass:"dib center pb2",attrs:{src:"/static/oot-ae-time.gif",alt:"Still Game Quiz"}})]),e._v(" "),t("h1",{staticClass:"f2 mv4 db b"},[e._v("nae points prick")]),e._v(" "),t("a",{staticClass:"f3 db mw6 center br1 fw5 link pointer ph3 pv3 w-100 mb3 white bg-black",attrs:{href:"/"}},[e._v("Start again")])])}]};var b=t("VU/8")(f,v,!1,function(e){t("Do8U")},"data-v-e8cf854a",null).exports;n.a.use(i.a);var g=new i.a({routes:[{path:"/",name:"Start",component:p},{path:"/quiz",name:"Quiz",component:l},{path:"/results",name:"Results",component:w},{path:"/oot-ae-time",name:"Timeout",component:b}]});n.a.config.productionTip=!1;new n.a({el:"#app",router:g,components:{App:r},data:{currentQuestion:0,incorrect:0,correct:0,questions:[{question:"Winstons grandson Joe is fighting in a boxing match. What is the full name of the boy he is fighting?",answer:"Barry Drummond",answers:["Gary Drummond","Barry Drummond","Stevie Drimmon","Harry Hoofter"],userAnswer:null},{question:"In the episode Faimly Jack and Victor arrive at central station very early. What time did they arrive?",answer:"10:00",answers:["09:00","09:30","10:00","10:30"],userAnswer:null},{question:"How much did Winston win at Stevie’s bookie before Stevie did the off?",answer:"£32,500",answers:["£28,500","£16,000","£32,000","£32,500"],userAnswer:null},{question:'What was controversial Tam\'s prize for winning the card game in the episode "Cairds"?',answer:"Auld Joes Buggy",answers:["Auld Joes Buggy","Auld Joes Watch","Money","Auld Joes Zimmer"],userAnswer:null},{question:'In the episode "Dial-A-Bus" Boaby cycles round the countryside and stops at a bar. The barman asks what he does for a living. What does he say he does for a living?',answer:"Lawyer",answers:["Barman","Polis","Lawyer","Accountant"],userAnswer:null},{question:"What was the name of the pizza shop girl that Boabby was trying to fire into?",answer:"Stacey",answers:["Sally","Stacey","Lolita","Margo"],userAnswer:null},{question:"There's a guess the name of the dog competition going on, and the prize is a robot dog. What name does Jack choose?",answer:"Richard",answers:["Matthew","Fydo","Rex","Richard"],userAnswer:null},{question:"Jack and Victor dressed up for The Clansman's fancy dress night.",answer:"True",answers:["True","False"],userAnswer:null},{question:"Innes isn't allowed to drink Midori. What was the name of the shop Isa said he'd get it from?",answer:"Food Fayre",answers:["Fast Fayre","Frescos","Food Fayre","Navids"],userAnswer:null},{question:"Winston is asked to look after his grandson while his daughter and husband go to Blackpool. What is the name of Winstons grandson?",answer:"Thomas",answers:["Thomas","Billy","Matthew","Jonny"],userAnswer:null},{question:"When Jack and Victor are hospital DJs they have to get the record off of Isa. What was the name of that song and who sang it?",answer:"Rose Marie by Nelson Eadie",answers:["Nelson Eadie by Rose Marie","Rose Marie by Nelson Eadie","Marie Rose by Eadie Nelson","Rose Marie by Eadie Nelson"],userAnswer:null},{question:"Jack takes Victor on a sea faring adventure down the River Kelvin for his birthday. What age was Victor turning?",answer:"75",answers:["70","75","80","65"],userAnswer:null},{question:"Jack and Victor are chauffeurs for the day in Hugie Cassies car. They pick up Fergies girlfriend Sinead and her dad does a scramble. How much did he throw out?",answer:"3 pound and a power caird",answers:["3 pound and a power caird","2 pound and a power caird","4 pound and a power caird","5 pound and a power caird"],userAnswer:null},{question:"When Jack and Victor go back to school to study medical profiecency. How much was a pint in their student bar?",answer:"75p",answers:["65p","70p","75p","80p"],userAnswer:null},{question:"Who was Wullie Napiers next door neighbour?",answer:"Manky Frankie",answers:["Manky Frankie","Victor McDade","Isa","Big Charlie"],userAnswer:null},{question:"Navid has at least one child.",answer:"True",answers:["True","False"],userAnswer:null},{question:"How much money does Winston win from a can of cat food?",answer:"£500",answers:["£200","£300","£400","£500"],userAnswer:null},{question:"Winston gets attacked by a dog while shouting abuse at two neds, what was the dog called? ",answer:"Kiazer",answers:["Kiazer","Tiazer","Miazer","Riazar"],userAnswer:null},{question:"What does Victor bring with him when he goes up to visit Bert Finlay?",answer:"Mint Yo-Yos",answers:["Mint Yo-Yos","Toffee Yo-Yos","Wagon Wheels","Tunnocks Tea Cakes"],userAnswer:null},{question:"How does Winston get revenge on Tam for embarssing him in front of Frances in the clansman?",answer:"Shites in his book",answers:["Burns his book","Bins his book","Hides his book","Shites in his book"],userAnswer:null},{question:"When Victor gets a car, how much does he pay for insurance?",answer:"£300",answers:["£250","£300","£350","£400"],userAnswer:null},{question:"What was the name of the street Tam was brought up in?",answer:"Brogen Street",answers:["Brogen Street","Finlet Street","High Street","Cathkin Street"],userAnswer:null},{question:"What year did Pete the jakey invent the beefy bake?",answer:"1979",answers:["1970","1972","1975","1979"],userAnswer:null},{question:"What day of the week did Pete the jakey invent the beefy bake?",answer:"Sunday",answers:["Monday","Tuesday","Wednesday","Sunday"],userAnswer:null},{question:"What was the number of the tram that knocked Frank McCallum down?",answer:"46",answers:["26","36","46","56"],userAnswer:null},{question:"How much did Victor have to pay for a meal after their waiter was sacked?",answer:"£140",answers:["£100","£110","£130","£140"],userAnswer:null},{question:"What was the name of the waiter that got sacked while serving Jack and Victor",answer:"Norman",answers:["Norman","Stephen","Matthew","Paul"],userAnswer:null},{question:"Who owns a house on the island Hotenanny?",answer:"Auld Joe",answers:["Big Arthur","Peggie","Auld Joe","Victors Son"],userAnswer:null},{question:"When Victor gets a car what make was the car?",answer:"Skoda",answers:["SEAT","Skoda","Volkswagen","Audi"],userAnswer:null},{question:"Tam and Winston get early access to the park in the back of a...?",answer:"Ice Cream Van",answers:["Ice Cream Van","Car","Delivery Van","Bin Lorry"],userAnswer:null},{question:"Where does Archie the hermet hide all his social security money?",answer:"In his couch",answers:["Under his bed","In his couch","In his cupboard","Under his floor"],userAnswer:null},{question:"Just before Peggy and Winston start brawlin in the butchers, how many chigot chops does Peggy buy?",answer:"6",answers:["6","7","8","9"],userAnswer:null},{question:"What does the mat outside Jack's flat say?\t",answer:"Weclome",answers:["Weclome","Welcome","Welcoem","Weclum"],userAnswer:null},{question:"Mrs. Begg catches Winston dancing in the bookies because his horse won. Name the horse.",answer:"Scotch Corner",answers:["Scotch Canter","Scotch Corner","Straight Scotch","Harry Hoofter"],userAnswer:null},{question:"Who 'died' and 'came back to life' only to discover his house had been robbed of things he had borrowed from other people?\t",answer:"Wullie Mackintosh",answers:["Wullie Wallace","Wullie Reid","Wullie Napier","Wullie Mackintosh"],userAnswer:null},{question:"Who took most of their clothes off at Victor and Betty's 1975 Hogmanay party?\t",answer:"Isa",answers:["Tam","Jack","Victor","Isa"],userAnswer:null},{question:"Where does Big Innes live?\t",answer:"Elgin",answers:["Aberdeen","Inverness","Elgin","Skye"],userAnswer:null},{question:"When mocking Winston in 'Oot', where does Chris say his van is?",answer:"In an envelope",answers:["In an envelope","In an box","At the depot","Outside"],userAnswer:null},{question:"What is the job of Boabby's porn star alias?\t",answer:"Troy",answers:["Droy","Troy","Roy","Rob"],userAnswer:null},{question:"What name does Winston adopt when pretending to be the owner of the Clansman?",answer:"Harvey Gallagher",answers:["Chris Turner","Griff McKendrick","Harvey Gallagher","Conor Gallacher"],userAnswer:null},{question:"What do Jack and Victor bring to the pub in case the McGills have been in?",answer:"Swords",answers:["Knifes","Swords","Guns","Machetes"],userAnswer:null},{question:"Who is Hughie's widow the double of?",answer:"Ken Dodd",answers:["Ken Dodd","Billy Dodds","Kenny Dalgliesh","Arhur Numan"],userAnswer:null},{question:"What is the name of the pub Winston hasn't visited in 15 years?",answer:"Browns",answers:["Nicols","The Rest","Browns","Black Swan"],userAnswer:null},{question:"With what caption does Tam win the scone competition?",answer:"S'gone",answers:["S'gone","Sconeio","It's Gone","Gone"],userAnswer:null},{question:"Where does Tam propose to Frances?\t",answer:"The Library",answers:["The Clansman","The Library","The Bookies","At Home"],userAnswer:null},{question:"Which appliance causes Tam to become overly-generous?",answer:"Toaster",answers:["Toaster","Kettle","Fridge","Cooker"],userAnswer:null},{question:"With what item does Tam claim to have modified Navid's van?\t",answer:"Pishy mattress",answers:["Pishy blanket","Pishy mattress","Pishy pillows","Pishy couch"],userAnswer:null},{question:"What item of food 'humps' Pete to reveal it is him who was raiding Navid's bins?",answer:"Banana",answers:["Banana","Potato","Apple","Orange"],userAnswer:null},{question:"What age is Methadone Mick?",answer:"23",answers:["21","22","23","24"],userAnswer:null},{question:"What is the name of Jacques Cousteau's boat?",answer:"The Calypso",answers:["The Calypso","The Drum","El Capso","The Caledonia"],userAnswer:null}],incorrectQuestions:[]},template:"<App/>"})},QQ6v:function(e,s){},ThLx:function(e,s){},UAt6:function(e,s){}},["NHnr"]);
//# sourceMappingURL=app.6a779d1eae0c118f470e.js.map