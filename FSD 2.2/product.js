        function filterProducts() {
            var selected = document.getElementById("category").value;
            var cards = document.getElementsByClassName("card");
            for (var i = 0; i < cards.length; i++) {
                if (selected === "all") {
                    cards[i].style.display = "block";
                } 
                else if (cards[i].classList.contains(selected)) {
                    cards[i].style.display = "block";
                } 
                else {
                    cards[i].style.display = "none";
                }
            }
        }