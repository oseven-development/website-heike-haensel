
terraform {
  required_providers {
    aws = {
      version = "3.68.0"
    }
  }
}

provider "aws" {
  region                  = var.aws_region
  shared_credentials_file = "~/.aws/credentials"
  profile                 = var.aws_profile
  default_tags {
    tags = {
      Environment   = "Prod"
      Terraform     = true
      Project       = "heikehaensel.de"
      Owner         = "oseven"
      GitHubProject = "oseven-development/website-heike-haensel"
    }
  }
}

// Provider for Amazon Certificate Manager
provider "aws" {
  alias                   = "acm"
  shared_credentials_file = "~/.aws/credentials"
  profile                 = var.aws_profile
  region                  = "us-east-1"
  default_tags {
    tags = {
      Environment = "Prod"
      Terraform   = true
      Project     = "heikehaensel.de"
    }
  }
}
