
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$("a").on("click", function(event){
    if(hash !== ''){
        event.preventDefault();

        const idTag = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000,
        function(){
            window.location.hash = idTag;
        });
    }
});