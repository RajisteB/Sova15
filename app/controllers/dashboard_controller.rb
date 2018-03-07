class DashboardController < ApplicationController
    include HTTParty

    def dash
        @cryptoNews = HTTParty.get('https://newsapi.org/v2/top-headlines?q=crypto&apiKey=f98fb0a0ce69473d9c7e73599535d43b')
        @bitcoinNews = HTTParty.get('https://newsapi.org/v2/top-headlines?q=bitcoin&apiKey=f98fb0a0ce69473d9c7e73599535d43b')
        
        def aggNews
            articles = []
            topNews = []
            aggregate = [@cryptoNews, @bitcoinNews]
            aggregate.each do |a|
                a["articles"].each do |b|
                    articles.push(b)
                end
            topNews = articles[0, 12]
            end
            return topNews
        end
        @stories = aggNews()
    
    
    end
end
