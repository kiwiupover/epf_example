desc "Reset the heroku DB nightly"
task :reset_db => :environment do
  File.delete("db/schema.rb")
  Rake::Task["db:drop"].execute
  Rake::Task["db:create"].execute
  Rake::Task["db:migrate"].execute
  Rake::Task["db:seed"].execute
end
