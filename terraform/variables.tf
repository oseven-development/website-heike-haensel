

variable "aws_region" {
  type    = string
  default = "eu-central-1"
}

variable "aws_profile" {
  type    = string
  default = "oseven"
}

variable "prefix" {
  type    = string
  default = "heike-haensel-website"
}

variable "random_id" {
  type    = string
  default = "pqldngjtzegbsjc"
}


variable "root_domain_name" {
  type    = string
  default = "heikehaensel.de"
}

variable "subject_alternative_names" {
  type    = list(string)
  default = ["www.heikehaensel.de"]
}






