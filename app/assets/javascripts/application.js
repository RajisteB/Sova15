// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require socket.io
//= require turbolinks
//= require_tree .

let coinList = [];
let subscription = [];

$(document).ready(function() {
    $.ajax({ url:"https://api.coinmarketcap.com/v1/ticker/?limit=15", success: function(result) {
        
        result.forEach(x => {
            if (x.symbol == 'MIOTA') {
                x.symbol = 'IOT'
                coinList.push(x.symbol);
            } else {
                coinList.push(x.symbol);
            }
        })

        coinList.forEach(sym => {
            subscription.push(`5~CCCAGG~${sym}~USD`)
        })

    }});

    var currentPrice = {};
    var socket = io.connect('https://streamer.cryptocompare.com/');
    console.log(subscription);
    socket.emit('SubAdd', { subs: subscription });
    socket.on("m", function(message) {
        var messageType = message.substring(0, message.indexOf("~"));
        var res = [];
        if (messageType == CCC.STATIC.TYPE.CURRENTAGG) {
            res = CCC.CURRENT.unpack(message);
            // console.log(res);
        }
    })
    
})