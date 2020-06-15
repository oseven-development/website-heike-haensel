 provider "aws" {
  region                  = "us-east-1"
  version                 = "2.44.0"
  shared_credentials_file = "~/.aws/credentials"
  profile                 = "oseven"
}

resource "aws_acm_certificate" "cert" {
  domain_name       = "heikehaensel.de"
  validation_method = "DNS"
  subject_alternative_names =  ["*.heikehaensel.de", "www.heikehaensel.de"]
  lifecycle {
    create_before_destroy = true
  }
}