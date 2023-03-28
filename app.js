// consts (naming classes and IDs from HTML to a name fo JS)
const burgerMenu = document.querySelector('.burger-menu');
const activebackgroundMenu = document.querySelector('#active');
const activeMenu = document.querySelector('#main-menu');
const btn1 = document.querySelector("#button-1");
const btn2 = document.querySelector("#button-2");
const btn3 = document.querySelector("#button-3");
const maininput = document.querySelector("#footer-input")
const send = document.querySelector("#send-btn")
const ToastContainer = document.querySelector("#toast")
const infos = document.querySelectorAll('.info');
const infos2 = document.querySelector('.info-container')
const soal = document.querySelector('.user')
const javab = document.querySelector('.AI')
const javabJoke = document.querySelector('.javab-joke');
const btnsClickable = document.querySelectorAll(".clickable");


// options for the API request
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json'
  }
};





// if user clicked on menubutton open menu
burgerMenu.addEventListener('click', function(){
  activebackgroundMenu.classList.add('active');
  activeMenu.classList.add('menu-active');
});


// make the thing on top to nother function for later
function opningMenu (){
  activebackgroundMenu.classList.add('active');
  activeMenu.classList.add('menu-active');
}


// function for closing menu (i did onclick in HTML)
function remove () {
  activebackgroundMenu.classList.remove('active');
  activeMenu.classList.remove('menu-active');
}

//  if user clicked on any of page, 3 button in info (remove the "" and → from it and put it in maininput)
btnsClickable.forEach((btn) => {
  btn.addEventListener("click", () => {
    maininput.value = btn.innerHTML.trim().replace(/"/g, '' ).replace(/["→]/g, '');
  })
})


// main function that doing all the thing in the down part
function execute() {


  // if input was empty remove send image for 4.5 s then add roshan cl
   if(maininput.value.trim() == ""){
     send.style = "display:none";
     setTimeout(() => {
      send.style = "display:block";
     }, 4800);
    ToastContainer.classList.add('roshan');
    setTimeout(() => {
      ToastContainer.classList.remove('roshan');
    }, 2700);
  } 
  
  // if the code on top didnt work do this 
  else {

    // removeing anything from .info in HTML
    infos.forEach(info => {
      info.remove();
    });
    
    // making 2div call qustion and answer
    const qustion = document.createElement('div');
    const answer = document.createElement('div');


    // telling to show the qustion and answer (div) in infos2  (infos2 = info-container(HTML))
    infos2.append(qustion,answer) 


    // adding class to qustion and answer that we made
    qustion.classList.add("qustion")
    answer.classList.add("answer")


    // user message
    qustion.insertAdjacentHTML("afterbegin", `<p class="user">${maininput.value}</p>`);

    const inputValue = maininput.value.trim().toLowerCase();

    // Hi 
    if (inputValue == "hi") {
      setTimeout(() => {
        answer.insertAdjacentHTML("afterbegin", `<p class="AI">Hi how can i help you to day?</p>`);
      }, 2000);

      // whats up
    } else if (inputValue == "whats up") {
        setTimeout(() => {
          answer.insertAdjacentHTML("afterbegin", `<p class="AI">I'm doing well, thank you. How about you?</p>`);
        }, 2000);


        // who are you
    }  else if (inputValue == "who are you") {
        setTimeout(() => {
          answer.insertAdjacentHTML("afterbegin", `<p class="AI">My name is chatGPT im an AI that is so cool</p>`);
        }, 2000);
    } 


      // bye
      else if (inputValue == "bye") {
        setTimeout(() => {
          answer.insertAdjacentHTML("afterbegin", `<p class="AI">See ya</p>`);
        }, 2000);
    } 


    // bad words
      else if (inputValue == "fuck you") {
        setTimeout(() => {
          answer.insertAdjacentHTML("afterbegin", `<p class="AI"> It's important to treat others with respect and kindness, even in moments of frustration or anger. </p>`);
        }, 2000);
    } 


    // time
      else if (inputValue == "what time is it") {
        let time = (new Date())
        setTimeout(() => {
          answer.insertAdjacentHTML("afterbegin", `<p class="AI">${time}</p>`);
        }, 2000);
    } 

    // open menu
      else if (inputValue == "open menu") {
        setTimeout(() => {
          answer.insertAdjacentHTML("afterbegin", `<p class="AI">OK, here you go</p>`);
        }, 1000); 
        setTimeout(() => {
          opningMenu()
        }, 2000)
    } 

    // Explain quantum computing in simple terms
    else if (inputValue == "explain quantum computing in simple terms") {
      setTimeout(() => {
        answer.insertAdjacentHTML("afterbegin", `<p class="AI">Quantum computing is a type of computing that uses quantum mechanics to process information. Traditional computers use binary digits (bits) to represent information, which can be either 0 or 1. Quantum computers use quantum bits (qubits) instead, which can be both 0 and 1 at the same time. This allows them to perform certain calculations much faster than traditional computers.<br>

        In a way, it's like having multiple computers working together simultaneously, solving problems in parallel instead of sequentially. And just like traditional computers use circuits to manipulate bits, quantum computers use quantum circuits to manipulate qubits.<br>
        
        Quantum computing is still a developing field and is not yet widely available for general use, but it has the potential to revolutionize many fields, such as cryptography, optimization, and materials science.
        
        </p>`);
      }, 2000); 
  } 


    // joke
    else if (inputValue == "tell me a joke") {
      setTimeout(() => {
        fetch('https://v2.jokeapi.dev/joke/Any', options)
          .then(response => response.json())
          .then(response => {
            const jokeSetup = response.setup;
            const jokeDelivery = response.delivery;
            if (jokeDelivery === undefined) {
              answer.insertAdjacentHTML("afterbegin", `<p class="AI">Sorry, I couldn't find any joke., please try again</p>`);
            } else {
              answer.insertAdjacentHTML("afterbegin", `<p class="AI">${jokeSetup} <br>
              <p class="javab-joke">${jokeDelivery}</p></p>`);
            }
          })
      }, 2000);
    } 
     
    
    // any
    else {
      setTimeout(() => {
        answer.insertAdjacentHTML("afterbegin", `<p class="AI">As an AI language model, I cannot answer this question.</p>`);
      }, 2000);
    }
    

    // making maininput disable (after runing commands)
      maininput.disabled = true;
      maininput.style.filter = "brightness(110%)"
      send.style = "display:none"
      setTimeout(() => {
        maininput.disabled = false;
        send.style = "display:block transition: visibility 0.7s;"
        maininput.style.filter = "brightness(100%)"
        maininput.focus()
      }, 2000);
    maininput.value = null;
    maininput.focus()
   }
  }
// END of this function




  
  // runing the execute with enter button ( on divise )
  maininput.onfocus   = () => {
    window.onkeydown = (e) => {
      if(e.which === 13) {
        execute()
      }
    }
  }
  
  
  // runing the execute with send button on (on the web)
  send.addEventListener('click', function() {
    execute()
  });






