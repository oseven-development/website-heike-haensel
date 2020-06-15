// Hosting - homepage
resource "aws_s3_bucket" "hosting-bucket-homepage" {
  bucket = "heike-haensel-hosting-bucket-homepage-${var.random_id}"
  acl    = "private"
  region = "eu-central-1"

  website {
    index_document = "index.html"
    error_document = "404.html"
  }
}

resource "aws_s3_bucket" "hosting-redirect" {
  bucket = "heike-haensel-hosting-bucket-redirect-${var.random_id}"
  acl    = "private"
  website {
    redirect_all_requests_to = "https://heikehaensel.de"
  }
}

resource "aws_s3_bucket_policy" "public-access-website" {
  bucket = aws_s3_bucket.hosting-bucket-homepage.id
  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "${aws_s3_bucket.hosting-bucket-homepage.arn}/*"
    }
  ]
}
  POLICY
}