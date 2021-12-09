window.onload = function() {

    document.getElementById('btn-open-menu').addEventListener('click', openModal)
    document.getElementById('btn-close-modal').addEventListener('click', closeModal)
    
    const overlayElement = document.getElementById("overlay")
    const modalElement = document.getElementById("menu-modal")
    
    function openModal() {
        overlayElement.style.display = 'block'
        modalElement.style.display = 'block'
    }

    function closeModal() {
        overlayElement.style.display = 'none'
        modalElement.style.display = 'none'
    }

}