# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "apiverve_vehiclefueleconomy"
  spec.version       = "1.2.6"
  spec.authors       = ["APIVerve"]
  spec.email         = ["hello@apiverve.com"]

  spec.summary       = "Vehicle Fuel Economy API - Ruby Client"
  spec.description   = "Vehicle Fuel Economy returns the EPA ratings of every car and light truck sold in the US since 1984, electric vehicles included. Search by make, model, year and fuel type to get city, highway and combined MPG (or MPGe), electric range, engine, drive and transmission. Paid plans add kWh per 100 miles, charge time at 240V, annual fuel cost, five-year savings, CO2 per mile and the EPA fuel economy, greenhouse gas and smog scores."
  spec.homepage      = "https://apiverve.com/marketplace/vehiclefueleconomy?utm_source=ruby&utm_medium=referral&utm_content=homepage"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 2.7.0"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/apiverve/vehiclefueleconomy-API/tree/main/ruby"
  spec.metadata["changelog_uri"] = "https://apiverve.com/changelog"
  spec.metadata["documentation_uri"] = "https://docs.apiverve.com/ref/vehiclefueleconomy"

  spec.files = Dir.glob("{lib}/**/*") + %w[README.md LICENSE]
  spec.require_paths = ["lib"]

  spec.add_dependency "faraday", ">= 1.0", "< 3.0"
  spec.add_dependency "faraday-multipart", "~> 1.0"
  spec.add_dependency "json", "~> 2.0"
end
