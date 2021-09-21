class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter Your Answer Here....");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3')
    this.answer1 = createElement('h4')
    this.answer2 = createElement('h4')
    this.answer3 = createElement('h4')
    this.answer4 = createElement('h4')


    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question:- What starts and ends with the letter'E' but only has one letter inside?")
    this.question.position(150, 50);
    this.answer1.html("1.Everyone")
    this.answer1.position(150, 70);
    this.answer2.html("2.Envelope")
    this.answer2.position(150, 90);
    this.answer3.html("3.Estimate")
    this.answer3.position(150, 110);
    this.answer4.html("4.Example")
    this.answer4.position(150, 130);

    this.input1.position(150, 230);
    this.button.position(350, 300);
    this.input2.position(450, 230)
    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("Thank You, Your Answer Has Been Submitted")
      this.message.position(300,300)
    })


  }
}
