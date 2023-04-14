async function fetchJoke()
{
    try{
        const response= await fetch('https://icanhazdadjoke.com/slack');

        if(!response.ok){
            const errorMessage=`Error occured: ${response.status}`;
            throw new Error(errorMessage);
        }
        const output=await response.json();
    
        const jokeText=output.attachments[0].text;
        const jokeElement=document.getElementById('jokeElement');
        jokeElement.innerHTML=jokeText;
    }
    catch(error){
        error.message;
    }
        
}

fetchJoke();



