source 'https://rubygems.org'
ruby '2.1.7'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

group :jekyll_plugins do
  gem 'github-pages', versions['github-pages']
end

group :api do
  gem 'netrc'
  gem 'octokit'
end

group :test do
  gem 'html-proofer'
end
