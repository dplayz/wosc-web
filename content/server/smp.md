---
draft: true
title: "SMP Server"
date: 2022-01-13T10:34:50+08:00
draft: false
description: "Check the WoSC SMP Server Status here!"
body_class: smp-status
singlepage: true
---
{{<html>}}
<script src="/scripts/minecraft_text/minecraft_text.min.js"></script>
<script src="/scripts/smp-query.js"></script>
<link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/minecraftia" type="text/css"/>
<style>  
div.serverstatus{
    max-width:800px;
    margin:auto;
}
table.serverstatus-data-table{
    background-image: url("https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/brown-dirt-minecraft-pattern_thumb.jpg");   
    margin:auto;
    min-width:95%;
    width:95%;
    border:none !important;
    color:white; 
    border-radius: 10px;
    max-width:800px;
    transition: width 0.5s, height 0.5s;
}
table.serverstatus-data-table tr:not(:first-child) td{
    display:flex;
}
table.serverstatus-data-table tr:not(:first-child) th{
    width:150px;
}
div.serverstatus table, div.serverstatus  tr, div.serverstatus  th, div.serverstatus td{
    border:unset !important;
} 
    div.APIResponseDataContainer{
        font-display: swap;
        font-family: 'MinecraftiaRegular';
        background-color:black; color:white; 
        border-radius:5px; 
        padding:2px 5px; 
        line-break: anywhere;
        display:inline-block;
    }
    /* Code: https://codepen.io/thetallweeks/pen/yybGra */
    .loading-text:after {
        overflow: hidden;
        display: inline-block;
        vertical-align: bottom;
        -webkit-animation: ellipsis steps(4,end) 900ms infinite;      
        animation: ellipsis steps(4,end) 900ms infinite;
        content: "\2026"; /* ascii code for the ellipsis character */
        width: 0px;
    }
    @keyframes ellipsis {
        to {
        width: 1.25em;    
        }
    }
    @-webkit-keyframes ellipsis {
        to {
        width: 1.25em;    
        }
    }
    .modal {
  display: none;
}
.modal.is-open {
  display: block;
}      
    </style>
<div class="serverstatus pagetitle">  
                <noscript>Whoops! The server information block won't work until you enable Javascript, Please Enable it <style>div.serverstatuspanel{display:none;}</style></noscript>
                    <div class="serverstatuspanel">
                    <table id="smpstatus" class="serverstatus-data-table">
                        <tbody>
                        <tr><td colspan="2"><img src="/images/logo.png" class="style-exclude" width="150px"><br><h3>SMP Server Information</h3></td></tr>
                        <tr><th><i class="fa-solid fa-server"></i>  Server IP Address</th><td><div class="APIResponseDataContainer"><span id="hostname"><div class="loading-text">Loading</div></span></div></td></tr>
                        <tr><th><i class="fa-solid fa-server"></i>  Server Port</th><td><div class="APIResponseDataContainer"><span id="port"><div class="loading-text">Loading</div></span></div></td></tr>
                        <tr><th><i class="fa-solid fa-signal"></i>  Status</th><td><div id="isonline" class="APIResponseDataContainer"><div class="loading-text">Loading</div></div></td></tr>
                         <tr class="ping-disable-when-offline"><th><i class="fa-solid fa-circle-info"></i>  MOTD</th><td><div class="APIResponseDataContainer"><span id="motd"><div class="loading-text">Loading</div></span></div></td></tr>
                        <tr class="ping-disable-when-offline"><th><i class="fa-solid fa-code-branch"></i>Version Running</th><td><div class="APIResponseDataContainer"><span id="version"><div class="loading-text">Loading</div></span></div></td></tr>
                        <tr class="ping-disable-when-offline"><th><i class="fa-solid fa-people-group"></i> Players</th><td><div class="APIResponseDataContainer"><span id="playercount"><div class="loading-text">Loading</div></span></div></td></tr>
                        <tr class="ping-disable-when-offline"><th><i class="fa-solid fa-cube"></i> Map Name</th><td><div class="APIResponseDataContainer"><span id="mapname"><div class="loading-text">Loading</div></span></div></td></tr>
                        <tr><th><i class="fa-solid fa-clock"></i>  Time Checked</th><td><div class="APIResponseDataContainer"><span id="timefetched"><div class="loading-text">Loading</div></span></div></td></tr>
                        </tbody>
                    </table>
                    <!--{{<collapsible name="Player Graph (temporary disabled)" class="collapsible-notbig collapsible-fullwidth">}}
                        <iframe id="playergraph" style="height:1075px; margin-top:-730px; border:5px #666 solid; border-radius:10px; width:360px;" scrolling="no"  loading="lazy"></iframe
                    {{</collapsible>}}-->
                    <div id="isofflinecss"></div>
                    <style>div.serverstatuspanel{width:100%;}</style>
                </div>
                <a class="button" href="https://link.worldofsteelcraft.tk/smp-save"><i class="fa-solid fa-gamepad"></i>  Join server(Members Only)</a><button class="button" data-micromodal-trigger="modal-1" id="captureButton"><i class="fas fa-download"></i> Capture and Download Image</button>
</div>
  <div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
      <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <header class="modal__header">
          <h2 class="modal__title" id="modal-1-title">
            Download Image
          </h2>
          <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
        </header>
        <main class="modal__content" id="modal-1-content">
          <p>
            <img src="https://placehold.co/200x200?text=Capturing+Page...&font=opensans" id="smpstatusdlpreview" width="100%">
          </p>
        </main>
        <footer class="modal__footer">
          <button id="smpstatusdl" class="modal__btn modal__btn-primary" onclick="smpstatsCaptureDL()">Download</button>
          <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window" onclick="document.getElementById('smpstatusdlpreview').src = `https://placehold.co/200x200?text=Capturing+Page...&font=opensans` ">Close</button>
        </footer>
      </div>
    </div>
  </div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" integrity="sha512-BNaRQnYJYiPSqHHDb58B0yaPfCu+Wgds8Gp/gU33kqBtgNS4tSPHuGibyoeqMV/TJlSKda6FXzoEyYGjTe+vXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://unpkg.com/micromodal/dist/micromodal.min.js"></script>
<script src="/scripts/smp-query-capture.js"></script>



<style>
    .modal {
  font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;
}

.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__container {
  background-color: #fff;
  padding: 30px;
  max-width: 500px;
  max-height: 100vh;
  border-radius: 4px;
  overflow-y: auto;
  box-sizing: border-box;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal__title {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.25;
  color: #00449e;
  box-sizing: border-box;
}

.modal__close {
  background: transparent;
  border: 0;
}

.modal__header .modal__close:before { content: "\2715"; }

.modal__content {
  margin-top: 2rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  color: rgba(0,0,0,.8);
}

.modal__btn {
  font-size: .875rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
  background-color: #e6e6e6;
  color: rgba(0,0,0,.8);
  border-radius: .25rem;
  border-style: none;
  border-width: 0;
  cursor: pointer;
  -webkit-appearance: button;
  text-transform: none;
  overflow: visible;
  line-height: 1.15;
  margin: 0;
  will-change: transform;
  -moz-osx-font-smoothing: grayscale;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  transition: -webkit-transform .25s ease-out;
  transition: transform .25s ease-out;
  transition: transform .25s ease-out,-webkit-transform .25s ease-out;
}

.modal__btn:focus, .modal__btn:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

.modal__btn-primary {
  background-color: #00449e;
  color: #fff;
}



/**************************\
  Demo Animation Style
\**************************/
@keyframes mmfadeIn {
    from { opacity: 0; }
      to { opacity: 1; }
}

@keyframes mmfadeOut {
    from { opacity: 1; }
      to { opacity: 0; }
}

@keyframes mmslideIn {
  from { transform: translateY(15%); }
    to { transform: translateY(0); }
}

@keyframes mmslideOut {
    from { transform: translateY(0); }
    to { transform: translateY(-10%); }
}

.micromodal-slide {
  display: none;
}

.micromodal-slide.is-open {
  display: block;
}

.micromodal-slide[aria-hidden="false"] .modal__overlay {
  animation: mmfadeIn .3s cubic-bezier(0.0, 0.0, 0.2, 1);
}

.micromodal-slide[aria-hidden="false"] .modal__container {
  animation: mmslideIn .3s cubic-bezier(0, 0, .2, 1);
}

.micromodal-slide[aria-hidden="true"] .modal__overlay {
  animation: mmfadeOut .3s cubic-bezier(0.0, 0.0, 0.2, 1);
}

.micromodal-slide[aria-hidden="true"] .modal__container {
  animation: mmslideOut .3s cubic-bezier(0, 0, .2, 1);
}

.micromodal-slide .modal__container,
.micromodal-slide .modal__overlay {
  will-change: transform;
}
</style>


{{</html>}}
***
<!--
{{<homepage/side-by-side>}}
    {{<homepage/side-by-side-row>}}
        {{<homepage/content>}}
            <img src="https://placehold.co/801x500/png" width="100%">
        {{</homepage/content>}}
        {{<homepage/content >}}
            <h1>Sample heading 1</h1>
            <p>Sample description 1</p>
        {{</homepage/content>}} 
    {{</homepage/side-by-side-row>}}
        {{<homepage/side-by-side-row>}}
        {{<homepage/content>}}
            <img src="https://placehold.co/802x500/png" width="100%">
        {{</homepage/content>}}
        {{<homepage/content >}}
            <h1>Sample heading 2</h1>
            <p>Sample description 2</p>
        {{</homepage/content>}} 
    {{</homepage/side-by-side-row>}}
    {{<homepage/side-by-side-row>}}
        {{<homepage/content>}}
            <img src="https://placehold.co/803x500/png" width="100%">
        {{</homepage/content>}}
        {{<homepage/content >}}
            <h1>Sample heading 3</h1>
            <p>Sample description 3</p>
        {{</homepage/content>}} 
    {{</homepage/side-by-side-row>}}
    {{<homepage/side-by-side-row>}}
        {{<homepage/content>}}
            <img src="https://placehold.co/803x500/png" width="100%">
        {{</homepage/content>}}
        {{<homepage/content >}}
            <h1>Sample heading 3</h1>
            <p>Sample description 3</p>
        {{</homepage/content>}} 
    {{</homepage/side-by-side-row>}}
{{</homepage/side-by-side>}}
# Meet the admins and moderators!
{{<homepage/grid>}}
    {{<homepage/content >}}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPNyGMEfFDPHr-Gzfz1WYvpmumRsPx8pcIJd4JRe0zQ&s" width="50%">
        <h1>Admin 1</h1>
        <p>Sample description 1</p>
    {{</homepage/content>}} 
    {{<homepage/content >}}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPNyGMEfFDPHr-Gzfz1WYvpmumRsPx8pcIJd4JRe0zQ&s" width="50%">
        <h1>Admin 2</h1>
        <p>Sample description 2</p>
    {{</homepage/content>}} 
    {{<homepage/content >}}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPNyGMEfFDPHr-Gzfz1WYvpmumRsPx8pcIJd4JRe0zQ&s" width="50%">
        <h1>Admin 3</h1>
        <p>Sample description 3</p>
    {{</homepage/content>}} 
    {{<homepage/content >}}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPNyGMEfFDPHr-Gzfz1WYvpmumRsPx8pcIJd4JRe0zQ&s" width="50%">
        <h1>Admin 4</h1>
        <p>Sample description 4</p>
    {{</homepage/content>}} 
    {{<homepage/content >}}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPNyGMEfFDPHr-Gzfz1WYvpmumRsPx8pcIJd4JRe0zQ&s" width="50%">
        <h1>Moderator 1</h1>
        <p>Sample description 5</p>
    {{</homepage/content>}} 
{{</homepage/grid>}}
-->