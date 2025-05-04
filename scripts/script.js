document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("downloadLink").addEventListener("click", function(event) {
        event.preventDefault(); 

        fetch(this.href)
            .then(response => response.blob()) 
            .then(blob => {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "imagemForYou3.jpg"; 
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => console.error("Erro ao baixar a imagem:", error));
    });
});
