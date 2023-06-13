// Write JavaScript here<script>
        function compartilharFacebook() {
            var link = document.getElementById("linkInput").value;
            var url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(link);
            window.open(url);
        }

        function compartilharInstagram() {
            var link = document.getElementById("linkInput").value;
            var url = "https://www.instagram.com/cid_identidadevisual/" // Substitua "xxx" pelo seu perfil do Instagram
            window.open(url);
        }

        function compartilharPinterest() {
            var link = document.getElementById("linkInput").value;
            var url = "https://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(link);
            window.open(url);
        }

        function compartilharWhatsApp() {
            var link = document.getElementById("linkInput").value;
            var message = "Confira este link da Shopee: " + link;
            var url = "https://api.whatsapp.com/send?text=" + encodeURIComponent(message);
            window.open(url);
        }
    </script>