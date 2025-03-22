document.addEventListener("DOMContentLoaded", function() {
    // Dynamically add student info
    document.getElementById("studentInfo").innerText = "Student: Matias Caicedo | ID: 1277165";

    // Pizza class
    class Pizza {
        constructor(size, crust, toppings, instructions) {
            this.size = size;
            this.crust = crust;
            this.toppings = toppings;
            this.instructions = instructions;
        }

        getDescription() {
            return `
                <p><strong>Size:</strong> ${this.size}</p>
                <p><strong>Crust:</strong> ${this.crust}</p>
                <p><strong>Toppings:</strong> ${this.toppings.join(", ") || "None"}</p>
                <p><strong>Instructions:</strong> ${this.instructions || "None"}</p>
            `;
        }
    }

    // Handle form submission
    document.getElementById("pizzaForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let size = document.getElementById("size").value;
        let crust = document.getElementById("crust").value;
        let instructions = document.getElementById("instructions").value;

        let toppings = [];
        document.querySelectorAll("input[type=checkbox]:checked").forEach(checkbox => {
            toppings.push(checkbox.value);
        });

        let customerPizza = new Pizza(size, crust, toppings, instructions);

        // Display order summary
        document.getElementById("orderSummary").innerHTML = customerPizza.getDescription();
    });
});
