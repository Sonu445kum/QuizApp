const questions = [
    {
        question:"Which is The Largest Animal in the World?",
        answers:[
            {text:"shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:" What is CSS?",
        answers:[
            {text:"CSS is a style sheet language",correct:false},
            {text:"CSS is designed to separate the presentation and content, including layout, colors, and fonts",correct:false},
            {text:"CSS is the language used to style the HTML documents",correct:false},
            {text:"All of the mentioned",correct:true},
        ] 

    },
    {
        question:"Which of the following tag is used to embed css in html page?",
        answers:[
            {text:"css",correct:false},
            {text:`!DOCTYPE html`,correct:false},
            {text:`script`,correct:false},
            {text:`style`,correct:true},
        ] 

    },
    {
        question:"Which of the following CSS selectors are used to specify a group of elements?",
        answers:[
            {text:"tag",correct:false},
            {text:"id",correct:false},
            {text:"class",correct:true},
            {text:"both class and tag",correct:false},
        ] 

    },
    {
        question:"Which of the following has introduced text, list, box, margin, border, color, and background properties?",
        answers:[
            {text:"HTML",correct:false},
            {text:" PHP",correct:false},
            {text:"CSS",correct:true},
            {text:"Ajax",correct:false},
        ] 

    },
    {
        question:" Which of the following CSS framework is used to create a responsive design?",
        answers:[
            {text:"django",correct:false},
            {text:"rails",correct:false},
            {text:"laraWell",correct:false},
            {text:"bootstrap",correct:true},
        ] 

    },
    {
        question:" Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
        answers:[
            {text:"tag",correct:false},
            {text:"id",correct:true},
            {text:"class",correct:false},
            {text:"both class and tag",correct:false},
        ] 

    },
    {
        question:"Which of the following type of HTML tag is used to define an internal style sheet?",
        answers:[
            {text:`script`,correct:false},
            {text:`link`,correct:false},
            {text:`class`,correct:false},
            {text:`style`,correct:true},
        ] 

    },
    {
        question:"Which of the following CSS property is used to make the text bold?",
        answers:[
            {text:"text-decoration:bold",correct:false},
            {text:"font-weight:bold",correct:true},
            {text:"font-style:bold",correct:false},
            {text:"text-align:bold",correct:false},
        ] 

    },
    {
        question:" Which of the following CSS style property is used to specify an italic text?",
        answers:[
            {text:"style",correct:false},
            {text:"font",correct:false},
            {text:"font-style",correct:true},
            {text:`@font-face`,correct:false},
        ] 

    },
];

            const questionElement = document.getElementById("question");
            const answerButtons    = document.getElementById("answer-buttons");
            const nextButton      = document.getElementById("next-btn");

            let currentQuestionIndex =0;
            let score =0;

            function startQuiz(){
                currentQuestionIndex = 0;
                score = 0;
                nextButton.innerHTML = "Next";
                showQuestion();
            }
            function showQuestion(){
                resetState();
                let currentQuestion = questions[currentQuestionIndex];
                let questionNo = currentQuestionIndex + 1;
                questionElement.innerText = `Question ${questionNo}: ${currentQuestion.question}`;

                currentQuestion.answers.forEach(answer =>{
                    const button = document.createElement("button");
                    button.innerHTML = answer.text;
                    button.classList.add("btn");
                    answerButtons.appendChild(button);

                    if(answer.correct){
                        button.dataset.correct = answer.correct;
                    }

                    button.addEventListener("click",selectAnswer);
                });
            };

            function resetState(){
                nextButton.style.display = "none";
                while (answerButtons.firstChild){
                    answerButtons.removeChild(answerButtons.firstChild);
                }
            }

            function selectAnswer(e){
                const selectedButton = e.target;
                const isCorrect = selectedButton.dataset.correct === "true";
                if(isCorrect){
                    selectedButton.classList.add("correct");
                    score++;
                }else{
                    selectedButton.classList.add("incorrect");
                }

                Array.from(answerButtons.children).forEach(button=>{
                    if(button.dataset.correct === "true"){
                        button.classList.add("correct");
                    }
                    button.disabled= true;
                });
                nextButton.style.display = "block";
            }
            function showScore(){
                resetState();
                questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
                nextButton.innerHTML = "Please Play Again";
                nextButton.style.display = "block";
            }

            function handleNextButton(){
                currentQuestionIndex++;
                if(currentQuestionIndex <questions.length){
                    showQuestion();
                }else{
                    showScore();
                }
            }

            nextButton.addEventListener("click",()=>{
                if(currentQuestionIndex <questions.length){
                    handleNextButton();
                }else{
                    startQuiz();
                }
            })

            startQuiz();