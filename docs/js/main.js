/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/db.js":
/*!**********************!*\
  !*** ./src/js/db.js ***!
  \**********************/
/*! exports provided: DB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DB", function() { return DB; });
const DB = {
  "books": [{
      "id": 1,
      "category": "personal development",
      "title": "The monk who sold his ferrari",
      "author": "Robin Sharma",
      "photo": "assets/img/books/61Iz2yy2CKL.jpg",
      "description": "<p>The Monk Who Sold His Ferrari is a self-help book by Robin Sharma, a writer and motivational speaker. The book is a business fable derived from Sharma's personal experiences after leaving his career as a litigation lawyer at the age of 25.</p><p>The Monk Who Sold His Ferrari was published in 1999 by Harper Collins Publishers, and has sold more than three million copies as of 2013. A recent translation to Dogri language was done by Champa Sharma. Sharma also wrote several other books in the series, such as The Secret Letters Of The Monk Who Sold His Red Ferrari, Leadership Wisdom from the Monk Who Sold His Ferrari, Discover Your Destiny with the Monk who sold his Ferrari and Family Wisdom from the Monk Who Sold His Ferrari.</p><p>The book develops around two characters, Julian Mantle and his best friend John, in the form of conversation. Julian narrates his spiritual experiences during a Himalayan journey which he undertook after selling his holiday home and red Ferrari.</p>",
      "bookLink": "assets/pdf/books/monk.pdf",
      "summaryLink": "assets/pdf/summaries/monk.pdf"
    },
    {
      "id": 2,
      "category": "personal development",
      "title": "How to stop worrying and start living",
      "author": "Dale Carnegie",
      "photo": "assets/img/books/51elspxxvZL.jpg",
      "description": "<p>How to Stop Worrying and Start Living is a self-help book by Dale Carnegie. It was first printed in Great Britain in 1948 by Richard Clay (The Chaucer Press), Ltd., Bungay Suffolk (S.B.N. 437 95083 2). It is currently published as a Mass Market Paperback of 352 pages by Pocket (Revised edition: September 15, 1990), ISBN 0-671-73335-4.</p><p>Carnegie says in the preface to How to Stop Worrying and Start Living that he wrote it because he \"was one of the unhappiest lads in New York\". He said that he made himself sick with worry because he hated his position in life, which he attributes to wanting to figure out how to stop worrying.</p><p>The book's goal is to lead the reader to a more enjoyable and fulfilling life, helping them to become more aware of, not only themselves, but others around them. Carnegie tries to address the everyday nuances of living, in order to get the reader to focus on the more important aspects of life. It is now a world-famous, self-help book amongst many people.</p>",
      "bookLink": "assets/pdf/books/how_to_stop_worrying_and_start_living--full.pdf",
      "summaryLink": "assets/pdf/summaries/how_to_stop_worrying_and_start_living--sum.pdf"
    },
    {
      "id": 3,
      "category": "personal development",
      "title": "Change your thinking change your life",
      "author": "Brian Tracy",
      "photo": "assets/img/books/D_NQ_NP_746944-MLM29430267048_022019-W.jpg",
      "description": "<p>The power of positive thinking is highly touted in both personal growth and business management circles. But enthusiasts often use fuzzy language that blunts the application of this mental instrument. Help is here. In this easy-to-read book, Brian Tracy outlines a step-by-step plan for developing and applying mental power to professional and personal challenges. Although the text is marred by repetition and recycled material, his message is worth repeating: Mental images shape the physical world. getAbstract considers this book meaningful reading for professionals who are caught in a rut or seeking a path around workplace snares.</p>",
      "bookLink": "assets/pdf/books/brayan_treysi_izmeni_myshlenie_-_i_ty_izmenish.pdf",
      "summaryLink": ""
    },
    {
      "id": 4,
      "category": "business",
      "title": "Blue Ocean Strategy",
      "author": "W. Chan Kim and Renée Mauborgne",
      "photo": "assets/img/books/51vHDEifkJL.jpg",
      "description": "<p>The origin of the terms red and blue oceans comes from Blue Ocean Strategy – How to Create Uncontested Market Space and Make the Competition Irrelevant.</p>  <p>Recognized as one of the most iconic and impactful strategy books ever written, Blue Ocean Strategy argues that cutthroat competition results in nothing but a bloody red ocean of rivals fighting over a shrinking profit pool. It presents a systematic approach to making the competition irrelevant and outlines principles and tools any organization can use to create and capture their own blue oceans.</p><p>Blue ocean strategy is the simultaneous pursuit of differentiation and low cost to open up a new market space and create new demand. It is about creating and capturing uncontested market space, thereby making the competition irrelevant. It is based on the view that market boundaries and industry structure are not a given and can be reconstructed by the actions and beliefs of industry players.</p><p><b>Red oceans</b> are all the industries in existence today – the known market space. In red oceans, industry boundaries are defined and accepted, and the competitive rules of the game are known. Here, companies try to outperform their rivals to grab a greater share of existing demand. As the market space gets crowded, profits and growth are reduced. Products become commodities, leading to cutthroat or ‘bloody’ competition. Hence the term red oceans.</p><p><b>Blue oceans</b>, in contrast, denote all the industries not in existence today – the unknown market space, untainted by competition. In blue oceans, demand is created rather than fought over. There is ample opportunity for growth that is both profitable and rapid.In blue oceans, competition is irrelevant because the rules of the game are waiting to be set. A blue ocean is an analogy to describe the wider, deeper potential to be found in unexplored market space. A blue ocean is vast, deep, and powerful in terms of profitable growth.</p>",
      "bookLink": "assets/pdf/books/blue_ocean.pdf",
      "summaryLink": ""
    },
    {
      "id": 5,
      "category": "Financial education",
      "title": "Rich Dad Poor Dad",
      "author": "Robert Kiyosaki and Sharon Lechter",
      "photo": "assets/img/books/81bsw6fnUiL.jpg",
      "description": "<p>Rich Dad Poor Dad is a 1997 book written by Robert Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy (financial education), financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence (financial IQ).</p><p>Rich Dad Poor Dad is written in the style of a set of parables, ostensibly based on Kiyosaki's life. The titular \"rich dad\" is purportedly his friend's father who accumulated wealth due to entrepreneurship and savvy investing, while the \"poor dad\" is claimed to be Kiyosaki's own father who he says worked hard all his life but never obtained financial security. However, no one has ever proven that Rich Dad, the man who supposedly gave Kiyosaki all his advice for wealthy living, ever existed. Nor has anyone ever documented any vast reserves of wealth earned by Kiyosaki prior to the publication of Rich Dad Poor Dad in 1997.</p>",
      "bookLink": "",
      "summaryLink": ""
    },
    {
      "id": 6,
      "category": "Financial education",
      "title": "The Richest Man in Babylon",
      "author": "George S. Clason",
      "photo": "assets/img/books/91cgVuWzjL.jpg",
      "description": "<p>The Richest Man in Babylon is a 1926 book by George S. Clason that dispenses financial advice through a collection of parables set 4,000 years ago in ancient Babylon. The book remains in print almost a century after the parables were originally published, and is regarded as a classic of personal financial advice.</p><p>The parables are told by a fictional Babylonian character called Arkad, a poor scribe who became the \"richest man in Babylon\". Included in Arkad's advice are the \"Seven Cures\" (or how to generate money and wealth), and the \"Five Laws of Gold\" (or how to protect and invest wealth). A core part of Arkad's advice is around \"paying yourself first\", \"living within your means\", \"investing in what you know\", the importance of \"long-term saving\", and \"home ownership\".</p><p>The content is from a series of pamphlets distributed by U.S. banks and insurance companies in 1920–24; the pamphlets were bound together and published as a book in 1926. The book is often referred to as a classic of personal financial advice, and appears in modern recommended reading lists on personal financial advice and wealth management, which has kept the book in print almost 90 years after its first edition with over 2 million copies sold.</p>",
      "bookLink": "assets/pdf/books/Klejson-Dzhordzh-Samyj-bogatyj-chelovek-v-Vavilone.pdf",
      "summaryLink": "assets/pdf/summaries/The_Richest_Man_in_Babylon.pdf"
    },
    {
      "id": 7,
      "category": "personal development",
      "title": "The Power of Now: A Guide to Spiritual Enlightenment",
      "author": "Eckhart Tolle",
      "photo": "assets/img/books/TPON_Cover_LG.jpg",
      "description": "<p>The Power of Now: A Guide to Spiritual Enlightenment is a book by Eckhart Tolle. The book is intended to be a guide for day-to-day living and stresses the importance of living in the present moment and transcending thoughts of the past or future.Published in the late 1990s, the book was recommended by Oprah Winfrey and has been translated into 33 languages. As of 2009, it was estimated that three-million copies had been sold in North America.</p><p>The book draws from a variety of \"spiritual traditions\", and has been described by one reviewer as \"Buddhism mixed with mysticism and a few references to Jesus Christ, a sort of New Age re-working of Zen.\" It uses these traditions to describe a \"belief system based on living in the present moment\". Its core message is that people's emotional problems are rooted in their identification with their minds. The author writes that an individual should be aware of their \"present moment\" instead of losing themselves in worry and anxiety about the past or future.</p><p>According to the book, only the present moment is real and only the present moment matters, and both an individual's past and future is created by their thoughts. The author maintains that people's insistence that they have control of their life is an illusion \"that only brings pain\". The book also describes methods of relaxation and meditation to aid readers in anchoring themselves in the present. These suggestions include slowing down life by avoiding multi-tasking, spending time in nature, and letting go of worries about the future. Some of the concepts contained in The Power of Now, such as the human ego and its negative effects on happiness, are further elaborated in the author's later books, in particular A New Earth: Awakening to Your Life's Purpose (2005).</p>",
      "bookLink": "assets/pdf/books/The_Power_of_Now.pdf",
      "summaryLink": "assets/pdf/summaries/The_Power_of_Now.pdf"
    },
    {
      "id": 8,
      "category": "personal development, financial education",
      "title": "Think and Grow Rich",
      "author": "Napoleon Hill",
      "photo": "assets/img/books/51Uw5tYiqsL.jpg",
      "description": "<p>Think and Grow Rich was written by Napoleon Hill in 1937 and promoted as a personal development and self-improvement book. He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie.</p><p>First published during the Great Depression,the book has sold more than 15 million copies. It remains the biggest seller of Napoleon Hill's books. BusinessWeek magazine's Best-Seller List ranked it the sixth best-selling paperback business book 70 years after it was published. Think and Grow Rich is listed in John C. Maxwell's A Lifetime \"Must Read\" Books List.</p><p>While the book's title and much of the writing concerns increasing income, the author insists that his philosophy can help people succeed in any line of work, to do and be anything they can imagine.</p>",
      "bookLink": "assets/pdf/books/Think_and_Grow_Rich.pdf",
      "summaryLink": "assets/pdf/summaries/Think_and_Grow_Rich.pdf"
    },
    {
      "id": 9,
      "category": "personal development",
      "title": "The Miracle Morning",
      "author": "Hal Elrod",
      "photo": "assets/img/books/MV5BMzRlZjE2OGMtODQ1NS0.jpg",
      "description": "<p>The Miracle Morning by Hal Elrod is a 6-step morning routine using what are called Life S.A.V.E.R.S.: silence, affirmations, visualization, exercise, reading, and scribing. A good book to pick up if you’re looking to upgrade your mornings.</p><p>How you wake up each day and your morning routine (or lack thereof) dramatically affects your levels of success in every single area of your life.</p>The Miracle Morning Life S.A.V.E.R.S.:<p>1.Silence. Start every morning with a period of purposeful Silence of at least 5 minutes</p><p>2.Affirmations. Program yourself to be confident and successful in everything you do</p><p>3.Visualization. Imagine what you want to achieve and mentally rehearse what you’ll need to do to achieve it</p><p>Exercise.</p><p>Reading. Learn from the experts and model successful people who have already achieved what you want</p><p>Scribing. Writing enables you to document your insights as well as any areas of opportunity</p>",
      "bookLink": "assets/pdf/books/morning_miracle.pdf",
      "summaryLink": "assets/pdf/summaries/morning_miracle.pdf"
    },
    {
      "id": 10,
      "category": "Financial education",
      "title": "The Road to Financial Freedom: Earn Your First Million in Seven Years",
      "author": "Bodo Schaefer",
      "photo": "assets/img/books/51lQxieli7L.jpg",
      "description": "<p>Number-one worldwide best seller Bodo Schafer suggests tips to help make you as successful as he and many others have been by showing you the road to financial freedom.</p><p>For many people, the concept of actually owning a million dollars at one time is completely unfathomable. So what if you could do it in seven years? Bodo Schafer, renowned financier and personal management aficionado, is back again to help people discover the tips and tricks that successful individuals employ to make it to the top.</p><p>The Road to Financial Freedom is just that - a journey, and one Schafer has elected to help you undertake. Being rich and successful isn't merely luck; it takes discipline, tools, and an understanding of finances that most people simply don't have. This book is here to help unravel the shroud that keeps success out of the grasp of ordinary individuals.</p>",
      "bookLink": "assets/pdf/books/the_road-to_financial_freedom.pdf",
      "summaryLink": "assets/pdf/summaries/the_road-to_financial_freedom.pdf"
    },
    {
      "id": 11,
      "category": "personal development",
      "title": "Mind Power into the 21st Century",
      "author": "John Kehoe",
      "photo": "assets/img/books/41s2frfaifL.jpg",
      "description": "<p>In Mind Power Into the 21st Century, John Kehoe has articulated a set of life-changing principles for charting a course to success and happiness. More than that, Mind Power Into the 21st Century presents a remarkably specific and practical guide that shows you how to:</p><ul><li>Harness the Powers of your Subconscious Mind</li><li>Tap into your Creativity</li><li>Successfully use Visualization Techniques</li><li>Tap into your Intuition</li><li>Interpret your Dreams</li><li>Heal Yourself</li><li>Develop a “Prosperity Consciousness”</li><li>Build and Maintain Fulfilling Relationships and much more</li></ul>",
      "bookLink": "assets/pdf/books/podsoznanie_mozhet_vsyo_dzhon_keho.pdf",
      "summaryLink": "assets/pdf/summaries/mind_power.pdf"
    },
    {
      "id": 12,
      "category": "personal development",
      "title": "How to Win Friends & Influence People",
      "author": "Dale Carnegie",
      "photo": "assets/img/books/how-to-win-friends-and-influence-people-9780671027032_hr.jpg",
      "description": "<p>How to Win Friends and Influence People is a self-help book written by Dale Carnegie, published in 1936. Over 30 million copies have been sold worldwide, making it one of the best-selling books of all time. In 2011, it was number 19 on Time Magazine's list of the 100 most influential books</p> <p>Carnegie had been conducting business education courses in New York since 1912. In 1934, Leon Shimkin of the publishing firm Simon & Schuster took one of Carnegie's 14-week courses on human relations and public speaking; afterward, Shimkin persuaded Carnegie to let a stenographer take notes from the course to be revised for publication. The initial five thousand copies of the book sold exceptionally well, going through 17 editions in its first year alone.</p><p>In 1981, a revised edition containing updated language and anecdotes was released.The revised edition reduced the number of sections from six to four, eliminating sections on effective business letters and improving marital satisfaction.</p>",
      "bookLink": "assets/pdf/books/Kak_priobretat_druzey.pdf",
      "summaryLink": "assets/pdf/summaries/How_to_Win_Friends_and_Influence_People.pdf"
    },
    {
      "id": 13,
      "category": "personal development, Time management",
      "title": "Eat That Frog!: 21 Great Ways to Stop Procrastinating and Get More Done in Less Time",
      "author": "Brian Tracy",
      "photo": "assets/img/books/81jHcNJLB.jpg",
      "description": "<p>Eat That Frog by Brian Tracy is easily one of the most famous books on productivity and overcoming procrastination out there.</p><p>It’s a super short read outlining 21 great ways to stop procrastinating and get more done in less time.</p><p> If you’re not familiar with Brian Tracy, you’re in for a treat. He’s one of the world’s best-known personal development teachers. He has written over 70 books and, according to his website, has consulted for more than 1,000 companies and addressed more than 5,000,000 people in 5,000 talks and seminars throughout the US, Canada and 70 other countries worldwide.</p><p>This is a great little old-school productivity book that is easy to read and provides some highly actionable strategies and a nice kick in the pants for anyone who needs it.</p>",
      "bookLink": "assets/pdf/books/ostavte_brezglivost_seshte_lyagushku.pdf",
      "summaryLink": "assets/pdf/summaries/eat_that_frog.pdf"
    },
    {
      "id": 14,
      "category": "personal development, Time management",
      "title": "The 7 Habits of Highly Effective People",
      "author": "Stephen Covey",
      "photo": "assets/img/books/55842504-stiven-kovi-the-7-habits-of-highly-effective-people.jpg",
      "description": "<p>The 7 Habits of Highly Effective People, first published in 1989, is a business and self-help book written by Stephen Covey. Covey presents an approach to being effective in attaining goals by aligning oneself to what he calls \"true north\" principles based on a character ethic that he presents as universal and timeless.</p><p>Covey defines effectiveness as the balance of obtaining desirable results with caring for that which produces those results. He illustrates this by referring to the fable of the goose that laid the golden eggs. He further claims that effectiveness can be expressed in terms of the P/PC ratio, where P refers to getting desired results and PC is caring for that which produces the results.</p><p>Covey's best-known book has sold more than 25 million copies worldwide since its first publication. The audio version became the first non-fiction audio-book in U.S. publishing history to sell more than one million copies. Covey argues against what he calls \"the personality ethic\", that he sees as prevalent in many modern self-help books. He promotes what he labels \"the character ethic\": aligning one's values with so-called universal and timeless principles. In doing this, Covey distinguishes principles and values. He sees principles as external natural laws, while values remain internal and subjective. Our values govern our behavior, while principles ultimately determine the consequences. Covey presents his teachings in a series of habits, manifesting as a progression from dependence through independence on to interdependence.</p>",
      "bookLink": "assets/pdf/books/The_7_Habits_of_Highly_Effective_People.pdf",
      "summaryLink": "assets/pdf/summaries/The_7_Habits_of_Highly_Effective_People.pdf"
    },
    {
      "id": 15,
      "category": "personal development",
      "title": "The Power of Habit: Why We Do What We Do in Life and Business",
      "author": "Charles Duhigg",
      "photo": "assets/img/books/81oc6I4sn.jpg",
      "description": "<p>The Power of Habit: Why We Do What We Do in Life and Business is a book by Charles Duhigg, a New York Times reporter, published in February 2012 by Random House. It explores the science behind habit creation and reformation. The book reached the best seller list for The New York Times, Amazon.com, and USA Today. It was long listed for the Financial Times and McKinsey Business Book of the Year Award in 2012.</p>",
      "bookLink": "assets/pdf/books/The_Power_of_Habit.pdf",
      "summaryLink": "assets/pdf/summaries/The_Power_of_Habit.pdf"
    },
    {
      "id": 16,
      "category": "Biographies",
      "title": "Steve Jobs: The Man Who Thought Different",
      "author": "Karen Blumenthal",
      "photo": "assets/img/books/81IX96nZmuL.jpg",
      "description": "<p>From the start, his path was never predictable. Steve Jobs was given up for adoption at birth, he dropped out of college after one semester, and at the age of twenty-one, he created Apple in his parents' garage with his friend Steve Wozniack. Quickly rising to the top of the computer industry, Jobs pushed all boundaries and cultivated what became the intrinsic hallmark of his genius—his perfectionism, taste, and design style. But soon after success, Jobs was fired from the top spot of his own company. Finding himself a beginner again, Jobs entered into one of the most creative periods of his life. Through Pixar, the iPod, and the iPhone, Jobs revolutionized the major industries of movies, music, and phones. An avid seeker of disciplines of the mind and body, he battled cancer for eight years, became the ultimate CEO, and made the world want just about every product he touched.</p><p>Critically acclaimed author Karen Blumenthal takes us to the core of this complicated and legendary man while simultaneously exploring the evolution of computers. Illustrated throughout with black-and-white photos, this is the story of a man who changed our world.</p>",
      "bookLink": "",
      "summaryLink": ""
    },
    {
      "id": 17,
      "category": "personal development",
      "title": "The Willpower Instinct: How Self-Control Works, Why It Matters, and What You Can Do to Get More of It",
      "author": " Kelly McGonigal",
      "photo": "assets/img/books/7146LMnjKaL.jpg",
      "description": "<p>Americans say lack of willpower is the biggest reason they don’t hit their goals, likely why you don’t accomplish what you want to.People with more control over their emotions, desires, and actions are better off almost any way you look at it.The best way to improve self - control is to recognize when you lose control.If you can adjust those situations, greater control comes naturally.Self knowledge, especially of when we need and lose willpower, is the foundation of self - control.When people say they“ don’ t have willpower” it usually means they have trouble resisting some urge of their body.But sometimes it’ s about saying yes when you need to say yes, too.Many temporary states(drunk, sleepy, horny) inhibit the prefrontal cortex and reduce the effectiveness of your decision making, and lower willpower in the process.Know what your impulsive self - wants, and what your wise self - wants.Recognize when one is in control.Recognize when you’ re in a situation that requires willpower, otherwise, your brain will default to what it wants in the moment.People who are distracted are more likely to give in to temptations.Habit causes us to do things against what our wiser self wants, notice when your habits are leading you to have lower willpower. < /p>",
      "bookLink": "assets/pdf/books/willpower.pdf",
      "summaryLink": ""
    },
    {
      "id": 18,
      "category": "personal development",
      "title": "Quiet: The Power of Introverts in a World That Can't Stop Talking",
      "author": "Susan Cain",
      "photo": "assets/img/books/8520610.jpg",
      "description": "<p>Quiet: The Power of Introverts in a World That Can't Stop Talking is a 2012 non-fiction book written by Susan Cain. Cain argues that modern Western culture misunderstands and undervalues the traits and capabilities of introverted people, leading to \"a colossal waste of talent, energy, and happiness\".</p><p>The book presents a history of how Western culture transformed from a culture of character to a culture of personality in which an \"extrovert ideal\" dominates and introversion is viewed as inferior or even pathological. Adopting scientific definitions of introversion and extroversion as preferences for different levels of stimulation, Quiet outlines the advantages and disadvantages of each temperament, emphasizing the myth of the extrovert ideal that has dominated in the West since the early twentieth century. Asserting that temperament is a core element of human identity, Cain cites research in biology, psychology, neuroscience and evolution to demonstrate that introversion is both common and normal, noting that many of humankind's most creative individuals and distinguished leaders were introverts. Cain urges changes at the workplace, in schools, and in parenting; offers advice to introverts for functioning in an extrovert-dominated culture; and offers advice in communication, work, and relationships between people of differing temperament.</p>",
      "bookLink": "assets/pdf/books/Quiet.pdf",
      "summaryLink": ""
    },
    {
      "id": 19,
      "category": "personal development",
      "title": "Awaken the Giant Within",
      "author": "Anthony Robbins",
      "photo": "assets/img/books/81KkKgd18LL.jpg",
      "description": "<p>Wake up and take control of your life! From the bestselling author of Inner Strength, Unlimited Power, and MONEY Master the Game, Anthony Robbins, the nation's leader in the science of peak performance, shows you his most effective strategies and techniques for mastering your emotions, your body, your relationships, your finances, and your life.</p><p>The acknowledged expert in the psychology of change, Anthony Robbins provides a step-by-step program teaching the fundamental lessons of self-mastery that will enable you to discover your true purpose, take control of your life, and harness the forces that shape your destiny.</p>",
      "bookLink": "assets/pdf/books/RazbudiIspolina.pdf",
      "summaryLink": ""
    },
    {
      "id": 20,
      "category": "personal development",
      "title": "The Quick and Easy Way to Effective Speaking",
      "author": "Dale Carnegie",
      "photo": "assets/img/books/41l4zT5dzPL.jpg",
      "description": "<p>One tends to imagine that eloquence is a gift, whether one is or isn’t a good speaker. The reality is that like everything else, we are not born competent, we become so. And Dale Carnegie, completely removes our inhibitions with the art of public speaking. Reading it, one realizes that knowing how to speak in public, and making it a success, is feasible and accessible to all.</p><p>And that’s really what made the success of his writings and his training programs. As he does not consider eloquence as an art, reserved for an elite, but as a technique accessible to everyone, which is resolutely modern for the time (his first public effective speaking classes date from 1912).</p><p>His techniques are now widespread both in political speech and in the world of sales, for example. Dale Carnegie has also influenced many copywriters because some of his formulas are applicable both orally and in writing.Thus, through this book about eloquence The Quick and Easy Way to Effective Speaking, he shows us how to convince or lead to action, how to be comfortable speaking, how to excite crowds…</p><p>(This edition is the last one, it has the peculiarity of having been written by Dorothy Carnegie, from the notes of her husband. She is the one who signs the introduction.)</p>",
      "bookLink": "assets/pdf/books/The_Quick_and_Easy_Way_to_Effective_Speaking.pdf",
      "summaryLink": ""
    },
    {
      "id": 21,
      "category": "Literature",
      "title": "Tema pentru acasă",
      "author": "Nicolae Dabija",
      "photo": "assets/img/books/1000485.jpg",
      "description": "<p>La scoala din Poiana, profesorul de literatura romana e invinuit de noile autoritati de schimbarea portretului lui Stalin cu cel al lui Eminescu. Dupa un simulacru de proces, Mihai Ulmu, \"dusmanul poporului\", ajunge in gulag. Maria Razesu, fosta lui eleva din anul IV de liceu, il ajuta sa evadeze, dar si sa-si dea seama de dragostea lor.</p><p>O saptamana le-a trebuit soldatilor ca sa-i gaseasca. sapte zile au fost de ajuns ca Mihai si Maria sa se regaseasca. Nestrivita de calvarul gulag-ului, dragostea razbate prin piatra ca o iarba cereasca. Razbate, soptindu-ne ca marile iubiri nu incap in temnita niciunde si nicicand.</p><p>Bestseller in Romania si Republica Moldova cu peste 50,000 de exemplare vandute</p><p>Peste 500 mii de imprumuturi in biblioteci</p><p>Roman tradus in sapte limbi</p>",
      "bookLink": "",
      "summaryLink": ""
    },
    {
      "id": 22,
      "category": "personal development",
      "title": "The Subtle Art of Not Giving a Fuck",
      "author": "Mark Manson",
      "photo": "assets/img/books/71QKQ9mwV7L.jpg",
      "description": "<p>The Subtle Art of Not Giving a Fuck: A Counterintuitive Approach to Living a Good Life (first published in 2016) is the second book by blogger and author Mark Manson. In it Manson argues that life's struggles give it meaning, and that the mindless positivity of typical self-help books is neither practical nor helpful. It was a bestseller.</p>",
      "bookLink": "assets/pdf/books/Tonkoe_iskusstvo_pofigizma.pdf",
      "summaryLink": ""
    },
    {
      "id": 23,
      "category": "Financial education",
      "title": "Secrets of the Millionaire Mind: Mastering the Inner Game of Wealth",
      "author": "T. Harv Eker",
      "photo": "assets/img/books/secrets_of_the_millionaire_mind.jpg",
      "description": "<p>Secrets of the Millionaire Mind reveals the missing link between wanting success and achieving it!</p><p>Have you ever wondered why some people seem to get rich easily, while others are destined for a life of financial struggle? Is the difference found in their education, intelligence, skills, timing, work habits, contacts, luck, or their choice of jobs, businesses, or investments?</p><p>The shocking answer is: None of the above!</p><p>In his groundbreaking Secrets of the Millionaire Mind, T. Harv Eker states: 'Give me five minutes, and I can predict your financial future for the rest of your life!' Eker does this by identifying your 'money and success blueprint.' We all have a personal money blueprint ingrained in our subconscious minds, and it is this blueprint, more than anything, that will determine our financial lives. You can know everything about marketing, sales, negotiations, stocks, real estate, and the world of finance, but if your money blueprint is not set for a high level of success, you will never have a lot of money—and if somehow you do, you will most likely lose it! The good news is that now you can actually reset your money blueprint to create natural and automatic success.</p><p>Secrets of the Millionaire Mind is two books in one. Part I explains how your money blueprint works. Through Eker's rare combination of street smarts, humor, and heart, you will learn how your childhood influences have shaped your financial destiny. You will also learn how to identify your own money blueprint and 'revise' it to not only create success but, more important, to keep and continually grow it.</p><p>In Part II you will be introduced to seventeen 'Wealth Files,' which describe exactly how rich people think and act differently than most poor and middle-class people. Each Wealth File includes action steps for you to practice in the real world in order to dramatically increase your income and accumulate wealth.</p><p>If you are not doing as well financially as you would like, you will have to change your money blueprint. Unfortunately your current money blueprint will tend to stay with you for the rest of your life, unless you identify and revise it, and that's exactly what you will do with the help of this extraordinary book. According to T. Harv Eker, it's simple. If you think like rich people think and do what rich people do, chances are you'll get rich too!</p>",
      "bookLink": "",
      "summaryLink": ""
    },
    {
      "id": 25,
      "category": "Personal development",
      "title": "Atomic Habits ",
      "author": "James Clear",
      "photo": "assets/img/books/91pR9wKJ3zL.jpg",
      "description": "<p>No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.</p><p>If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights.</p><p>Clear is known for his ability to distill complex topics into simple behaviors that can be easily applied to daily life and work. Here, he draws on the most proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible. Along the way, readers will be inspired and entertained with true stories from Olympic gold medalists, award-winning artists, business leaders, life-saving physicians, and star comedians who have used the science of small habits to master their craft and vault to the top of their field.</p><p>Learn how to:•  make time for new habits (even when life gets crazy);•  overcome a lack of motivation and willpower;•  design your environment to make success easier;•  get back on track when you fall off course;...and much more.</p><p>Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an industry, or simply an individual who wishes to quit smoking, lose weight, reduce stress, or achieve any other goal.</p>",
      "bookLink": "",
      "summaryLink": ""
    }
  ],
  "quotes": [{
      "quote": "Remember, the moment you accept total responsibility for everything in your life is the moment you claim the power to change anything in your life.",
      "author": "Hal Elrod"
    },
    {
      "quote": "Your time is limited, so don’t waste it living someone else’s life.",
      "author": "Steve Jobs"
    },
    {
      "quote": "It isn’t what you have or who you are or where you are or what you are doing that makes you happy or unhappy. It is what you think about it.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "Any fool can criticize, complain, and condemn—and most fools do. But it takes character and self-control to be understanding and forgiving.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "When we hate our enemies, we are giving them power over us: power over our sleep, our appetites, our blood pressure, our health, and our happiness.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "Happiness doesn’t depend on outward conditions. It depends on inner conditions.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "Remember, today is the tomorrow you worried about yesterday.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "If you are not in the process of becoming the person you want to be, you are automatically engaged in becoming the person you don’t want to be.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "Even God doesn’t propose to judge a man till his last days, why should you and I?",
      "author": "Dale Carnegie"
    },
    {
      "quote": "Our thoughts make us what we are.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "Knowledge isn’t power until it is applied.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "You can conquer almost any fear if you will only make up your mind to do so. For remember, fear doesn’t exist anywhere except in the mind.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "Be more concerned with your character than with your reputation, for your character is what you are, while your reputation is merely what others think you are.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "You can measure the size of a person by what makes him or her angry.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "I have come to the conclusion that there is only one way under high heaven to get the best of an argument— and that is to avoid it.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "All men have fears, but the brave put down their fears and go forward, sometimes to death, but always to victory.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "If you want to keep happiness, you have to share it.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "We are all dreaming of some magical rose garden over the horizon instead of enjoying the roses blooming outside our windows today.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "Success is getting what you want. Happiness is wanting what you get.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "The successful man will profit from his mistakes and try again in a different way.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "Successful people are simply those with successful habits.",
      "author": "Brian Tracy"
    },
    {
      "quote": "The key to success is to focus our conscious mind on things we desire not things we fear.",
      "author": "Brian Tracy"
    },
    {
      "quote": "People with clear, written goals, accomplish far more in a shorter period of time than people without them could ever imagine.",
      "author": "Brian Tracy"
    },
    {
      "quote": "You have within you right now, everything you need to deal with whatever the world can throw at you.",
      "author": "Brian Tracy"
    },
    {
      "quote": "Never complain, never explain. Resist the temptation to defend yourself or make excuses.",
      "author": "Brian Tracy"
    },
    {
      "quote": "The greatest gift that you can give to others is the gift of unconditional love and acceptance.",
      "author": "Brian Tracy"
    },
    {
      "quote": "I’ve found that luck is quite predictable. If you want more luck, take more chances. Be more active. Show up more often.",
      "author": "Brian Tracy"
    },
    {
      "quote": "It doesn’t matter where you are coming from. All that matters is where you are going.",
      "author": "Brian Tracy"
    },
    {
      "quote": "If what you are doing is not moving you towards your goals, then it’s moving you away from your goals.",
      "author": "Brian Tracy"
    },
    {
      "quote": "You cannot control what happens to you, but you can control your attitude toward what happens to you, and in that, you will be mastering change rather than allowing it to master you.",
      "author": "Brian Tracy"
    },
    {
      "quote": "Happiness comes when you believe in what you are doing, know what you are doing, and love what you are doing.",
      "author": "Brian Tracy"
    },
    {
      "quote": "Spend eighty percent of your time focusing on the opportunities of tomorrow rather than the problems of yesterday.",
      "author": "Brian Tracy"
    },
    {
      "quote": "Whatever you believe with feeling becomes your reality.",
      "author": "Brian Tracy"
    },
    {
      "quote": "Decide upon your major definite purpose in life and then organize all your activities around it.",
      "author": "Brian Tracy"
    },
    {
      "quote": "Do something to move yourself toward your major goal every day.",
      "author": "Brian Tracy"
    },
    {
      "quote": "The act of taking the first step is what separates the winners from the losers.",
      "author": "Brian Tracy"
    },
    {
      "quote": "Develop an attitude of gratitude, and give thanks for everything that happens to you, knowing that every step forward is a step toward achieving something bigger and better than your current situation.",
      "author": "Brian Tracy"
    },
    {
      "quote": "Every great leap forward in your life comes after you have made a clear decision of some kind.",
      "author": "Brian Tracy"
    },
    {
      "quote": "Most people achieved their greatest success one step beyond what looked like their greatest failure.",
      "author": "Brian Tracy"
    },
    {
      "quote": "Dream Big. Start small. Act now.",
      "author": "Robin Sharma"
    },
    {
      "quote": "Victims make excuses. Leaders deliver results.",
      "author": "Robin Sharma"
    },
    {
      "quote": "Clarity breeds mastery.",
      "author": "Robin Sharma"
    },
    {
      "quote": "Education is inoculation against disruption.",
      "author": "Robin Sharma"
    },
    {
      "quote": "All change is hard at first, messy in the middle and gorgeous at the end.",
      "author": "Robin Sharma"
    },
    {
      "quote": "Where victims see adversity, extreme achievers see opportunity.",
      "author": "Robin Sharma"
    },
    {
      "quote": "Small daily improvements over time lead to stunning results.",
      "author": "Robin Sharma"
    },
    {
      "quote": "Criticism is the price of ambition.",
      "author": "Robin Sharma"
    },
    {
      "quote": "Ordinary people love entertainment. Extraordinary people adore education.",
      "author": "Robin Sharma"
    },
    {
      "quote": "Your daily behavior reveals your deepest beliefs.",
      "author": "Robin Sharma"
    },
    {
      "quote": "The only failure is not trying.",
      "author": "Robin Sharma"
    },
    {
      "quote": "Your excuses are nothing more than the lies your fears have sold you.",
      "author": "Robin Sharma"
    },
    {
      "quote": "Life is short. Be of use.",
      "author": "Robin Sharma"
    },
    {
      "quote": "Set your mind on a definite goal and observe how quickly the world stands aside to let you pass.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "The way of success is the way of continuous pursuit of knowledge.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "Self-discipline begins with the mastery of your thoughts. If you don’t control what you think, you can’t control what you do. Simply, self-discipline enables you to think first and act afterward.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "Patience, persistence and perspiration make an unbeatable combination for success.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "If you do not see great riches in your imagination, you will never see them in your bank balance.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "You are the master of your destiny. You can influence, direct and control your own environment. You can make your life what you want it to be.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "The starting point of all achievement is DESIRE. Keep this constantly in mind. Weak desire brings weak results, just as a small fire makes a small amount of heat.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "A quitter never wins and a winner never quits.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "Remember that your real wealth can be measured not by what you have, but by what you are.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "One of the most common causes of failure is the habit of quitting when one is overtaken by temporary defeat.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "The only limitation is that which one sets up in one’s own mind.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "Whatever the mind of man can conceive and believe it can achieve.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "The world has the habit of making room for the man whose actions show that he knows where he is going.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "Strength and growth come only through continuous effort and struggle.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "Both success and failure are largely the results of habit!",
      "author": "Napoleon Hill"
    },
    {
      "quote": "Desire is the starting point of all achievement, not a hope, not a wish, but a keen pulsating desire which transcends everything.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "Love the life you have while you create the life of your dreams. Don’t think you have to wait for the latter to do the former.",
      "author": "Hal Elrod"
    },
    
    {
      "quote": "Where you are is a result of who you were, but where you go depends entirely on who you choose to be.",
      "author": "Hal Elrod"
    },
    
    {
      "quote": "Give up being perfect for being authentic. Be who you are. Love who you are. Others will too.",
      "author": "Hal Elrod"
    },
    
    {
      "quote": "The #1 cause of unfulfilled potential is never deciding that NOW matters more than any other time in your life. IT DOES.",
      "author": "Hal Elrod"
    },
    
    {
      "quote": "Life isn’t about wishing you were somewhere, or someone that you’re not. Life is about enjoying where you are, loving who you are, and consistently improving both.",
      "author": "Hal Elrod"
    },
    
    {
      "quote": "The moment you accept responsibility for EVERYTHING in your life is the moment you gain the power to change ANYTHING in your life.",
      "author": "Hal Elrod"
    },
    
    {
      "quote": "There is nothing to fear, because you cannot fail – only LEARN, GROW, and become BETTER than you’ve ever been before.",
      "author": "Hal Elrod"
    },
    
    {
      "quote": "Make bold moves toward your dreams each day, refuse to stop, and nothing can stop you.",
      "author": "Hal Elrod"
    },
    
    {
      "quote": "It’s true that everything happens for a reason, but it is always our responsibility to choose the reasons.",
      "author": "Hal Elrod"
    },
    
    {
      "quote": "Replace your judgments with empathy, upgrade your complaining to gratitude, and trade in your fear for love.",
      "author": "Hal Elrod"
    },
    
    {
      "quote": "Don’t worry about trying to impress people. Just focus on how you can add value to their lives.",
      "author": "Hal Elrod"
    },
    
    {
      "quote": "The greatest gift you can give to others is to fulfill YOUR potential, so that you can show them how to fulfill theirs.",
      "author": "Hal Elrod"
    },
    
    {
      "quote": "Every single one of us already has everything we need to be the happiest person on earth; it’s simply up to us to remember that in every moment.",
      "author": "Hal Elrod"
    },
    
    {
      "quote": "Don’t beat yourself up for not being perfect. But you might want to kick your own a## if you’re not trying to get better.",
      "author": "Hal Elrod"
    },
    {
      "quote": "It’s okay to be average, as long as you surround yourself with extraordinary people that you become the average of.",
      "author": "Hal Elrod"
    },
    {
      "quote": "To reach levels of success you’ve never reached before, you must be committed at a level you’ve never been committed at before.",
      "author": "Hal Elrod"
    },
    {
      "quote": "Give yourself permission to be happy. It doesn’t matter what’s going on around you, what matters is what’s going on inside you.",
      "author": "Hal Elrod"
    },
    {
      "quote": "Wake up early everyday so that while others are still dreaming, you can make your dreams come true.",
      "author": "Hal Elrod"
    },
    {
      "quote": "Don’t ‘just do it.’ First, plan it, then do it.",
      "author": "Hal Elrod"
    },
    {
      "quote": "If you can’t learn to be happy now, with the life you’ve got, what makes you think you’ll understand how to be happy with the life you think you want? ",
      "author": "Hal Elrod"
    },
    {
      "quote": "Don’t let the pain of your past limit the potential of your future.",
      "author": "Hal Elrod"
    },
    {
      "quote": "Your current life situation, no matter how difficult or challenging, is always the perfect opportunity for you to learn, grow, and to become better than you’ve ever been before.",
      "author": "Hal Elrod"
    },
    {
      "quote": "You have the ability to change or create anything in your life, starting now. ",
      "author": "Hal Elrod"
    },
    {
      "quote": "Your circumstances and situations never keep you down. The only things that keep you down and keep you stuck are your thoughts.",
      "author": "John Kehoe"
    },
    {
      "quote": "Negatives only have power over you when you react to them.",
      "author": "John Kehoe"
    },
    {
      "quote": "Almost All Problem Areas Of Your Life Are Caused By Faulty Belief Systems. You Are The Cause Of Your Problems And You Are The Solution To Your Problems.",
      "author": "John Kehoe"
    },
    {
      "quote": "Never say you cannot afford something. That is a poor man’s attitude. Ask how to afford it.",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "The only difference between a rich person and poor person is how they use their time",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "I am concerned that too many people are focused too much on money and not on their greatest wealth, which is their education. If people are prepared to be flexible, keep an open mind and learn, they will grow richer and richer through the changes. If they think money will solve the problems, I am afraid those people will have a rough ride.",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "Too many people are too lazy to think. Instead of learning something new, they think the same thought day in day out.",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "Often, the more money you make the more money you spend; that’s why more money doesn’t make you rich – assets make you rich.",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "Winners are not afraid of losing. But losers are. Failure is part of the process of success. People who avoid failure also avoid success.",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "Making mistakes isn’t enough to become great. You must also admit the mistake, and then learn how to turn that mistake into an advantage.",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "It’s easier to stand on the sidelines, criticize, and say why you shouldn’t do something. The sidelines are crowded. Get in the game.",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "Complaining about your current position in life is worthless. Have a spine and do something about it instead.",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "The fear of being different prevents most people from seeking new ways to solve their problems.",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "The size of your success is measured by the strength of your desire; the size of your dream; and how you handle disappointment along the way.",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "The most life destroying word of all is the word tomorrow.",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "The more a person seeks security, the more that person gives up control over his life.",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "F.O.C.U.S – Follow One Course Until Successful",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "The more I risk being rejected, the better my chances are of being accepted.",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "People who dream small dreams continue to live as small people.",
      "author": "Robert Kiyosaki"
    },
    {
      "quote": "The key is not to prioritize what’s on your schedule but to schedule your priorities.",
      "author": "Stephen Covey"
    },
    {
      "quote": "Most of us spend too much time on what is urgent and not enough time on what is important.",
      "author": "Stephen Covey"
    },
    {
      "quote": "Highly proactive people don’t blame circumstances, conditions or conditioning for their behavior. Their behavior of their own conscious choice.",
      "author": "Stephen Covey"
    },
    {
      "quote": "Courage is not the absence of fear but the awareness that something else is more important.",
      "author": "Stephen Covey"
    },
    {
      "quote": "To achieve goals you’ve never achieved before you need to start doing things you’ve never done before.",
      "author": "Stephen Covey"
    },
    {
      "quote": "When life gives you lemons, make lemonade",
      "author": "Elbert Hubbard"
    },
    
    {
      "quote": "Every problem is a gift–without problems we would not grow.",
      "author": "Tony Robbins"
    },
    
    {
      "quote": "The only thing that’s keeping you from getting what you want is the story you keep telling yourself.",
      "author": "Tony Robbins"
    },
    {
      "quote": "People are not lazy, they simply have impotent goals. That is goals that do not inspire them.",
      "author": "Tony Robbins"
    },
    {
      "quote": "If you talk about it, it’s a dream, if you envision it, it’s possible, but if you schedule it, it’s real.",
      "author": "Tony Robbins"
    },
    {
      "quote": "Any time you sincerely want to make a change, the first thing you must do is to raise your standards.",
      "author": "Tony Robbins"
    },
    {
      "quote": "The more rejection you get, the better you are, the more you’ve learned, the closer you are to your outcome… If you can handle rejection, you’ll learn to get everything you want.",
      "author": "Tony Robbins"
    },
    {
      "quote": "Take the opportunity to learn from your mistakes: find the cause of your problem and eliminate it. Don’t try to be perfect; just be an excellent example of being human.",
      "author": "Tony Robbins"
    },
    
    {
      "quote": "Whether you think you can, or you think you can’t–you’re right.",
      "author": "Henry Ford"
    },
    
    {
      "quote": "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young.",
      "author": "Henry Ford"
    },
    
    {
      "quote": "Failure is only the opportunity more intelligently to begin again.",
      "author": "Henry Ford"
    },
    
    {
      "quote": "Don’t find fault, find a remedy; anybody can complain.",
      "author": "Henry Ford"
    },
    
    {
      "quote": "The only real mistake is the one from which we learn nothing.",
      "author": "Henry Ford"
    },
    
    {
      "quote": "Obstacles are those frightful things you see when you take your eyes off your goals.",
      "author": "Henry Ford"
    },
    
    {
      "quote": "Vision without execution is just hallucination.",
      "author": "Henry Ford"
    },
    
    {
      "quote": "Thinking is the hardest work there is, which is probably the reason so few engage in it.",
      "author": "Henry Ford"
    },
    
    {
      "quote": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
      "author": "Henry Ford"
    },
    
    {
      "quote": "Quality means doing it right when no one is looking.",
      "author": "Henry Ford"
    },
    
    {
      "quote": "Chop your own wood and it will warm you twice.",
      "author": "Henry Ford"
    },
    
    {
      "quote": "Nothing is particularly hard if you divide it into small jobs.",
      "author": "Henry Ford"
    },
    
    {
      "quote": "If money is your hope for independence, you will never have it. The only real security that a man can have in this world is a reserve of knowledge, experience and ability.",
      "author": "Henry Ford"
    },
    {
      "quote": "One of the greatest discoveries a person makes, one of their great surprises, is to find they can do what they were afraid they couldn’t do.",
      "author": "Henry Ford"
    },
    {
      "quote": "Most people spend more time and energy going around problems than in trying to solve them.",
      "author": "Henry Ford"
    },
    {
      "quote": "If you always do what you’ve always done, you’ll always get what you’ve always got.",
      "author": "Henry Ford"
    },
    {
      "quote": "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
      "author": "Henry Ford"
    },
    {
      "quote": "There is no man living who isn’t capable of doing more than he thinks he can do.",
      "author": "Henry Ford"
    },
    {
      "quote": "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      "author": "Oprah Winfrey"
    },
    
    {
      "quote": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
      "author": "Thomas A. Edison"
    },
    
    {
      "quote": "If you find a job you love, you'll never work again...",
      "author": "Winston Churchill"
    }
  ]
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popup */ "./src/js/modules/popup.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_quotes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/quotes */ "./src/js/modules/quotes.js");





document.addEventListener("DOMContentLoaded", function (event) {
  "use strict";

  Object(_modules_cards__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_popup__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_scrolling__WEBPACK_IMPORTED_MODULE_2__["default"])(".scroll-up");
  Object(_modules_quotes__WEBPACK_IMPORTED_MODULE_3__["default"])();

  //==============================================================================================
  //============================================================ Preloader

  const preloader = document.querySelector(".preloader");
  if (preloader) {
    setTimeout(function () {
      preloader.classList.add("show");

      setTimeout(function () {
        document.querySelector(".loader-element").classList.add("hide");
      }, 200);
    }, 1000);
  }

  //==============================================================================================
  //============================================================  NavBar on Scroll

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const navbar = document.querySelector(".navbar");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar.classList.add("on-scroll");
    } else {
      navbar.classList.remove("on-scroll");
    }
  }

  //==============================================================================================
  //============================================================ Mobile Menu

  let menuToggle = document.querySelectorAll(".menu-toggle svg"),
    menu = document.querySelector(".mmenu");

  menuToggle.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.toggle("mmenu-hide");
    });
  });

  //==============================================================================================
  //============================================================ products views
  document.querySelectorAll(".products__view").forEach((el) => {
    el.addEventListener("click", (e) => {
      let productsWrapper = document.querySelector(".products__cards");
      let parent = e.target.closest(".products__view");
      let view = parent.dataset.view;

      if (view == "list") {
        productsWrapper.classList.add("products__cards--list");
        parent.classList.add("products__view--active");
        document.querySelector('.products__view[data-view="grid"]').classList.remove("products__view--active");
      } else if(view == "grid") {
        productsWrapper.classList.remove("products__cards--list");
        parent.classList.add("products__view--active");
        document.querySelector('.products__view[data-view="list"]').classList.remove("products__view--active");
      }
    });
  });
});

window.addEventListener("load", (event) => {
  document.querySelector(".loader").style.display = "none";
});


/***/ }),

/***/ "./src/js/modules/booksStorage.js":
/*!****************************************!*\
  !*** ./src/js/modules/booksStorage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BooksStorage; });
class BooksStorage {
  constructor({
    addBtn,
    popupParent,
    popupListWrapper,
    counter,
    storageName,
    changeListBtn,
  } = {}) {
    this.addBtn = document.querySelectorAll(addBtn);
    this.addBtnSelector = addBtn;
    this.popupParent = document.querySelector(popupParent);
    this.popupListWrapper = document.querySelector(popupListWrapper);
    this.counter = document.querySelector(counter);
    this.storageName = storageName;
    this.changeListBtn = document.querySelectorAll(changeListBtn);
  }

  createListItem(author, title, id) {
    return `
      <li class="popup-list__item" data-id="${id}">
        <div class="popup-list__title">${title}</div>
        <div class="popup-list__author">${author}</div>
        <button class="popup-list__delete">
          <svg>
            <use xlink:href="assets/icons/sprite.svg#delete"></use>
          </svg>
        </button>
      </li>
    `;
  }

  itemsCounter() {
    let length = this.popupListWrapper.children.length;
    this.counter.innerHTML = length;
  }

  listenerAddItems() {
    this.addBtn.forEach((el) => {
      el.addEventListener("click", (e) => {
        let target = e.currentTarget;
        let parent = target.closest(".product__card");
        let id = parent.dataset.id;
        let title = parent.querySelector(".product__title").textContent;
        let author = parent.querySelector(".product__author").textContent;

        let alreadyInList = [];
        this.popupListWrapper
          .querySelectorAll(".popup-list__title")
          .forEach((el) => {
            let existentTitle = el.textContent.toString().toLowerCase().trim();

            alreadyInList.push(existentTitle);
          });

        let exist = alreadyInList.includes(
          title.toString().toLowerCase().trim()
        );

        if (!exist) {
          this.popupListWrapper.insertAdjacentHTML(
            "afterbegin",
            this.createListItem(author, title, id)
          );
          this.itemsCounter();
          this.updateStorage();
          target.disabled = true;
        }
      });
    });
  }

  deleteItems(itemParent) {
    let id = itemParent.dataset.id,
      selector = document.querySelector(`.product__card[data-id="${id}"]`);
    if (selector) {
      selector.querySelector(this.addBtnSelector).disabled = false;
      selector.querySelector(this.addBtnSelector).classList.remove("active");
    }
    itemParent.remove();
    this.itemsCounter();
    this.updateStorage();
  }

  listenerDeleteItems() {
    this.popupListWrapper.addEventListener("click", (e) => {
      e.stopPropagation();

      if (e.target.closest(".popup-list__delete")) {
        this.deleteItems(e.target.closest(".popup-list__item"));
      }
    });

    document.addEventListener("click", (e) => {
      e.stopPropagation();

      if (e.target.closest(".list-item__delete")) {
        let id = e.target.closest(".list-item").dataset.id,
        selector = document.querySelector(`.popup-list__item[data-id="${id}"]`);

        this.deleteItems(e.target.closest(".list-item"));
        this.deleteItems(selector);
      }
    });
  }

  initialState() {
    let booksLocalStorage = localStorage.getItem(this.storageName);
    if (booksLocalStorage !== null) {
      this.popupListWrapper.innerHTML = booksLocalStorage;
      this.itemsCounter();

      this.popupListWrapper
        .querySelectorAll(".popup-list__item")
        .forEach((el) => {
          let id = el.dataset.id,
            selector = document.querySelector(
              `.product__card[data-id="${id}"]`
            );

          if (selector) {
            selector.querySelector(this.addBtnSelector).disabled = "true";
            selector.querySelector(this.addBtnSelector).classList.add("active");
          }
        });
    }
  }

  updateStorage() {
    let html = this.popupListWrapper.innerHTML.trim();
    let moreInfo = this.popupParent.querySelector(".popup-list__more");

    if (html.length) {
      localStorage.setItem(this.storageName, html);
      moreInfo.textContent = "View full list";
      moreInfo.disabled = false;
    } else {
      localStorage.removeItem(this.storageName);
      moreInfo.textContent = "List is empty";
      moreInfo.disabled = true;
    }
  }

  moveToAnotherList() {
    this.changeListBtn.forEach((el) => {
      el.addEventListener("click", (e) => {
        let target = e.currentTarget,
          parent = target.closest(".product__card"),
          id = parent.dataset.id,
          selector = document.querySelector(`.product__card[data-id="${id}"]`);

        if (selector) {
          selector.querySelector(this.addBtnSelector).disabled = false;
          selector
            .querySelector(this.addBtnSelector)
            .classList.remove("active");
          target.classList.add("active");
        }

        let existingOne = this.popupListWrapper.querySelector(
          `.popup-list__item[data-id="${id}"]`
        );

        if (existingOne) {
          existingOne.remove();
        }

        this.itemsCounter();
        this.updateStorage();
      });
    });
  }

  init() {
    try {
      this.listenerAddItems();
      this.listenerDeleteItems();
      this.initialState();
      this.updateStorage();
      this.moveToAnotherList();
    } catch (e) {}
  }
}


/***/ }),

/***/ "./src/js/modules/calcScroll.js":
/*!**************************************!*\
  !*** ./src/js/modules/calcScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calcScroll() {
  let div = document.createElement("div");

  div.style.width = "50px";
  div.style.height = "50px";
  div.style.overflowY = "scroll";
  div.style.visibility = "hidden";

  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();

  return scrollWidth;
}

/* harmony default export */ __webpack_exports__["default"] = (calcScroll);


/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db */ "./src/js/db.js");
/* harmony import */ var _booksStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booksStorage */ "./src/js/modules/booksStorage.js");
/* harmony import */ var _quickView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quickView */ "./src/js/modules/quickView.js");
/* harmony import */ var _viewFullList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewFullList */ "./src/js/modules/viewFullList.js");





function cards() {
  function allStorages() {
    const wishlist = new _booksStorage__WEBPACK_IMPORTED_MODULE_1__["default"]({
      addBtn: '[data-add-to="Wish List"]',
      popupParent: '.popup-list[data-popup="Wish List"]',
      popupListWrapper: '.popup-list__wrapper[data-popup="Wish List"]',
      counter: '[data-counter="Wish List"]',
      storageName: "Wish List",
      changeListBtn: '[data-add-to="My Books"]',
    });
    wishlist.init();
    const mybooks = new _booksStorage__WEBPACK_IMPORTED_MODULE_1__["default"]({
      addBtn: '[data-add-to="My Books"]',
      popupParent: '.popup-list[data-popup="My Books"]',
      popupListWrapper: '.popup-list__wrapper[data-popup="My Books"]',
      counter: '[data-counter="My Books"]',
      storageName: "My Books",
      changeListBtn: '[data-add-to="Wish List"]',
    });
    mybooks.init();
  }

  class BookCard {
    constructor() {
      this.wrapper = document.querySelector(".products__cards");
      this.data = [];
      this.dataLength = 0;
      this.loadMoreBtn = document.querySelector("#loadMore");
      this.itemsPerPage = 6;
      this.pageCounter = this.itemsPerPage;
      this.currentCounter = 0;
      this.sorting = document.querySelector(".products__sorting");
      this.sortingInput = document.querySelector("select[data-sort-items]");
      this.title = "";
      this.description = "";
    }

    cardTemplate({ id, photo, title, author, description }) {
     
      if (title.length > 45) {
        this.title = title.substr(0, 44) + "...";
      } else {
        this.title = title;
      }

      let card = document.createElement("li");
      card.classList.add("product__card");
      card.setAttribute("data-id", `${id}`);
      card.innerHTML = `
                <div class="product__img" data-learn-more>
                   <img src="${photo}" alt="${title}">
                </div>
                <div class="product__bottom">
                   <div class="product__info" data-learn-more>
                        <div class="product__title">
                            ${this.title}
                        </div>
                        <div class="product__author">
                            by ${author}
                        </div>
                        <div class="product__description">
                            ${description}
                        </div>
                        <div class="product__read-more">...</div>
                   </div>
                   <div class="product__actions">
                        <a href="#" class="product__link" data-learn-more>
                            Quick View 
                            <svg>
                                <use xlink:href="assets/icons/sprite.svg#eye"></use>
                            </svg>
                        </a>
                        <div class="product__btns">
                            <button data-add-to="My Books" title='My Books'>
                                    <svg>
                                        <use xlink:href="assets/icons/sprite.svg#book-fill"></use>
                                    </svg>
                            </button>
                            <button data-add-to="Wish List" title='Wish List'>
                                    <svg>
                                        <use xlink:href="assets/icons/sprite.svg#heart-fill"></use>
                                    </svg>
                            </button>
                        </div>
                   </div>
                </div>
               `;
      document.querySelector(".products__cards").appendChild(card);
    }

    render(response) {
      this.dataLength = response.length;
      this.data = response;

      while (this.currentCounter < this.pageCounter) {
        let i = this.currentCounter;
        this.cardTemplate(response[i]);

        this.currentCounter++;

        if (this.currentCounter >= this.dataLength) {
          this.loadMoreBtn.style.display = "none";
          break;
        }
      }

      allStorages();
      Object(_quickView__WEBPACK_IMPORTED_MODULE_2__["default"])(this.data);
    }

    loadMore() {
      this.loadMoreBtn.addEventListener("click", (e) => {
        e.preventDefault();

        e.target.disabled = true;
        setTimeout(() => {
          e.target.disabled = false;
          let remainItems = this.dataLength - this.pageCounter;
          if (remainItems >= this.itemsPerPage + this.itemsPerPage / 2) {
            this.pageCounter = this.pageCounter + this.itemsPerPage;
            this.render(this.data);
          } else {
            this.pageCounter = this.pageCounter + remainItems;
            this.render(this.data);
          }
        }, 300);
      });
    }

    filter(response) {
      let triggers = document.querySelectorAll(".products__filter ul li a");
      triggers.forEach((element) => {
        element.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(".scroll-up").click();

          triggers.forEach((link) => {
            link.classList.remove("active");
          });
          e.target.classList.add("active");

          this.pageCounter = this.itemsPerPage;
          this.currentCounter = 0;

          this.wrapper.innerHTML = "";
          this.loadMoreBtn.style.display = "block";
          this.sorting.style.display = "inline";

          let keyWord = element.textContent.toLowerCase().trim();

          let filteredData = response.filter((item) => {
            return Object.keys(item).some((key) =>
              item[key].toString().toLowerCase().trim().includes(keyWord)
            );
          });
          this.data = filteredData;

          this.sortItems();
          this.render(this.data);
        });
      });
    }

    search(response) {
      const searchBar = document.getElementById("searchBar");
      let searchResult = [];

      searchBar.addEventListener("keyup", (e) => {
        if (e.keyCode == 13) {
          this.wrapper.innerHTML = "";
          this.loadMoreBtn.style.display = "none";
          document.querySelectorAll(".products__filter a").forEach((el) => {
            el.classList.remove("active");
          });
          this.sorting.style.display = "none";
          document.querySelector(".scroll-up").click();

          let searchResultInfo = document.createElement("div");
          searchResultInfo.classList.add("search__response");
          this.wrapper.append(searchResultInfo);

          let keyWord = e.target.value.toLowerCase().trim();

          if (keyWord) {
            searchResult = response.filter((item) => {
              return Object.keys(item).some((key) =>
                item[key].toString().toLowerCase().trim().includes(keyWord)
              );
            });

            if (searchResult.length > 0) {
              if (searchResult.length == 1) {
                searchResultInfo.innerHTML = `(${searchResult.length}) Search result for: '${e.target.value}'`;
              } else {
                searchResultInfo.innerHTML = `(${searchResult.length}) Search results for: '${e.target.value}'`;
              }

              for (let i = 0; i < searchResult.length; i++) {
                this.cardTemplate(searchResult[i]);
              }
            } else {
              searchResultInfo.innerHTML =
                "Nothing found. </br> Please try again with some different keywords.";
            }
          } else {
            searchResultInfo.innerHTML =
              "Nothing found. </br> Please try again with some different keywords.";
          }

          const lostFocus = () => {
            searchBar.value = "";
          };
          searchBar.addEventListener("blur", lostFocus, { once: true });

          Object(_quickView__WEBPACK_IMPORTED_MODULE_2__["default"])(response);
          allStorages();
        }
      });

      document.querySelector(".navbar__icon").addEventListener("click", () => {
        searchBar.focus();
      });
    }

    selectItemsPerPage() {
      const select = document.querySelector("select[data-items-perpage]");
      select.addEventListener("change", (e) => {
        let value = parseInt(select.value);
        this.itemsPerPage = value;
        this.pageCounter = value;
        this.currentCounter = 0;
        this.wrapper.innerHTML = "";
        this.render(this.data);

        if (this.dataLength <= this.pageCounter) {
          this.loadMoreBtn.style.display = "none";
        } else {
          this.loadMoreBtn.style.display = "block";
        }
      });
    }

    sortItems() {
      let valueSort = this.sortingInput.value;
      if (valueSort == "a-z") {
        this.data.sort(function (a, b) {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        });
      } else if (valueSort == "z-a") {
        this.data.sort(function (a, b) {
          if (a.title > b.title) return -1;
          if (a.title < b.title) return 1;
          return 0;
        });
      }
    }

    sortItemsListener() {
      this.sortingInput.addEventListener("change", (e) => {
        this.currentCounter = 0;
        this.wrapper.innerHTML = "";
        this.sortItems();
        this.render(this.data);
      });
    }

    init(data) {
      try {
        this.render(data);
        this.loadMore();
        Object(_viewFullList__WEBPACK_IMPORTED_MODULE_3__["default"])(data);
        this.filter(data);
        this.search(data);
        this.selectItemsPerPage();
        this.sortItemsListener();
      } catch (e) {}
    }
  }

  let getBooks = new BookCard();
  getBooks.init(_db__WEBPACK_IMPORTED_MODULE_0__["DB"].books);
}

/* harmony default export */ __webpack_exports__["default"] = (cards);


/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calcScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcScroll */ "./src/js/modules/calcScroll.js");


function modals() {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]"),
      scroll = Object(_calcScroll__WEBPACK_IMPORTED_MODULE_0__["default"])();

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach((item) => {
          item.style.display = "none";
          item.classList.add("fade");
        });

        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    close.addEventListener("click", () => {
      windows.forEach((item) => {
        item.style.display = "none";
      });

      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        windows.forEach((item) => {
          item.style.display = "none";
        });

        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.marginRight = `0px`;
      }
    });
  }

  bindModal("[data-learn-more]", ".modal__bg", ".modal__close");
  bindModal(".popup-list__more", ".modal__bg", ".modal__close");
}

/* harmony default export */ __webpack_exports__["default"] = (modals);


/***/ }),

/***/ "./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function popup() {
  function bindPopup({ popupWrapper, trigger, activeClass, close }) {
    const popup = document.querySelector(popupWrapper);

    document.addEventListener("click", (e) => {
      if (e.target.closest(close) || e.target.closest('.popup-list__more')) {
        popup.classList.remove(activeClass);
      } else if (e.target.closest(trigger)) {
        popup.classList.toggle(activeClass);
      } else if (e.target == popup || popup.contains(e.target)) {
        popup.classList.add(activeClass);
      } else {
        popup.classList.remove(activeClass);
      }
    });
  }

  bindPopup({
    popupWrapper: '.popup-list[data-popup="My Books"]',
    trigger: ".navbar__btn--my-books",
    activeClass: "popup-list--active",
    close: ".popup-list__close",
  });
  bindPopup({
    popupWrapper: '.popup-list[data-popup="Wish List"]',
    trigger: ".navbar__btn--wishlist",
    activeClass: "popup-list--active",
    close: ".popup-list__close",
  });
}

/* harmony default export */ __webpack_exports__["default"] = (popup);


/***/ }),

/***/ "./src/js/modules/quickView.js":
/*!*************************************!*\
  !*** ./src/js/modules/quickView.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ "./src/js/modules/modals.js");


function quickView(response) {
  Object(_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();

  function bookModalTemplate(bookInfo) {
    return `
    <div class="modal__img">
    <img src="${bookInfo[0].photo}" alt="${bookInfo[0].title}">
    </div>
    <div class="modal__content">
        <div class="modal__title">
            <h2>${bookInfo[0].title}</h2>
        </div>
        <div class="modal__author">
            by ${bookInfo[0].author}
        </div>
        <div class="modal__description">
            ${bookInfo[0].description}
        </div>
    </div>
    `;
  }

  document.querySelectorAll("[data-learn-more]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      let target = e.currentTarget;
      let parent = target.closest(".product__card");
      let bookId = parent.dataset.id;

      document.querySelector(".modal__inner").innerHTML = "";

      let bookInfo = response.filter((item) => {
        return item.id == bookId;
      });

      document
        .querySelector(".modal__inner")
        .insertAdjacentHTML("afterbegin", bookModalTemplate(bookInfo));
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (quickView);


/***/ }),

/***/ "./src/js/modules/quotes.js":
/*!**********************************!*\
  !*** ./src/js/modules/quotes.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db */ "./src/js/db.js");


function quotes() {
  function getQuotes(data) {
    const quotesWrapper = document.querySelector(".quotes__inner");
    let paused = false;

    function quoteTemplate({quote, author}) {
      return `
      <div class="quotes__text">
        ${quote}
      </div>
      <div class="quotes__author">${author}</div>
      `;
    }

    let i = Math.floor(Math.random() * Math.floor(data.length));
    quotesWrapper.innerHTML = quoteTemplate(data[i]);

    function autoPlay() {
      paused = setInterval(() => {
        let i = Math.floor(Math.random() * Math.floor(data.length));

        quotesWrapper.classList.remove("fadeIn");
        quotesWrapper.classList.add("fadeOut");

        setTimeout(() => {
          quotesWrapper.style.visibility = "hidden";
          quotesWrapper.innerHTML = "";
          quotesWrapper.innerHTML = quoteTemplate(data[i]);
          quotesWrapper.style.visibility = "visible";
          quotesWrapper.classList.remove("fadeOut");
          quotesWrapper.classList.add("animated", "fadeIn");
        }, 500);
      }, 10000);
    }
    autoPlay();

    quotesWrapper.addEventListener("mouseenter", () => {
      clearInterval(paused);
    });
    quotesWrapper.addEventListener("mouseleave", () => {
      autoPlay();
    });
  }

  getQuotes(_db__WEBPACK_IMPORTED_MODULE_0__["DB"].quotes);
}

/* harmony default export */ __webpack_exports__["default"] = (quotes);


/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function scrolling(upSelector) {
  const scrollUp = document.querySelector(upSelector);

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 500) {
      scrollUp.style.visibility = "visible";
      scrollUp.classList.add("animated", "fadeIn");
      scrollUp.classList.remove("fadeOut");
    } else {
      scrollUp.classList.add("fadeOut");
      scrollUp.classList.remove("fadeIn");
      scrollUp.style.visibility = "hidden";
    }
  });

  // Scrolling with requestAnimationFrame
  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.2;

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
          r =
            toBlock < 0
              ? Math.max(widthTop - progress / speed, widthTop + toBlock)
              : Math.min(widthTop + progress / speed, widthTop + toBlock);

        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (scrolling);


/***/ }),

/***/ "./src/js/modules/viewFullList.js":
/*!****************************************!*\
  !*** ./src/js/modules/viewFullList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ "./src/js/modules/modals.js");


function viewFullList(response) {
  Object(_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();

  function bookModalTemplate(data) {
    let readBook = '';
    let readSummary = '';

    if (data.bookLink.trim() != '') {
      readBook = ` 
        <a href="${data.bookLink}" class="btn list-item__book" target="_blank">
          Read book
        </a>
      `;
    } else { readBook = ''; }

    if (data.summaryLink.trim() != '') {
      readSummary = ` 
        <a href="${data.summaryLink}" class="btn list-item__summary" target="_blank">
          Read summary
        </a>
      `;
    } else { readSummary = ''; }

    return `
    <div class="list-item" data-id="${data.id}">
      <div class="list-item__img">
        <img src="${data.photo}" alt="${data.title}"></img>
      </div>
      <div class="list-item__content">
          <div class="list-item__title">
              <h2>${data.title}</h2>
          </div>
          <div class="list-item__author">
              by ${data.author}
          </div>
          <div class="list-item__btns">
            ${readBook}
            ${readSummary}
          </div>
      </div>
      <button class="list-item__delete">
        <svg>
          <use xlink:href="assets/icons/sprite.svg#close"></use>
        </svg>
      </button>
    </div>
    `;
  }

  document.querySelectorAll(".popup-list__more").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelector(".modal__inner").innerHTML = "";
      let list = document.createElement("div");
      list.classList.add("modal__list");
      document.querySelector(".modal__inner").appendChild(list);

      let target = e.currentTarget;
      let parent = target.closest(".popup-list");
      let books = parent.querySelectorAll(".popup-list__item");

      books.forEach((book) => {
        let id = book.dataset.id;

        let filteredData = response.filter((item) => {
          return item.id == id;
        });

        list.insertAdjacentHTML(
          "beforeend",
          bookModalTemplate(filteredData[0])
        );
      });
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (viewFullList);


/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

async function getResource(url) {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}




/***/ }),

/***/ 0:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/js/db.js ./src/js/main.js ./src/js/modules/booksStorage.js ./src/js/modules/calcScroll.js ./src/js/modules/cards.js ./src/js/modules/modals.js ./src/js/modules/popup.js ./src/js/modules/quickView.js ./src/js/modules/quotes.js ./src/js/modules/scrolling.js ./src/js/modules/viewFullList.js ./src/js/services/services.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Docs C\Desktop\Programare\MyProjects\book-depository\src\js\db.js */"./src/js/db.js");
__webpack_require__(/*! D:\Docs C\Desktop\Programare\MyProjects\book-depository\src\js\main.js */"./src/js/main.js");
__webpack_require__(/*! D:\Docs C\Desktop\Programare\MyProjects\book-depository\src\js\modules\booksStorage.js */"./src/js/modules/booksStorage.js");
__webpack_require__(/*! D:\Docs C\Desktop\Programare\MyProjects\book-depository\src\js\modules\calcScroll.js */"./src/js/modules/calcScroll.js");
__webpack_require__(/*! D:\Docs C\Desktop\Programare\MyProjects\book-depository\src\js\modules\cards.js */"./src/js/modules/cards.js");
__webpack_require__(/*! D:\Docs C\Desktop\Programare\MyProjects\book-depository\src\js\modules\modals.js */"./src/js/modules/modals.js");
__webpack_require__(/*! D:\Docs C\Desktop\Programare\MyProjects\book-depository\src\js\modules\popup.js */"./src/js/modules/popup.js");
__webpack_require__(/*! D:\Docs C\Desktop\Programare\MyProjects\book-depository\src\js\modules\quickView.js */"./src/js/modules/quickView.js");
__webpack_require__(/*! D:\Docs C\Desktop\Programare\MyProjects\book-depository\src\js\modules\quotes.js */"./src/js/modules/quotes.js");
__webpack_require__(/*! D:\Docs C\Desktop\Programare\MyProjects\book-depository\src\js\modules\scrolling.js */"./src/js/modules/scrolling.js");
__webpack_require__(/*! D:\Docs C\Desktop\Programare\MyProjects\book-depository\src\js\modules\viewFullList.js */"./src/js/modules/viewFullList.js");
module.exports = __webpack_require__(/*! D:\Docs C\Desktop\Programare\MyProjects\book-depository\src\js\services\services.js */"./src/js/services/services.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map