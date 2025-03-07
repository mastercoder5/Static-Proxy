class GoogleClassroom extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Static Proxy</title>
    <meta name="description" content="Ultraviolet is a highly sophisticated proxy used for evading internet censorship or accessing websites in a controlled sandbox using the power of service-workers. Unblock sites today!" />
    <meta name="keywords" content="proxy, web proxy, ultraviolet, service workers, unblock websites, unblock chromebook, free web proxy, proxy list, proxy sites, un block chromebook, online proxy, proxy server, proxysite, proxy youtube, bypass securly, bypass iboss, bypass lightspeed filter, holy unblocker, chromebooks, titanium network, unblock youtube, youtube proxy, unblocked youtube, youtube unblocked">
    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#434c5e">
    <meta name="googlebot" content="index, follow, snippet" />
    <link rel="stylesheet" href="index.css">
</script>
<body onload = "showAlert()" >
</head>

<body>
<br><br><br>
<br><br>
<br><br>
    </div>
    <div class="desc">
        <h1 class="title">Static Proxy</h1><br><br>
    </div>
<br>
    <form>
        <input class="search-input" placeholder="Search the web freely...">
    </form>
    <div class="text-center">
   <button>About:Blank</button>
<script>
    var urlObj = new window.URL(window.location.href);
    var url = "/index.html";
 
    if (url) {
        var win;
 
        document.querySelector('button').onclick = function() {
            if (win) {
                win.focus();
            } 
            else {
                win = window.open();
                win.document.body.style.margin = '0';
                win.document.body.style.height = '100vh';
                var iframe = win.document.createElement('iframe');
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.margin = '0';
                iframe.src = url;
                win.document.body.appendChild(iframe);
                location.replace("https://lms.fcps.edu/home");
            }
        };
    }
</script>
<style>*{color:white;font-family:arial;text-align:center}button{width:220px;height:40px;border-radius:12px;background-color:#080808;font-family:Arial,Helvetica,sans-serif;border:none;transition:background-color 500ms}button:hover{background-color:#080808}</style>
  </div>
<br>
    <div>
    <footer style="bottom: 0; position: fixed;">
        <p>&copy; CarbonNetwork</p>
    </footer></div>
    <script src="uv/uv.bundle.js"></script>
    <script src="uv/uv.config.js"></script>
    <script src="index.js"></script>
</body>

</html>`; // Set inner HTML when the element is created
    }
}

customElements.define("google-classroom", GoogleClassroom); // Register the custom element