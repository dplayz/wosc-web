---
title: "SMP Server"
date: 2022-01-13T10:34:50+08:00
draft: false
---
<script src="/scripts/smp-query.js"></script>
<style>
    body{
	background: rgb(52,153,69);
	background: -moz-linear-gradient(131deg, rgba(52,153,69,1) 45%, rgba(85,85,255,1) 100%);
	background: -webkit-linear-gradient(131deg, rgba(52,153,69,1) 45%, rgba(85,85,255,1) 100%);
	background: linear-gradient(131deg, rgba(52,153,69,1) 45%, rgba(85,85,255,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#349945",endColorstr="#5555FF",GradientType=1);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    z-index:-2;
}
</style>
<div class="serverstatus pagetitle">
    <img src="/images/logo.png" class="style-exclude" width="150px">
        <div class="row">
            <div class="column">
                <div class="mypanel">
                    <table>
                        <tbody><tr><th>Server IP Address</th><td><span id="hostname"></span></td></tr>
                        <tr><th>Server Port</th><td><span id="port"></span></td></tr>
                        <tr><th>Online</th><td><span id="isonline"></span></td></tr>
                         <tr><th>MOTD</th><td><span id="motd"></span></td></tr>
                        <tr><th>Version Running</th><td><span id="version"></span></td></tr>
                        <tr><th>Players</th><td><span id="playeronline"></span>/<span id="playermax"></span></td></tr>
                        <tr><th>Map Name</th><td><span id="mapname"></span></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="column">
                <img src="https://gamestatus.xyz/graph/graph_N7SOBwrOiPTDuGv.png?id=1642503126590" alt="" width="80%" class="style-exclude"/>
            </div>
            </div>
                <a class="button button-green join-btn" href="https://link.worldofsteelcraft.tk/smp-save">Join server(Members Only)</a>
    </div>
</div>
