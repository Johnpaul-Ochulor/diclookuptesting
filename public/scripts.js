const input = document.getElementById("search");
const button = document.getElementById("BTN");
const resultDiv = document.getElementById("result");

button.addEventListener("click", async()=>{
    const word = input.value.trim().toLowerCase();
    if(!word){
        resultDiv.textContent = "Please enter a word.";
        return;
    }
    try{
        const response = await
        fetch(`http://localhost:3000/define?word=${word}`);

        const data = await response.json();

        if (response.status ===404){
            resultDiv.textContent = `"${word}" not found in the dictionary.`;
        } else{
            resultDiv.textContent = `${data.word}: ${data.definition}`;
        }
    } catch(err){
        resultDiv.textContent = "Error connecting to the server."
        console.error(err)
    }
})