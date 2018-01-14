class CryptoController < ApplicationController
    include HTTParty

    def index
        @response = HTTParty.get('https://api.coinmarketcap.com/v1/ticker/?limit=15');
        
        
    end
end
