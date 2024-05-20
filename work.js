// Function to change the big image based on the mini box hovered over
function setupImageSwitcher() {
    const miniImages = document.querySelectorAll('.mini-image'); // Select all mini images
    const bigImage = document.getElementById('bigImage'); // Select the big image by its ID

    miniImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            const newSrc = this.getAttribute('data-big-image'); // Get the new image source from data attribute
            bigImage.src = newSrc; // Set the new image source to the big image
        });
    });
}

// Run the function when the document is fully loaded
document.addEventListener('DOMContentLoaded', setupImageSwitcher);

const app = Vue.createApp({
    data () {
        return {
            cart: [],
           premium: true
        } 
        },
        methods: {
            updateCart(id) {
                this.cart.push(id)
            },
            removeById(id) {
                const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.cart.splice(index, 1)
                }
            }
            }
        })