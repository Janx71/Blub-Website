let currentPage = 1;
const totalPages = 10;

function createOutputRectangles(numberOfRectangles, multy) {
    const outputContainer = document.getElementById("output-container");

    // Clear the current rectangles (if any)
    outputContainer.innerHTML = "";

    // Create the specified number of rectangles and append them to the output container
    for (let i = 1; i <= numberOfRectangles; i++) {
        const rectangle = document.createElement("div");
        
        //Player Position
        const textSpot = document.createElement("span");
        textSpot.className = "text-spot-1";
        textSpot.textContent = `#${i + (20 * (currentPage - 1))}`;
        rectangle.appendChild(textSpot);
        
        //Player Name (temp)
        const textSpot2 = document.createElement("span");
        textSpot2.className = "text-spot-2";
        textSpot2.textContent = `[Champion] Placeholder123`;
        textSpot2.style.color = "gold";
        rectangle.appendChild(textSpot2);
        
        //Upvotes (temp)
        const textSpot3 = document.createElement("span");
        textSpot3.className = "text-spot-3";
        textSpot3.textContent = `23`;
        rectangle.appendChild(textSpot3);
        
        //Downvotes (temp)
        const textSpot4 = document.createElement("span");
        textSpot4.className = "text-spot-4";
        textSpot4.textContent = `6`;
        rectangle.appendChild(textSpot4);
        
        //Scrore (temp)
        const textSpot5 = document.createElement("span");
        textSpot5.className = "text-spot-5";
        textSpot5.textContent = `79.3`;
        textSpot5.style.color = "orange";
        rectangle.appendChild(textSpot5);
        
        
        rectangle.classList.add("rectangle");
        outputContainer.appendChild(rectangle);

        // Set the opacity to 1 with a delay based on the index
        setTimeout(() => {
            rectangle.style.opacity = 1;
            }, i * 40); // Adjust the delay between rectangles here (in milliseconds)
    }
}

createOutputRectangles(20); 

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePage();
    }
}

function setPage(targetPage) {
    currentPage = targetPage;
    updatePage();
}

function updatePage(){
    createOutputRectangles(20, currentPage); 
}
